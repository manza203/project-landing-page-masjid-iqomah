/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ── Core ──────────────────────────────── */
        "canvas":                  "#ffffff",
        "canvas-soft":             "rgba(170, 213, 118, 0.1)",
        "background":              "#eeffdd",
        "on-background":           "#092100",

        /* ── Primary ──────────────────────────── */
        "primary":                 "#0e2b00",
        "primary-container":       "#1a4301",
        "primary-hover":           "#245501",
        "on-primary":              "#ffffff",
        "on-primary-container":    "#81b163",
        "primary-fixed":           "#bef19c",
        "primary-fixed-dim":       "#a3d483",
        "on-primary-fixed":        "#092100",
        "on-primary-fixed-variant":"#27500d",
        "inverse-primary":         "#a3d483",

        /* ── Secondary ────────────────────────── */
        "secondary":               "#396a03",
        "secondary-container":     "#b8f482",
        "on-secondary":            "#ffffff",
        "on-secondary-container":  "#3f710b",
        "secondary-fixed":         "#b8f482",
        "secondary-fixed-dim":     "#9dd769",
        "on-secondary-fixed":      "#0d2000",
        "on-secondary-fixed-variant":"#295000",

        /* ── Tertiary ─────────────────────────── */
        "tertiary":                "#162900",
        "tertiary-container":      "#254100",
        "on-tertiary":             "#ffffff",
        "on-tertiary-container":   "#87b056",
        "tertiary-fixed":          "#c4f08e",
        "tertiary-fixed-dim":      "#a9d475",
        "on-tertiary-fixed":       "#102000",
        "on-tertiary-fixed-variant":"#2f4f00",

        /* ── Surface ──────────────────────────── */
        "surface":                 "#eeffdd",
        "surface-variant":         "#c3efa5",
        "surface-bright":          "#eeffdd",
        "surface-dim":             "#bbe79d",
        "surface-tint":            "#3e6924",
        "surface-container":       "#cffbb0",
        "surface-container-low":   "#d9ffbd",
        "surface-container-high":  "#c9f5aa",
        "surface-container-highest":"#c3efa5",
        "surface-container-lowest":"#ffffff",
        "on-surface":              "#092100",
        "on-surface-variant":      "#42493d",
        "inverse-surface":         "#163802",
        "inverse-on-surface":      "#d1feb2",

        /* ── Border & Accent ──────────────────── */
        "border-hairline":         "#538d22",
        "accent":                  "#73a942",

        /* ── Error ────────────────────────────── */
        "error":                   "#ba1a1a",
        "error-container":         "#ffdad6",
        "on-error":                "#ffffff",
        "on-error-container":      "#93000a",

        /* ── Outline ──────────────────────────── */
        "outline":                 "#73796b",
        "outline-variant":         "#c2c9b9",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        full:    "9999px",
      },

      spacing: {
        unit:             "4px",
        gutter:           "24px",
        "margin-mobile":  "16px",
        "margin-desktop": "48px",
        "section-gap":    "80px",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],

        "display-lg": ["Poppins", "sans-serif"],
        "headline-lg": ["Poppins", "sans-serif"],
        "headline-md": ["Poppins", "sans-serif"],
        "headline-lg-mobile": ["Poppins", "sans-serif"],

        "body-lg": ["Poppins", "sans-serif"],
        "body-md": ["Poppins", "sans-serif"],
        "label-md": ["Poppins", "sans-serif"],

        "serif-display": ["Playfair Display", "serif"],
        "serif-body": ["Source Serif 4", "serif"],
      },

      fontSize: {
        "display-lg":         ["48px", { lineHeight: "1.2",  fontWeight: "700" }],
        "headline-lg":        ["32px", { lineHeight: "1.3",  fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.3",  fontWeight: "700" }],
        "headline-md":        ["24px", { lineHeight: "1.4",  fontWeight: "600" }],
        "body-lg":            ["18px", { lineHeight: "1.6",  fontWeight: "400" }],
        "body-md":            ["16px", { lineHeight: "1.6",  fontWeight: "400" }],
        "label-md":           ["14px", { lineHeight: "1.4",  letterSpacing: "0.02em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
}
