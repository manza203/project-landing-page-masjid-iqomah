import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const pengurus = [
  {
    jabatan: 'Ketua DKM',
    nama: 'Drs. Zaenal Muttaqin, M. Ag',
    deskripsi: '',
    icon: 'account_circle',
  },
  {
    jabatan: 'Sekretaris DKM',
    nama: 'User',
    deskripsi: '',
    icon: 'edit_note',
  },
]

export default function Profil() {
  useEffect(() => {
    document.title = 'Profil Masjid | Masjid Ikomah'
  }, [])
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans">
      <Header />

      <main className="pt-36 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <section className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-primary font-label-md text-label-md mb-5">
              <span className="material-symbols-outlined text-[20px]">
                mosque
              </span>
              Profil Masjid
            </span>

            <h1 className="text-display-lg font-display-lg text-primary mb-4">
              Masjid Ikomah
            </h1>

            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Masjid Ikomah UIN Sunan Gunung Djati Bandung menjadi pusat
              kegiatan ibadah, dakwah, pendidikan, dan pembinaan spiritual
              civitas akademika.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-section-gap">
            <div className="bg-white border border-border-hairline rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[32px]">
                  visibility
                </span>
              </div>

              <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
                Visi
              </h2>

              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Menjadi pusat kajian dan pengembangan peradaban Islam di Jawa Barat.
              </p>
            </div>

            <div className="bg-primary text-on-primary rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 text-on-primary flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[32px]">
                    flag
                  </span>
                </div>

                <h2 className="text-headline-lg font-headline-lg mb-4">
                  Misi
                </h2>

                <ul className="space-y-3 text-on-primary/80 leading-relaxed">
                  <li>• Pusat peningkatan hikmah Islamiyah.</li>
                  <li>• Pusat kajian kitab Turats dan Qira'ah.</li>
                  <li>• Pusat pemberdayaan dan pengembangan kelembagaan umat.</li>
                  <li>• Pusat pengembangan peradaban Islam.</li>
                </ul>
              </div>

              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-headline-lg font-headline-lg text-primary mb-2">
              Pengurus DKM
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Struktur pengurus inti Masjid Ikomah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {pengurus.map((item) => (
              <div
                key={item.jabatan}
                className="bg-white border border-border-hairline rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container text-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[36px]">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-2">
                      {item.jabatan}
                    </p>

                    <h3 className="text-headline-md font-headline-md text-primary mb-3">
                      {item.nama}
                    </h3>

                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}