import { useLanguage } from '../context/LanguageContext.jsx'
import { t } from '../i18n/strings.js'

export default function Dashboard() {
  const { lang } = useLanguage()
  const items = t(lang, 'pages.dashboard.items')
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">{t(lang, 'pages.dashboard.title')}</h2>
      <p className="text-gray-700">{t(lang, 'pages.dashboard.welcome')}</p>
      <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-800">
        {Array.isArray(items) && items.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  )
}
