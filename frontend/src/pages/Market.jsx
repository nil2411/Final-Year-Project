import { useLanguage } from '../context/LanguageContext.jsx'
import { t } from '../i18n/strings.js'

export default function Market() {
  const { lang } = useLanguage()
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">{t(lang, 'pages.market.title')}</h2>
      <p className="text-gray-700">{t(lang, 'pages.market.desc')}</p>
      <div className="mt-4 p-4 border rounded-md bg-white text-gray-800">
        <p className="text-sm">{t(lang, 'pages.market.soon')}</p>
      </div>
    </div>
  )
}
