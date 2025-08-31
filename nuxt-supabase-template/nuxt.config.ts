// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENABLE_DEVTOOLS === 'true' },
  // routeRules: {
  //   '/': { 
  //     prerender: true,
  //   },
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Mili.studio - portfolio fotograficzne',
      meta: [
        { name: "description", content: 'Strona prezentuje portfolio studia fotograficznego Mili.studio.' },
        { property: 'og:url', content: 'https://lichtanski.com/' },
        { property: 'og:title', content: 'Mili.studio - portfolio fotograficzne' },
        { property: 'og:description', content: 'Strona prezentuje portfolio studia fotograficznego Mili.studio.' },
        { property: 'og:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'Mili.studio - portfolio fotograficzne' },
        { name: 'twitter:description', content: 'Strona prezentuje portfolio studia fotograficznego Mili.studio.' },
        { name: 'twitter:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' },
        { name: 'twitter:card', content: '' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
      //     defer: true,
      //   },
      // ],
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt', '@nuxt/icon', '@nuxt/fonts', '@vueuse/motion/nuxt', 'nuxt-schema-org', '@nuxtjs/sitemap'],
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
  sitemap: {
    gzip: true,
    sources: ["/api/__sitemap__/urls"],
  },
})