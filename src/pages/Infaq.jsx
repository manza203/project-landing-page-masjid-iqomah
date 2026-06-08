import Header from '../components/Header'
import Footer from '../components/Footer'
import qrInfaq from '../assets/qr-infaq.jpg'
import { useEffect } from 'react'

export default function Infaq() {
  useEffect(() => {
    document.title = 'Infaq Digital | Masjid Ikomah'
  }, [])
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans">
      <Header />

      <main className="pt-36 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <section className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-primary font-label-md text-label-md mb-5">
              <span className="material-symbols-outlined text-[20px]">
                volunteer_activism
              </span>
              Infaq Digital
            </span>

            <h1 className="text-display-lg font-display-lg text-primary mb-4">
              Salurkan Infaq Terbaik Anda
            </h1>

            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Dukung kegiatan dakwah, pendidikan, kebersihan, dan pengembangan
              fasilitas Masjid Ikomah UIN Sunan Gunung Djati Bandung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            {/* QR Card */}
            <div className="bg-white border border-border-hairline rounded-2xl p-8 shadow-xl text-center">
              <h2 className="text-headline-lg font-headline-lg text-primary mb-2">
                Scan QR Infaq
              </h2>

              <p className="text-body-md text-on-surface-variant mb-6">
                Gunakan aplikasi mobile banking atau e-wallet yang mendukung QRIS.
              </p>

                <div className="bg-canvas-soft border border-border-hairline rounded-2xl p-6 mb-6">
                <img
                    src={qrInfaq}
                    alt="QR Code Infaq Masjid Ikomah"
                    className="w-full max-w-[360px] mx-auto rounded-xl"
                />
                </div>

                {/* Tambahkan ini */}
                <div className="bg-canvas-soft rounded-xl p-4 mt-4">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Penerima Infaq
                </p>

                <h3 className="text-xl font-bold text-primary">
                    MASJID IKOMAH KAMPUS 1 UIN
                </h3>
                </div>

              <p className="text-label-md font-label-md text-on-surface-variant">
                Pastikan nama penerima sesuai sebelum melakukan pembayaran.
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-primary text-on-primary rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-headline-lg font-headline-lg mb-5">
                  Untuk Apa Infaq Ini?
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      icon: 'mosque',
                      title: 'Operasional Masjid',
                      desc: 'Mendukung kebutuhan harian masjid dan pelayanan jamaah.',
                    },
                    {
                      icon: 'school',
                      title: 'Kegiatan Dakwah',
                      desc: 'Membantu pelaksanaan kajian, mentoring, dan program keislaman.',
                    },
                    {
                      icon: 'cleaning_services',
                      title: 'Kebersihan & Fasilitas',
                      desc: 'Menjaga kenyamanan, kebersihan, dan perawatan sarana masjid.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-on-primary/75 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-white/10 border border-white/20">
                  <p className="font-label-md text-label-md mb-1">
                    Catatan
                  </p>
                  <p className="text-on-primary/75">
                    Infaq yang diberikan akan digunakan untuk kemakmuran masjid
                    dan kegiatan keumatan.
                  </p>
                </div>
              </div>

              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}