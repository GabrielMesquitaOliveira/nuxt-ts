// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@appwrite.io/pink/dist/pink.css', 
    '@appwrite.io/pink-icons/dist/icon.css', 
  ],
  components: [{path: '@/components', pathPrefix: false}],
  modules: ['@pinia/nuxt'],
})