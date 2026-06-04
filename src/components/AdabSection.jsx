/**
 * AdabSection — Panduan Adab Bermasjid (Fresh Forest)
 *
 * Specs: design.md + src/templates/adab.html
 *
 * Outer container:
 *   bg-white, border border-border-hairline, rounded-xl, p-8
 *   hover:shadow-lg, transition-all
 *
 * Cards (inner grid):
 *   bg-canvas (#ffffff), border border-border-hairline (#538d22)
 *   rounded-xl, p-6
 *   hover:shadow-lg hover:border-primary transition-all duration-300
 *
 * Grid layout:
 *   grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-gutter (24px)
 *
 * Icons:  Material Symbols Outlined — text-accent (#73a942)
 * Title:  font-headline-md text-headline-md text-primary
 * Body:   font-body-md text-body-md text-on-surface-variant
 */

import { Link } from 'react-router-dom'

const adabItems = [
  {
    icon: 'volume_off',
    title: 'Ketenangan',
    body: 'Menonaktifkan gawai selama berada di area masjid agar ibadah jamaah tidak terganggu.',
  },
  {
    icon: 'checkroom',
    title: 'Berpakaian',
    body: 'Mengenakan pakaian yang bersih, rapi, dan menutup aurat sesuai syariat Islam.',
  },
  {
    icon: 'cleaning_services',
    title: 'Kebersihan',
    body: 'Menjaga kebersihan area wudhu, ruang utama, dan seluruh fasilitas masjid.',
  },
  {
    icon: 'do_not_step',
    title: 'Batas Suci',
    body: 'Melepas alas kaki sebelum memasuki area sholat dan menyimpannya di rak yang tersedia.',
  },
  {
    icon: 'notifications_off',
    title: 'Mode Senyap',
    body: 'Mengaktifkan mode senyap pada ponsel sebelum memasuki masjid untuk menjaga kekhusyukan.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Saling Menghormati',
    body: 'Merapatkan dan meluruskan shaf, menghormati jamaah lain, serta menjaga fasilitas masjid.',
  },
]

export default function AdabSection() {
  return (
    <div
      className="relative bg-white border border-border-hairline rounded-xl overflow-hidden p-8 hover:shadow-lg transition-all duration-300"
      id="adab"
    >
      {/* ── Section header ──────────────────────────────── */}
    <Link
      to="/adab"
      className="flex justify-between items-start mb-10 group cursor-pointer"
      >
      <div>
        <h2 className="text-headline-lg font-headline-lg text-primary mb-2 group-hover:text-primary-hover transition-colors">
          Adab &amp; Pedoman
        </h2>

        <p className="text-body-md font-body-md text-on-surface-variant">
          Menjaga keharmonisan dan ketenangan ibadah bersama.
        </p>
      </div>

      <div className="p-4 bg-primary rounded-xl text-on-primary flex-shrink-0 group-hover:scale-110 transition-all duration-300">
        <span
          className="material-symbols-outlined text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
          >
          book_5
        </span>
      </div>
    </Link>

      {/* ── Adab cards grid ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {adabItems.map((item) => (
          <div
            key={item.title}
            className="group/card bg-canvas border border-border-hairline rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            id={`adab-card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {/* Icon — Material Symbols Outlined, text-accent */}
            <span className="material-symbols-outlined text-accent text-[28px] mb-3 block group-hover/card:scale-110 transition-transform duration-300">
              {item.icon}
            </span>

            {/* Title — headline-md */}
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              {item.title}
            </h3>

            {/* Body — body-md */}
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
