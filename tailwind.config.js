/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "secondary-fixed-dim": "#00dbe9",
              "on-primary": "#ffffff",
              "tertiary-fixed-dim": "#c0c1ff",
              "on-surface-variant": "#464653",
              "surface-container": "#eaedff",
              "on-primary-fixed-variant": "#3239a3",
              "on-primary-fixed": "#00006e",
              "error": "#ba1a1a",
              "secondary-fixed": "#7df4ff",
              "on-background": "#131b2e",
              "surface-container-highest": "#dae2fd",
              "surface-bright": "#faf8ff",
              "on-error-container": "#93000a",
              "secondary": "#006970",
              "primary-fixed-dim": "#bfc2ff",
              "on-secondary-fixed-variant": "#004f54",
              "surface-container-low": "#f2f3ff",
              "on-primary-container": "#777eea",
              "inverse-primary": "#bfc2ff",
              "background": "#faf8ff",
              "error-container": "#ffdad6",
              "primary-fixed": "#e0e0ff",
              "surface-container-lowest": "#ffffff",
              "surface-dim": "#d2d9f4",
              "on-secondary": "#ffffff",
              "on-surface": "#131b2e",
              "surface": "#faf8ff",
              "surface-tint": "#4b53bc",
              "inverse-surface": "#283044",
              "outline": "#767684",
              "tertiary": "#02003c",
              "primary": "#00003c",
              "primary-container": "#000080",
              "on-tertiary-fixed-variant": "#2f2ebe",
              "surface-variant": "#dae2fd",
              "on-secondary-container": "#00686f",
              "on-tertiary-container": "#767aff",
              "on-tertiary": "#ffffff",
              "tertiary-container": "#09007e",
              "surface-container-high": "#e2e7ff",
              "inverse-on-surface": "#eef0ff",
              "secondary-container": "#00eefc",
              "on-error": "#ffffff",
              "on-secondary-fixed": "#002022",
              "outline-variant": "#c6c5d5",
              "on-tertiary-fixed": "#07006c",
              "tertiary-fixed": "#e1e0ff"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "margin-desktop": "64px",
              "container-max": "1440px",
              "gutter": "24px",
              "unit": "8px",
              "margin-mobile": "16px"
          },
          "fontFamily": {
              "display-lg": ["Plus Jakarta Sans"],
              "body-lg": ["Inter"],
              "title-md": ["Plus Jakarta Sans"],
              "headline-lg-mobile": ["Plus Jakarta Sans"],
              "label-sm": ["JetBrains Mono"],
              "headline-lg": ["Plus Jakarta Sans"],
              "body-md": ["Inter"]
          },
          "fontSize": {
              "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
              "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
              "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
              "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
              "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }],
              "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
              "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
