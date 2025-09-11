import { Link, NavLink, Outlet } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { t } from '../i18n/strings.js'

function useNavItems(lang) {
  return [
    { to: '/', label: t(lang, 'nav.dashboard') },
    { to: '/chatbot', label: t(lang, 'nav.chatbot') },
    { to: '/fertilizer', label: t(lang, 'nav.fertilizer') },
    { to: '/schemes', label: t(lang, 'nav.schemes') },
    { to: '/market', label: t(lang, 'nav.market') },
    { to: '/rentals', label: t(lang, 'nav.rentals') },
  ]
}

export default function MainLayout() {
  const { lang, setLang } = useLanguage()
  const navItems = useNavItems(lang)

  return (
    <div className="min-h-screen grid grid-cols-12">
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white border-r">
        <div className="p-4 border-b">
          <Link to="/" className="text-lg font-semibold text-green-700">KrishiSaathi</Link>
          <p className="text-xs text-gray-500 mt-1">{t(lang, 'appTitle')}</p>
        </div>
        <nav className="p-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${isActive ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col">
        <header className="bg-green-700 text-white p-3 flex items-center justify-between">
          <h1 className="font-semibold">{t(lang, 'platform')}</h1>
          <div className="flex items-center gap-2">
            <label htmlFor="lang" className="text-sm text-white/90">{t(lang, 'language')}</label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="rounded-md bg-white text-gray-900 px-2 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="mr">मराठी (Marathi)</option>
            </select>
          </div>
        </header>

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
