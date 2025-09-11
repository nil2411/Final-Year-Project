import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useLanguage } from '../context/LanguageContext.jsx'
import { t } from '../i18n/strings.js'
import { createRecognizer, speak, stopSpeaking } from '../utils/speech.js'

export default function Chatbot() {
  const { lang } = useLanguage()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [listening, setListening] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: t(lang, 'pages.chatbot.welcome'),
    }
  ])
  const listRef = useRef(null)
  const recRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  // Update the welcome message when language changes
  useEffect(() => {
    setMessages(prev => {
      if (!prev.length) return [{ role: 'assistant', text: t(lang, 'pages.chatbot.welcome') }]
      const first = prev[0]
      if (first.role === 'assistant') {
        const updated = [...prev]
        updated[0] = { ...first, text: t(lang, 'pages.chatbot.welcome') }
        return updated
      }
      return prev
    })
  }, [lang])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await axios.post('/api/chat/message', { message: text, lang })
      const reply = res?.data?.message || ''
      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
    } catch (e) {
      const code = e?.response?.data?.code
      const details = e?.response?.data?.details
      const errText = code === 'OPENAI_KEY_MISSING' ? t(lang, 'pages.chatbot.missingKey') : t(lang, 'pages.chatbot.errorServer')
      setMessages(prev => [...prev, { role: 'assistant', text: `${errText}${details ? `\n(${details})` : ''}` }])
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleListen = () => {
    if (listening) {
      try { recRef.current?.stop() } catch {}
      setListening(false)
      return
    }
    const rec = createRecognizer(lang)
    if (!rec) return
    recRef.current = rec
    setListening(true)
    rec.onresult = (ev) => {
      const transcript = ev.results?.[0]?.[0]?.transcript || ''
      setInput(prev => (prev ? `${prev} ${transcript}` : transcript))
    }
    rec.onend = () => setListening(false)
    rec.onerror = () => setListening(false)
    rec.start()
  }

  const playMessage = (text) => speak(text, lang)
  const stopTTS = () => stopSpeaking()

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-3">{t(lang, 'pages.chatbot.title')}</h2>
      <div className="bg-white border rounded-lg shadow h-[70vh] flex flex-col">
        <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, idx) => (
            <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <div className={`inline-block px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <div>{m.text}</div>
                {m.role === 'assistant' && (
                  <div className="mt-1 flex gap-2 text-sm">
                    <button onClick={() => playMessage(m.text)} className="underline text-green-700">
                      {t(lang, 'pages.chatbot.tts')}
                    </button>
                    <button onClick={stopTTS} className="underline text-gray-600">
                      {t(lang, 'pages.chatbot.stop')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-left">
              <div className="inline-block px-3 py-2 rounded-lg bg-gray-100 text-gray-900 animate-pulse">
                {t(lang, 'pages.chatbot.thinking')}
              </div>
            </div>
          )}
        </div>

        <div className="border-t p-3 flex gap-2 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder={t(lang, 'pages.chatbot.placeholder')}
            className="flex-1 resize-none rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={toggleListen}
            className={`rounded-md ${listening ? 'bg-red-600' : 'bg-gray-700'} text-white px-3 py-2`}
          >
            {listening ? t(lang, 'pages.chatbot.stop') : t(lang, 'pages.chatbot.speak')}
          </button>
          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-md bg-green-700 text-white px-4 py-2 disabled:opacity-60"
          >
            {t(lang, 'pages.chatbot.send')}
          </button>
        </div>
      </div>
    </div>
  )
}
