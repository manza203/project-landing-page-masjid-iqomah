/**
 * Button Component — Masjid Kampus (Fresh Forest)
 *
 * Specs from design.md:
 * - Border Radius: rounded-lg (8px) — WAJIB
 * - Primary: bg-primary (#0e2b00), text-on-primary, hover:bg-primary-hover
 * - Outline: transparent bg, border border-hairline, text-primary
 * - Hero Primary: bg-primary-fixed, larger padding
 * - Hero Outline: glass effect with backdrop-blur
 * - Typography: label-md (14px, weight 600, Inter)
 *
 * Props:
 * - variant: 'primary' | 'outline' | 'hero-primary' | 'hero-outline'
 * - children: button content
 * - className: additional classes
 * - ...rest: any native button props
 */
export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}) {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-label-md text-label-md',
    'rounded-lg',                          // rounded-lg (8px) — design.md
    'transition-all duration-200',
    'cursor-pointer select-none',
    'active:opacity-80 active:scale-95',
  ].join(' ')

  const variants = {
    primary:
      'bg-primary hover:bg-primary-hover text-on-primary px-6 py-2.5',
    outline:
      'bg-transparent border border-border-hairline text-primary hover:bg-canvas-soft px-6 py-2.5',
    'hero-primary':
      'bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim px-8 py-4',
    'hero-outline':
      'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4',
  }

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
