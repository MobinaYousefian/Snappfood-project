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
        'iRANSansBold' : ["IRANSansBold", "sans-serif"],
        'SnapWeb' : ["SnapWeb", "sans-serif"],
        'SnapWebBold' : ["SnapWebBold", "sans-serif"]
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
        "carbon-alphaMedium": "rgba(58, 61, 66, 0.12)",
        "carbon-alphaHigh": "rgba(24, 28, 32, 0.2)",
        "accent-main": "#FF00A6",
        "accent-dark": "#E00096",
        "accent-light": "#FF38AC",
        "accent-overlay": "#FFFFFF",
        "accent-alphaLight": "rgba(255, 0, 166, 0.06)",
        "accent-alphaMedium": "rgba(255, 0, 166, 0.12)",
        "accent-alphaHigh": "rgba(255, 0, 166, 0.24)",
        "accent2-main": "#00B862",
        "accent2-dark": "#008542",
        "accent2-light": "#18C775",
        "accent2-overlay": "#FFFFFF",
        "accent2-alphaLight": "rgba(0, 133, 66, 0.06)",
        "accent2-alphaMedium": "rgba(0, 133, 66, 0.1)",
        "accent2-alphaHigh": "rgba(0, 133, 66, 0.2)",
        "alert-main": "#FA284B",
        "alert-dark": "#E00025",
        "alert-light": "#FF3D5D",
        "alert-overlay": "#FFFFFF",
        "alert-alphaLight": "rgba(250, 40, 75, 0.04)",
        "alert-alphaMedium": "rgba(250, 40, 75, 0.12)",
        "alert-alphaHigh": "rgba(250, 40, 75, 0.24)",
        "attention-main": "#FACB0F",
        "attention-dark": "#9E6900",
        "attention-light": "#FFD83D",
        "attention-overlay": "#000000",
        "attention-alphaLight": "rgba(250, 203, 15, 0.1)",
        "attention-alphaMedium": "rgba(250, 203, 15, 0.2)",
        "attention-alphaHigh": "rgba(250, 203, 15, 0.36)",
        "inactive-main": "#EDEFF0",
        "inactive-dark": "#A6AAAD",
        "inactive-light": "#EDEFF0",
        "inactive-overlay": "#EDEFF0",
        "inactive-alphaLight": "#EDEFF0",
        "inactive-alphaMedium": "#EDEFF0",
        "inactive-alphaHigh": "#EDEFF0",
        // "party-color" : "radial-gradient(100% 303.06% at 0% 0%, #f69 0%, #e02291 100%);"
      },
      boxShadow : {
        "sp-inset": "inset 0px 1px 6px rgba(0, 0, 0, 0.04)",
        "sp-small": "0px 1px 0px rgba(58, 61, 66, 0.06), 0px 2px 8px -2px rgba(0, 0, 0, 0.05)",
        "sp-medium": "0px 1px 0px rgba(58, 61, 66, 0.06), 0px 4px 16px -8px rgba(0, 0, 0, 0.2)",
        "sp-high": "0px 1px 0px rgba(58, 61, 66, 0.06), 0px 8px 32px -16px rgba(0, 0, 0, 0.3)",
        "sp-modal": "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 8px 32px rgba(0, 0, 0, 0.16)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty : {
        "socialFooter" : "all 150ms ease-out 0s",
        "categoryHomePage" : "all 200ms ease-in-out 0s"
      },
      borderWidth : {
        "spBorder" : "0.09375rem"
      },
      screens : {
        "sp-tablet" : "600px",
        "sp-laptop" : "960px",
        "sp=laptop-lg" : "1280px"
      }
    },
  },
  plugins: [],
}
