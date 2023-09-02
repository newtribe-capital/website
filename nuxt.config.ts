// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/style.css',
  ],
  modules: ['nuxt-swiper'],
  // plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})