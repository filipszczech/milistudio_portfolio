<template>
    <div class="">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
    useHead({
      meta: [
        { name: "title", content: 'Mili.studio - portfolio fotograficzne' },
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
        htmlAttrs: {
            lang: 'pl'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
            }
        ]
    });
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
  body {
    font-family: 'itc benguiat';
    background-color: white;
  }
</style>
