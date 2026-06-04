import { useEffect, useState } from 'react'

const latitude = -6.9361
const longitude = 107.7196

function timeToDate(time) {
  const [hour, minute] = time.split(':').map(Number)
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute)
}

function formatCountdown(ms) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours > 0) return `${hours} jam ${minutes} menit lagi`
  return `${minutes} menit lagi`
}

export default function JadwalSholat() {
  const [jadwal, setJadwal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    async function fetchJadwal() {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=20`
        )

        const result = await response.json()
        setJadwal(result.data)
      } catch (error) {
        console.error('Gagal mengambil jadwal sholat:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJadwal()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex-1 text-center text-primary font-label-md">
        Memuat jadwal...
      </div>
    )
  }

  if (!jadwal) {
    return (
      <div className="flex-1 text-center text-error font-label-md">
        Jadwal gagal dimuat
      </div>
    )
  }

  const times = jadwal.timings

  const prayerTimes = [
    { name: 'Subuh', time: times.Fajr },
    { name: 'Syuruq', time: times.Sunrise },
    { name: 'Dzuhur', time: times.Dhuhr },
    { name: 'Ashar', time: times.Asr },
    { name: 'Maghrib', time: times.Maghrib },
    { name: 'Isya', time: times.Isha },
  ]

  const nextPrayer =
    prayerTimes.find((prayer) => timeToDate(prayer.time) > now) ||
    prayerTimes[0]

  const nextPrayerDate =
    timeToDate(nextPrayer.time) > now
      ? timeToDate(nextPrayer.time)
      : new Date(timeToDate(nextPrayer.time).getTime() + 24 * 60 * 60 * 1000)

  return (
    <div className="flex-1 w-full">
      {/* Info tambahan */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        {/* Jam Sekarang */}
        <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px] text-accent">
            schedule
            </span>

            <p className="text-label-md font-label-md">
            Sekarang:{' '}
            <span className="text-primary font-semibold">
                {now.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                })}{' '}
                WIB
            </span>
            </p>
        </div>

        {/* Sholat Berikutnya */}
        <div className="flex items-center gap-2 bg-canvas-soft border border-border-hairline rounded-full px-4 py-2">
            <span className="material-symbols-outlined text-[20px] text-accent">
            notifications_active
            </span>

            <p className="text-label-md font-label-md text-on-surface-variant">
            Berikutnya:{' '}
            <span className="text-primary font-semibold">
                {nextPrayer.name}
            </span>{' '}
            <span className="text-secondary">
                ({formatCountdown(nextPrayerDate - now)})
            </span>
            </p>
        </div>
        </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        {prayerTimes.map((prayer) => {
          const active = prayer.name === nextPrayer.name

          return (
            <div
              key={prayer.name}
              className={`text-center p-3 rounded-lg group transition-all ${
                active
                  ? 'bg-surface-container-low border border-border-hairline scale-105 shadow-sm'
                  : 'hover:bg-canvas-soft'
              }`}
            >
              <p
                className={`text-label-md font-label-md mb-1 ${
                  active
                    ? 'text-tertiary font-bold'
                    : 'text-on-surface-variant'
                }`}
              >
                {prayer.name}
              </p>

              <p className="text-headline-md font-headline-md text-primary group-hover:scale-110 transition-transform">
                {prayer.time}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}