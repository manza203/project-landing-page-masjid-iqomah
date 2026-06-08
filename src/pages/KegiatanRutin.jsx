import Header from '../components/Header'
import Footer from '../components/Footer'
import fotoInterior from '../assets/interiorMasjid.png'

export default function KegiatanRutin() {
    const daftarKegiatan = [
        {
            id: 1,
            judul: "1. UPTQ (Unit Pengembangan Tilawatil Qur'an) Day",
            waktu: "Setiap Malam Jumat",
            deskripsi: "Kegiatan rutin yang dilaksanakan setiap malam Jumat berupa pembacaan Maulid Diba' sebagai bentuk kecintaan dan penghormatan kepada Rasulullah saw. Melalui kegiatan ini, jamaah diajak untuk memperdalam kecintaan kepada Nabi Muhammad saw, meneladani akhlak mulia beliau dalam kehidupan sehari-hari, serta mempererat tali ukhuwah Islamiyah antar anggota melalui lantunan shalawat bersama dan agenda ramah tamah setelah kegiatan selesai.",
            gambar: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            judul: "2. Pembinaan Umum TQS (Tilawatil Qur'an dan Sholawat)",
            waktu: "Setiap Senin Sore",
            deskripsi: "Kegiatan pembinaan yang diselenggarakan setiap Senin sore dengan fokus utama pada pembelajaran tilawah Al-Qur'an dan seni shalawat. Peserta dibimbing secara intensif untuk meningkatkan kemampuan membaca Al-Qur'an dengan baik dan benar sesuai kaidah tajwid, memahami dasar-dasar lagu (maqam) tilawah, serta membiasakan diri melantunkan shalawat sebagai sarana syiar dakwah yang menyejukkan.",
            gambar: fotoInterior
        },
        {
            id: 3,
            judul: "3. Hifzh Qur'an",
            waktu: "Setiap Rabu Sore",
            deskripsi: "Program pembinaan hafalan Al-Qur'an yang dilaksanakan setiap Rabu sore untuk memfasilitasi jamaah yang ingin menjaga kalamullah. Kegiatan ini meliputi program perbaikan bacaan (tahsin) secara berkala, bimbingan metode menghafal ayat-ayat Al-Qur'an yang efektif, serta sesi penyetoran hafalan (ziyadah dan muraja'ah) langsung kepada pembimbing guna meningkatkan kualitas serta menjaga hafalan secara berkelanjutan.",
            gambar: "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?auto=format&fit=crop&q=80&w=1000"
        }
    ]

    return (
        <div className="bg-background text-on-surface font-sans min-h-screen flex flex-col selection:bg-primary-fixed-dim selection:text-primary">
            <Header />

            <main className="flex-1 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 w-full">

                {/* ═══════════════════════════════════════════════════
                    BAGIAN JUDUL HALAMAN (SUDAH DIPERCANTIK TOTAL)
                ═══════════════════════════════════════════════════ */}
                <div className="mb-12 border-b border-outline-variant/30 pb-8">
                    {/* Badge kecil penanda kategori */}
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        Agenda Masjid Ikomah
                    </span>

                    {/* Judul Utama yang Besar dan Tegas */}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-800 mb-4 leading-tight">
                        Kegiatan Rutin UPTQ di Masjid Ikomah
                    </h1>

                    {/* Sub-deskripsi yang Proporsional */}
                    <p className="text-base md:text-lg text-stone-600 max-w-3xl leading-relaxed">
                        Program dan agenda rutin di Masjid Ikomah untuk memperdalam ilmu agama dan mempererat ukhuwah Islamiyah.
                    </p>
                </div>

                {/* ═══════════════════════════════════════════════════
                    LAYOUT KARTU KEGIATAN (FLEX-COL STACKED)
                ═══════════════════════════════════════════════════ */}
                <div className="flex flex-col gap-8">
                    {daftarKegiatan.map((kegiatan) => (
                        <div
                            key={kegiatan.id}
                            className="relative rounded-2xl overflow-hidden group h-full min-h-[340px] flex flex-col justify-end cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20"
                        >
                            {/* Gambar Background */}
                            <img
                                src={kegiatan.gambar}
                                alt={kegiatan.judul}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradien Gelap (Dari bawah ke atas untuk kontras teks) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-primary/95 md:via-primary/50" />

                            {/* Konten Teks di Atas Gambar */}
                            <div className="relative z-10 p-6 md:p-8 text-on-primary">
                                {/* Badge Waktu */}
                                <div className="mb-4 inline-flex items-center gap-2 bg-secondary-container/20 border border-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-md">
                                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">
                                        schedule
                                    </span>
                                    {kegiatan.waktu}
                                </div>

                                {/* Judul Card */}
                                <h3 className="text-xl md:text-3xl font-bold mb-3 tracking-tight">
                                    {kegiatan.judul}
                                </h3>

                                {/* Deskripsi Card */}
                                <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-4xl text-stone-100">
                                    {kegiatan.deskripsi}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}