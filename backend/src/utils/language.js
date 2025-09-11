export const supportedLanguages = ['en', 'hi', 'mr'];

export function normalizeLang(lang) {
  if (!lang || typeof lang !== 'string') return null;
  const l = lang.toLowerCase();
  if (l.startsWith('en')) return 'en';
  if (l.startsWith('hi') || l === 'hn') return 'hi';
  if (l.startsWith('mr')) return 'mr';
  return null;
}
