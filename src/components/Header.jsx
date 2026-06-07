import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoMasjid from '../assets/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Jadwal Salat', to: '/#jadwal-salat', anchor: true },
  { label: 'Adab', to: '/adab' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const solidNavbar = scrolled || !isHomePage

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuTextClass = solidNavbar
    ? 'text-primary hover:text-secondary'
    : 'text-white/90 hover:text-white'

  const activeTextClass = solidNavbar
    ? 'text-secondary'
    : 'text-secondary-container'

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6">
      <div
        className={`max-w-[1400px] mx-auto h-[70px] md:h-[82px] rounded-full backdrop-blur-xl shadow-2xl flex items-center justify-between px-5 md:px-10 transition-all duration-300 ${
          solidNavbar
            ? 'bg-white border border-border-hairline'
            : 'bg-[#ffffff33] border border-white/25'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 md:gap-3 transition-colors ${
            solidNavbar ? 'text-primary' : 'text-white'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoMasjid}
            alt="Logo Masjid"
            className="w-9 h-9 md:w-12 md:h-12 object-contain"
          />

          <div className="leading-tight">
            <p className="text-[15px] md:text-[17px] font-bold tracking-wide">
              Masjid Ikomah
            </p>

            <p
              className={`hidden md:block text-[11px] transition-colors ${
                solidNavbar ? 'text-on-surface-variant' : 'text-white/70'
              }`}
            >
              UIN Sunan Gunung Djati Bandung
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) =>
            item.anchor ? (
              <a
                key={item.label}
                href={item.to}
                className={`text-[15px] font-extrabold uppercase tracking-wide transition-colors ${menuTextClass}`}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-[15px] font-extrabold uppercase tracking-wide transition-colors ${
                    isActive ? activeTextClass : menuTextClass
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}

          <a
            href="https://forms.gle/zfLuBvJXD4837w6s6"
            target="_blank"
            rel="noreferrer"
            className={`text-[15px] font-extrabold uppercase tracking-wide transition-colors flex items-center gap-1 ${menuTextClass}`}
          >
            Kritik & Saran
            <span className="material-symbols-outlined text-[18px]">
              open_in_new
            </span>
          </a>
        </nav>

        {/* Desktop Donasi */}
        <Link
          to="/infaq"
          className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full text-[16px] font-extrabold uppercase tracking-wide transition-all active:scale-95 items-center gap-2"
        >
          <span className="material-symbols-outlined text-[22px]">
            favorite
          </span>
          Donasi
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
            solidNavbar
              ? 'bg-surface-container text-primary'
              : 'bg-white/20 text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 mx-auto max-w-[1400px] rounded-3xl bg-white border border-border-hairline shadow-2xl p-5">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-primary px-4 py-3 rounded-xl hover:bg-surface-container-low"
            >
              Home
            </Link>

            <a
              href="/#jadwal-salat"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-primary px-4 py-3 rounded-xl hover:bg-surface-container-low"
            >
              Jadwal Salat
            </a>

            <Link
              to="/adab"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-primary px-4 py-3 rounded-xl hover:bg-surface-container-low"
            >
              Adab
            </Link>

            <a
              href="https://forms.gle/zfLuBvJXD4837w6s6"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary px-4 py-3 rounded-xl hover:bg-surface-container-low flex items-center gap-2"
            >
              Kritik & Saran
              <span className="material-symbols-outlined text-[18px]">
                open_in_new
              </span>
            </a>

            <Link
              to="/infaq"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-emerald-600 text-white px-5 py-4 rounded-2xl font-extrabold uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[22px]">
                favorite
              </span>
              Donasi
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}