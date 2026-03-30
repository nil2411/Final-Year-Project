import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  openaiOrganizationId: process.env.OPENAI_ORG_ID || process.env.OPENAI_ORGANIZATION || '',
  openaiProjectId: process.env.OPENAI_PROJECT_ID || process.env.OPENAI_PROJECT || '',
  // Model selection and OpenAI-compatible overrides
  openaiModel: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  openaiBaseUrl: process.env.OPENAI_BASE_URL || '',

  // Optional alternate providers (OpenAI-compatible)
  // OpenRouter
  openrouterApiKey: process.env.OPENROUTER_API_KEY || '',
  openrouterModel: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
  openrouterBaseUrl: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
  // Groq
  groqApiKey: process.env.GROQ_API_KEY || '',
  groqModel: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
  groqBaseUrl: process.env.GROQ_BASE_URL || 'https://api.groq.com/openai/v1',

  googleProjectId: process.env.GOOGLE_PROJECT_ID || '',
  // For Google Cloud Translate, set GOOGLE_APPLICATION_CREDENTIALS env var to the service account JSON path
  allowedOrigins: (process.env.CORS_ORIGINS || '*').split(','),
  defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',
};
