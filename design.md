# Design Spec: Masjid Campus Portal (Salman ITB Vibe)

## 1. Overview
Aplikasi ini adalah portal komunitas masjid kampus modern yang interaktif, bersih, dan ramah jemaah. Menghilangkan gaya kaku majalah cetak, digantikan dengan layout card modern yang dinamis dengan sudut melengkung halus.

*   **Design Vibe:** Modern, Welcoming, Dynamic Islamic Community.
*   **Geometry:** Menggunakan `{rounded.lg}` (8px) untuk tombol dan kartu (tidak lagi tajam 0px).

## 2. Color Tokens (Fresh Forest Palette)
- `bg-canvas`: #ffffff (Clean White)
- `bg-canvas-soft`: #aad576 (Light Sage - 10% opacity untuk background seksi/kartu)
- `text-ink`: #143601 (Dark Deep Green untuk teks utama)
- `bg-primary`: #1a4301 (Forest Green untuk Header & Button)
- `bg-primary-hover`: #245501 (Olive Green)
- `border-hairline`: #538d22 (Leaf Green untuk border tipis)
- `text-accent`: #73a942 (Apple Green untuk badge/highlight)

## 3. Typography
- **Headings (Sans-Serif Modern):** *Inter* atau *Plus Jakarta Sans* (Bold, clean, ramah dibaca).
- **Body Text:** *Inter* (Regular, line-height 1.6 untuk kenyamanan membaca berita/adab).

## 4. Key Component Sections
1.  **Header:** Navbar modern dengan logo masjid di kiri, menu navigasi di tengah (Home, Adab, Jadwal Salat, Saran), dan tombol "Infaq" di kanan menggunakan `bg-primary`.
2.  **Hero Dynamic:** Banner besar dengan gambar masjid kampus, teks sambutan hangat, dan tombol pencarian agenda.
3.  **Jadwal Salat Widget:** Baris info waktu salat hari ini yang *clean* dengan penanda otomatis untuk waktu salat terdekat.
4.  **Adab & Pedoman Card Grid:** Mengubah kartu adab lama menjadi *layout* grid modern 3-kolom dengan ikon berwarna `text-accent` dan sudut `rounded-lg`.
5.  **DKM Feedback Form:** Form saran yang bersih di dalam wadah (container) `bg-canvas-soft` dengan tombol submit yang melengkung rapi.