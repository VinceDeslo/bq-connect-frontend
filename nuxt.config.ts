import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      '~/components',
    ]
  },
  typescript: {
    strict: true
  },
  vite: {
    server: {
      host: 'localhost',
      port: 3000,
      hmr: false
    }
  },
  head: {
    charset: 'utf-8',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.ico' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  css: [
    'primevue/resources/themes/mdc-dark-indigo/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  }
})
