// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: [
    '@appwrite.io/pink/dist/pink.css', 
    '@appwrite.io/pink-icons/dist/icon.css', 
    '@/assets/scss/CollorPallete.scss',
    '@/assets/css/fonts.css'
  ],
  components: [{ path: '@/components', pathPrefix: false }],
  modules: ['@pinia/nuxt'],
})