// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENABLE_DEVTOOLS === 'true' },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'title',
      meta: [
        { name: "description", content: 'desc' },
        { property: 'og:url', content: 'url' },
        { property: 'og:title', content: 'title' },
        { property: 'og:description', content: 'og desc' },
        { property: 'og:image', content: '' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'title' },
        { name: 'twitter:description', content: 'twitter desc' },
        { name: 'twitter:image', content: '' },
        { name: 'twitter:card', content: 'summary' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/image', ['nuxt-mail', {
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  }], '@pinia/nuxt', '@nuxt/icon'],
  mail: {
    message: {
      to: process.env.EMAIL_USER,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  },
  supabase: {
    redirect: false
  },
})