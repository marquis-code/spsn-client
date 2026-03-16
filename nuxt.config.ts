// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3002
  },
  modules: ['@nuxtjs/tailwindcss', 'lucide-nuxt', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    viewer: true,
  },
  app: {
    head: {
      title: 'Society for Cellular Pathology Scientists of Nigeria (SCPSN)',
      meta: [
        { name: 'description', content: 'Official website of the Society for Cellular Pathology Scientists of Nigeria. Professional development, conferences, and research in pathology.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
