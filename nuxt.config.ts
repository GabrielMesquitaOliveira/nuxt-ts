// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/CollorPallete.scss"],
  vite: {
    css: {
      devSourcemap: true
    },
  },
  components: [{path: '@/components', pathPrefix: false}],
  modules: ['@pinia/nuxt'],
})