// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENABLE_DEVTOOLS === 'true' },
  routeRules: {
    '/': { 
      prerender: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Milistudio - portfolio fotograficzne',
      meta: [
        { name: "description", content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' },
        { property: 'og:url', content: 'https://lichtanski.com/' },
        { property: 'og:title', content: 'Milistudio - portfolio fotograficzne' },
        { property: 'og:description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' },
        { property: 'og:image', content: 'https://strapi.lichtanski.com/uploads/portret1_32f23cb10a.webp' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'Milistudio - portfolio fotograficzne' },
        { name: 'twitter:description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' },
        { name: 'twitter:image', content: 'https://strapi.lichtanski.com/uploads/portret1_32f23cb10a.webp' },
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