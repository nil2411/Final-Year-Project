import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chatbot from './pages/Chatbot.jsx'
import Fertilizer from './pages/Fertilizer.jsx'
import Schemes from './pages/Schemes.jsx'
import Market from './pages/Market.jsx'
import Rentals from './pages/Rentals.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="fertilizer" element={<Fertilizer />} />
        <Route path="schemes" element={<Schemes />} />
        <Route path="market" element={<Market />} />
        <Route path="rentals" element={<Rentals />} />
      </Route>
    </Routes>
  )
}
