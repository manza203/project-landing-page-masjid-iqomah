/**
 * Footer Component — Masjid Kampus (Fresh Forest)
 *
 * Dark footer mengikuti home.html template:
 * - Background: bg-primary (#0e2b00)
 * - Text: text-on-primary (#ffffff)
 * - 3 kolom link: Navigasi, Layanan, Bantuan
 * - Logo masjid + deskripsi + social icons
 * - Bottom bar: border-t border-white/10
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigasi',
      links: [
        { label: 'Tentang Kami', href: '#', featured: true },
        { label: 'Visi & Misi', href: '#' },
        { label: 'Pengurus', href: '#' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { label: 'Jadwal Salat', href: '#jadwal-salat' },
        { label: 'Dokumentasi', href: '#' },
        { label: 'Kritik dan Saran', href: 'https://forms.google.com', external: true },
      ],
    },
    {
      title: 'Bantuan',
      links: [
        { label: 'Kebijakan Privasi', href: '#' },
        { label: 'Hubungi Kami', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-primary" id="footer">
      {/* ── Main footer content ────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand column */}
        <div className="max-w-xs">
          <div className="text-headline-md font-headline-md text-on-primary flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-3xl">mosque</span>
            Masjid Kampus
          </div>
          <p className="text-body-md font-body-md text-on-primary/70 leading-relaxed mb-6">
            Mewujudkan ekosistem spiritual yang inklusif dan progresif bagi seluruh civitas akademika.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-on-primary"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-on-primary"
            >
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-on-primary">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-label-md text-label-md mb-6 uppercase tracking-wider opacity-60">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={
                        link.featured
                          ? 'text-label-md font-label-md text-on-primary font-bold underline'
                          : 'text-on-primary/80 hover:text-on-primary transition-colors'
                      }
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-md font-label-md text-on-primary/60">
          © {currentYear} Masjid Kampus. Spiritual Vitality & Growth.
        </p>
        <div className="flex items-center gap-2 text-on-primary/40 text-sm">
          Made with{' '}
          <span
            className="material-symbols-outlined text-error text-base"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>{' '}
          in Kampus Digital
        </div>
      </div>
    </footer>
  )
}
