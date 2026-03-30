// Simple Web Speech helpers for STT (speech to text) and TTS (text to speech)

export function getLangLocale(lang) {
  switch ((lang || 'en').toLowerCase()) {
    case 'hi':
      return 'hi-IN'
    case 'mr':
      return 'mr-IN'
    default:
      return 'en-US'
  }
}

export function speak(text, lang) {
  if (!('speechSynthesis' in window)) return
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = getLangLocale(lang)

  // Try to pick a matching voice
  const voices = window.speechSynthesis.getVoices()
  const match = voices.find(v => v.lang === utter.lang)
  if (match) utter.voice = match

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utter)
}

export function stopSpeaking() {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
}

export function createRecognizer(lang) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SR) return null
  const rec = new SR()
  rec.lang = getLangLocale(lang)
  rec.interimResults = false
  rec.maxAlternatives = 1
  return rec
}
