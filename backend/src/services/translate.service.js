import { Translate } from '@google-cloud/translate/build/src/v2/index.js';
import { config } from '../config/index.js';

// Initialize Google Translate v2 client (expects GOOGLE_APPLICATION_CREDENTIALS env var)
let translateClient;
try {
  translateClient = new Translate({ projectId: config.googleProjectId || undefined });
} catch (e) {
  console.warn('[Translate] Initialization warning:', e?.message);
}

export const supportedLanguages = ['en', 'hi', 'mr'];

export async function detectLanguage(text) {
  try {
    if (!translateClient) return 'en';
    const [detection] = await translateClient.detect(text);
    const lang = Array.isArray(detection) ? detection[0]?.language : detection?.language;
    return lang || 'en';
  } catch (e) {
    console.warn('[Translate] detectLanguage failed:', e?.message);
    return 'en';
  }
}

export async function translateTo(text, target) {
  // If target is English and text seems English, skip API call
  if (!text) return '';
  const t = (target || 'en').toLowerCase();
  try {
    if (!translateClient) {
      // Fallback: return as-is if no client
      return text;
    }
    const [translation] = await translateClient.translate(text, t);
    return translation;
  } catch (e) {
    console.warn('[Translate] translateTo failed, returning original:', e?.message);
    return text;
  }
}
