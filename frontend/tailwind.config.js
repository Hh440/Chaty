/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        PTSans: ["PT Sans", "sans-serif"],
        Jap: ["Noto Sans Japanese", "sans-serif"],
        Play:["Playwrite Netherland Guides"]
      }
    },
  },
  plugins: [],
}

