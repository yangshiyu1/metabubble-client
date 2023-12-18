/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      "wireframe": {
        "color-scheme": "light",
        "primary": "#2b44e7",
        "secondary": "#f287a4",
        "accent": "#fffbbf",
        "neutral": "#26243d",
        "info": "#75a8f0",
        "success": "#13aa82",
        "warning": "#fab938",
        "error": "#f24421",
        "base-200": "#cacafa",
        "base-100": "#d4d4f7",
        "base-300": "#e8e8ff",

        "--rounded-box": "0.2rem",
        "--rounded-btn": "0.2rem",
        "--rounded-badge": "0.2rem",
        "--tab-radius": "0.2rem",
      }
    }, "black","light"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}