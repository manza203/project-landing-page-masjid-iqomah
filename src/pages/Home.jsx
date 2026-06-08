import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import AdabSection from '../components/AdabSection'
import JadwalSholat from '../components/JadwalSholat'
import heroImage from '../assets/masjidIkomah.png'
import { useEffect } from 'react'

/**
 * App — Masjid Kampus Portal (Fresh Forest)
 *
 * Structure follows home.html template blueprint:
 * - Header: Sticky navbar with backdrop-blur
 * - Hero: Full-width image banner (600px) with overlay + CTA
 * - Jadwal Salat: Overlapping card widget (-mt-12)
 * - Main Content: 12-col grid (8-col: Adab + Infaq, 4-col: Kegiatan sidebar)
 * - Footer: Dark bg-primary
 *
 * All tokens follow design.md Fresh Forest palette.
 */
export default function Home() {
  useEffect(() => {
    document.title = 'Masjid Ikomah | Portal Informasi Masjid'
  }, [])

  return (
    <div className="bg-background text-on-surface font-sans min-h-screen selection:bg-primary-fixed-dim selection:text-primary">
      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <Header />

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════ */}
      <main className="flex-1" id="main-content">

        {/* ── Hero Section ──────────────────────────────── */}
        <section
          className="relative min-h-screen pt-28 flex items-center overflow-hidden"
          id="hero-section"
        >
          {/* Background image + overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Masjid Kampus Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>

          {/* Hero content */}
          <div className="max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="max-w-2xl text-on-primary">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/30 font-label-md text-label-md mb-6 backdrop-blur-md">
                Pusat Spiritual Kampus Modern
              </span>

              <h1 className="font-display-lg text-display-lg md:text-[64px] mb-6 tracking-tight">
                Menghidupkan Masjid Digital
              </h1>

              <p className="font-body-lg text-body-lg mb-8 text-on-primary/90 leading-relaxed">
                Sinergi antara teknologi dan spiritualitas untuk menciptakan
                komunitas muslim kampus yang bertumbuh, harmoni, dan berwawasan
                masa depan.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#jadwal-salat"
                  className="group bg-secondary-container text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-primary-fixed-dim transition-colors flex items-center gap-2"
                >
                  Jelajahi Masjid
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <Link
                  to="/profil"
                  className="bg-white/10 border border-white/30 text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-white/20 transition-colors"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Jadwal Salat Widget ────────────────────────── */}
        <div id="jadwal-salat" className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mt-9 relative z-20">
          <div className="bg-white rounded-xl shadow-xl border border-border-hairline p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden font-sans">
            {/* Clock icon + date */}
            <div className="flex items-center gap-4 border-r border-outline-variant/30 pr-6 min-w-[260px]">
              <div className="p-3 bg-surface-container rounded-lg text-primary">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
              </div>

              <div>
                <p className="text-label-md font-label-md text-on-surface-variant">
                  Jadwal Salat Hari Ini
                </p>

                <p className="text-label-md font-label-md text-on-surface-variant">
                  {new Date().toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Prayer times grid */}
            <JadwalSholat />
          </div>
        </div>

        {/* ── Main Content Grid ─────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* ── Left column: Adab + Infaq (8-col) ────── */}
            <div className="md:col-span-8 flex flex-col gap-gutter">
              {/* Adab & Pedoman */}
              <AdabSection />

              {/* Program Infaq Digital */}
              <div className="bg-primary rounded-xl p-8 text-on-primary relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="max-w-x1">
                    <h2 className="text-headline-lg font-headline-lg mb-4">
                      Program Infaq Digital
                    </h2>
                    <p className="opacity-80 mb-6">
                      Berkontribusi langsung untuk pengembangan sarana dan
                      prasarana dakwah kampus yang lebih baik.
                    </p>
                    <Link
                      to="/infaq"
                      className="inline-flex bg-white text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface transition-colors"
                    >
                      Donasi Sekarang
                    </Link>
                  </div>
                </div>
                {/* Decorative blur circle */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
              </div>
            </div>

            {/* ── Right column: Kegiatan Sidebar (4-col) ── */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <div className="relative rounded-xl overflow-hidden group cursor-pointer h-full min-h-[400px]">
                <img
                  alt="Kegiatan Komunitas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAusoysc4yfPv7ZIQbenrto_NdSJEAxxfJiBLEJ44ZtoJaZTBmeSzol_xxenLI6GSYQWnjkLvkXGnHyOgH86OxGdNwCOGUSaV5Il6xii_2T8w277qgLsPFyMVbhCKS0INkpSFvx4vxv97RPsKfev7_QAOrqFzaRNtHVXoKbDMg3F-90KTAZ9-MBuLJv94nKe-Zo2WBoTBzoeJCyxvkf2yiXBU4tlxI_FcPuh1KOMzGAtG-2IyRlqBeL2buLxoSzqgIjidsZTQ05SLE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 text-on-primary">
                  <div className="mb-4 inline-flex items-center gap-2 bg-secondary-container/20 border border-white/20 px-3 py-1 rounded-full text-xs self-start backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm">
                      event
                    </span>
                    Update Terbaru
                  </div>
                  <h3 className="text-headline-md font-headline-md mb-2">
                    Kegiatan Rutin
                  </h3>
                  <p className="text-sm opacity-80 mb-6">
                    Lihat jadwal kajian mingguan, buka bersama, dan kegiatan
                    komunitas lainnya.
                  </p>
                  <Link to="/kegiatan" className="flex items-center gap-2 text-label-md font-label-md hover:underline bg-transparent border-none text-on-primary cursor-pointer p-0">
                    Lihat Semua Program{' '}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <Footer />
    </div>
  )
}
