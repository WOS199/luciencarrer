/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ["Geist"],
      secondary: ["HolandCentury"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/terrain-2.jpg')",
        "hero-mobile": "url('/assets/terrain.jpg')",
      },
      colors: {
        alabaster: "#F0F1E4",
        "racing-lime": "#caff00",
        "dark-linen": "#1E4731",
      },
    },
  },
  plugins: [],
};
