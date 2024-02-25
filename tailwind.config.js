/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        'iranSans' : ["IRANSans", "sans-serif"],
        'SnapWeb' : ["SnapWeb", "sans-serif"]
      },
      colors : {
        "surface-main": "#F9FAFB",
        "surface-dark": "#EBEDF0",
        "surface-light": "#FFFFFF",
        "surface-overlay": "#3A3D42",
        "surface-alphaLight": "rgba(249, 250, 251, 0.06)",
        "surface-alphaMedium": "rgba(249, 250, 251, 0.12)",
        "surface-alphaHigh": "rgba(249, 250, 251, 0.24)",
        "carbon-main": "#3A3D42",
        "carbon-dark": "#181B1F",
        "carbon-light": "#53565C",
        "carbon-overlay": "#FFFFFF",
        "carbon-alphaLight": "rgba(58, 61, 66, 0.06)",

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
