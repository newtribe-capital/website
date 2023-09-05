/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    // fontSize:{
    //   '4.5xl': '40px'
    // },
    extend: {
      fontFamily: {
        primary: ['Outfit']
      },
      backgroundImage: {
        'bg1': "url('https://res.cloudinary.com/dezmjeesi/image/upload/v1693478155/insights/bg1_dydsiq.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};