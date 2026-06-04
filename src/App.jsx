import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Adab from './pages/Adab'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adab" element={<Adab />} />
      </Routes>
    </BrowserRouter>
  )
}