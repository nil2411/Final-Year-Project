import { Router } from 'express';
import { translateTo, detectLanguage } from '../services/translate.service.js';
import { chatWithAI } from '../services/ai.service.js';
import { supportedLanguages, normalizeLang } from '../utils/language.js';

const router = Router();

// POST /api/chat/message
// body: { message: string, lang?: 'en'|'hi'|'mr' }
router.post('/message', async (req, res) => {
  try {
    const { message, lang } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid request: `message` is required string' });
    }

    // Determine target language for response
    const targetLang = normalizeLang(lang) || (await detectLanguage(message)) || 'en';
    const target = supportedLanguages.includes(targetLang) ? targetLang : 'en';

    // Translate incoming to English for AI processing
    const englishText = await translateTo(message, 'en');

    // Call AI
    const aiResponseEn = await chatWithAI(englishText);

    // Translate back to target language
    const finalText = await translateTo(aiResponseEn, target);

    return res.json({
      message: finalText,
      meta: { detectedLang: targetLang, target, processedIn: 'en' },
    });
  } catch (err) {
    console.error('Chat error:', err);
    const code = err?.code || 'SERVER_ERROR';
    if (code === 'OPENAI_RATE_LIMIT') {
      // Provide a graceful fallback so users aren't blocked during temporary rate limits
      const fallback = 'Our AI is currently busy (rate limit). Here are general tips: keep questions concise, include crop, area, and stage. Try again in a few seconds.';
      return res.json({ message: fallback, meta: { fallback: true, reason: code } });
    }
    const status = code === 'OPENAI_KEY_MISSING' ? 500 : 500;
    res.status(status).json({ error: 'Failed to process message', code, details: err?.message });
  }
});

export default router;
