import Header from '../components/Header'
import Footer from '../components/Footer'
import interiorMasjid from '../assets/interiorMasjid.png'

const adabSections = [
  {
    icon: 'checkroom',
    title: 'Adab Berpakaian',
    body: 'Memasuki rumah Allah SWT memerlukan kesiapan lahiriah yang mencerminkan penghormatan. Jamaah diharapkan mengenakan pakaian yang bersih, rapi, dan tidak mencolok. Pastikan pakaian memenuhi syarat penutupan aurat secara sempurna: bagi laki-laki minimal menutupi antara pusar hingga lutut dengan atasan yang layak, dan bagi perempuan menutupi seluruh tubuh kecuali wajah dan telapak tangan. Hindarilah pakaian dengan gambar atau tulisan yang dapat mengganggu konsentrasi jamaah lain saat beribadah.',
  },
  {
    icon: 'cleaning_services',
    title: 'Menjaga Kebersihan',
    body: 'Kebersihan adalah sebagian dari iman. Jamaah diimbau untuk selalu menjaga keasrian ruang utama masjid dan area wudhu. Pastikan tidak ada sampah yang tertinggal, sekecil apapun itu. Saat berwudhu, gunakanlah air secukupnya secara bijak dan pastikan lantai tetap dalam kondisi seminimal mungkin terkena cipratan yang berlebihan agar tidak membahayakan jamaah lain. Mari bersama-sama merawat fasilitas masjid sebagai amanah kolektif umat.',
  },
  {
    icon: 'do_not_step',
    title: 'Batas Suci',
    body: 'Penting bagi setiap pengunjung untuk memperhatikan tanda batas suci yang telah ditetapkan. Lepaskanlah alas kaki sebelum menginjakkan kaki di area suci. Simpanlah alas kaki Anda pada rak yang telah disediakan agar tertata rapi dan memudahkan akses bagi jamaah lain. Menghormati batas suci adalah bentuk nyata dari menjaga kesucian tempat sujud kita kepada Yang Maha Kuasa.',
  },
  {
    icon: 'notifications_off',
    title: 'Ketenangan Ibadah',
    body: 'Masjid adalah tempat untuk mencari ketenangan dan kekhusyukan. Mohon nonaktifkan atau gunakan mode senyap pada perangkat telepon seluler Anda sebelum memasuki masjid. Hindari melakukan percakapan dengan suara keras atau aktivitas lain yang dapat memecah konsentrasi jamaah yang sedang shalat atau berdzikir. Mari kita ciptakan suasana yang syahdu agar setiap individu dapat berkomunikasi dengan Rabb-nya tanpa gangguan.',
  },
]

export default function Adab() {
  return (
    <div className="bg-background text-on-surface selection:bg-secondary-container min-h-screen relative font-body-md">
      {/* Background texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-tr from-canvas-soft to-transparent" />

      <div className="relative z-10">
        <Header />

        {/* Masthead */}
        <section className="relative min-h-[420px] pt-32 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface-container-low/50 to-transparent">
          <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[300px]">
              eco
            </span>
          </div>

          <div className="max-w-[800px] mx-auto px-4 text-center relative z-10 mt-10">
            <h1 className="font-serif-display text-display-lg md:text-[56px] text-primary leading-tight">
              Adab &amp; Pedoman Bermasjid
            </h1>

            <div className="mt-5 w-24 h-1.5 bg-accent mx-auto rounded-full" />
          </div>
        </section>

        {/* Main Content */}
        <main className="pt-4 pb-12 md:pt-6 md:pb-section-gap">
          <article className="max-w-[850px] mx-auto px-6 md:px-12 py-12 md:py-16 bg-white border border-border-hairline/30 rounded-xl shadow-sm relative z-10">
            {adabSections.map((section, index) => (
              <section
                key={section.title}
                className={`group opacity-100 translate-y-0 ${
                  index === adabSections.length - 1 ? 'mb-16' : 'mb-12'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-accent text-[28px]">
                    {section.icon}
                  </span>
                  <h2 className="font-serif-display text-[28px] text-tertiary">
                    {section.title}
                  </h2>
                </div>

                <div className="font-serif-body text-body-md text-on-surface-variant leading-relaxed">
                  <p>{section.body}</p>
                </div>
              </section>
            ))}

            {/* Quote Box */}
            <div className="bg-canvas-soft border-2 border-border-hairline rounded-lg p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 opacity-5">
                <span className="material-symbols-outlined text-[120px]">
                  mosque
                </span>
              </div>

              <div className="relative z-10 text-center">
                <span
                  className="material-symbols-outlined text-accent mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>

                <blockquote className="font-serif-display text-headline-md text-primary italic mb-4">
                  "Barangsiapa yang membangun masjid karena Allah, maka Allah
                  akan membangunkan baginya rumah di surga."
                </blockquote>

                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                  Menjaga adab adalah bagian dari memakmurkan rumah-Nya.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mt-16 rounded-xl overflow-hidden aspect-[21/9] shadow-sm">
              <img
                alt="Masjid Interior"
                className="w-full h-full object-cover"
                src={interiorMasjid}
              />
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  )
}