// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon'],
  googleFonts: {
    families: {
      Nunito: true
    },
    display: 'auto',
    preload: true
  },


  plugins: ["~/plugins/preline.client.ts"],

  
})