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
      },
      keyframes: {
        FadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        FadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        FadeIn: "FadeIn 500ms ease-in-out",
        FadeOut: "FadeOut 100ms ease-in-out forwards",
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
