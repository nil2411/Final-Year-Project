import { ChatOpenAI } from '@langchain/openai';
import { SystemMessage, HumanMessage } from '@langchain/core/messages';
import { config } from '../config/index.js';

const systemPrompt = `You are KrishiBot, a helpful, accurate agricultural assistant for Indian farmers.
- Answer concisely with practical steps.
- If asked about fertilizers/pesticides, provide crop-wise guidance, recommended dosages, and safety precautions.
- For government schemes, provide a brief overview and eligibility criteria if known.
- For market rates or weather, explain that live data will be integrated soon and provide general advice.
- Keep the language simple and farmer-friendly.`;

let llm;
function getLLM() {
  if (!config.openaiApiKey) {
    const e = new Error('OPENAI_API_KEY is not set. Please configure your OpenAI key in the backend .env');
    e.code = 'OPENAI_KEY_MISSING';
    throw e;
  }
  if (!llm) {
    llm = new ChatOpenAI({
      apiKey: config.openaiApiKey,
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.3,
      organization: config.openaiOrganizationId || undefined,
      project: config.openaiProjectId || undefined,
    });
  }
  return llm;
}

export async function chatWithAI(userText) {
  const model = getLLM();
  const maxRetries = 3;
  let attempt = 0;
  let lastErr;
  while (attempt < maxRetries) {
    try {
      const response = await model.invoke([
        new SystemMessage(systemPrompt),
        new HumanMessage(userText),
      ]);
      return response?.content || '';
    } catch (err) {
      lastErr = err;
      const msg = String(err?.message || '').toLowerCase();
      const status = err?.status ?? err?.response?.status;
      const is429 = status === 429 || msg.includes('rate limit') || msg.includes('quota');
      if (is429) {
        // Exponential backoff: 0.5s, 1s, 2s
        const delay = 500 * Math.pow(2, attempt);
        await new Promise(r => setTimeout(r, delay));
        attempt += 1;
        if (attempt >= maxRetries) {
          const e = new Error('OpenAI rate limit or quota exceeded');
          e.code = 'OPENAI_RATE_LIMIT';
          e.status = 429;
          e.details = err?.message;
          throw e;
        }
        continue;
      }
      // Unknown error, rethrow
      throw err;
    }
  }
  throw lastErr || new Error('Unknown AI error');
}
