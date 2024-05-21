/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px", 
        desktop: "1280px", 
        "large-desktop": "1536px", 
      },
    },
  },
  plugins: [],
};
