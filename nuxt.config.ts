// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/CollorPallete.scss"],
  components: [{path: '@/components', pathPrefix: false}],
  modules: ['@pinia/nuxt'],
  imports: {
    autoImport: true,
    global: true,
  }
})