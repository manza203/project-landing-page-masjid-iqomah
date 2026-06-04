import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Jadwal Salat', to: '/#jadwal-salat', anchor: true },
  { label: 'Adab', to: '/adab' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
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
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div
        className={`max-w-[1400px] mx-auto h-[82px] rounded-full backdrop-blur-xl shadow-2xl flex items-center justify-between px-10 transition-all duration-300 ${
          solidNavbar
            ? 'bg-white border border-border-hairline'
            : 'bg-[#ffffff33] border border-white/25'
        }`}
      >
        <Link
          to="/"
          className={`flex items-center gap-3 transition-colors ${
            solidNavbar ? 'text-primary' : 'text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[36px]">
            mosque
          </span>

          <div className="leading-tight">
            <p className="text-[17px] font-bold tracking-wide">
              Masjid Ikomah
            </p>

            <p
              className={`text-[11px] transition-colors ${
                solidNavbar ? 'text-on-surface-variant' : 'text-white/70'
              }`}
            >
              UIN Sunan Gunung Djati Bandung
            </p>
          </div>
        </Link>

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
            href="https://forms.google.com"
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

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full text-[16px] font-extrabold uppercase tracking-wide transition-all active:scale-95 flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px]">
            favorite
          </span>
          Donasi
        </button>
      </div>
    </header>
  )
}