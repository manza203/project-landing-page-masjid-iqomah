import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Adab from './pages/Adab'
import ScrollToTop from './components/ScrollToTop'
import Infaq from './pages/Infaq'
import Profil from './pages/Profil'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adab" element={<Adab />} />
        <Route path="/infaq" element={<Infaq />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  )
}