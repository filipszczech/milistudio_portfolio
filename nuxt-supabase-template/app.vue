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
        { name: "title", content: 'Milistudio - portfolio fotograficzne' },
        { name: "description", content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' },
        { property: 'og:url', content: '' },
        { property: 'og:title', content: 'Milistudio - portfolio fotograficzne' },
        { property: 'og:description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' },
        { property: 'og:image', content: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/mili/portret5.jpg' },
        { property: 'og:type', content: 'website' },

        // { name: 'twitter:title', content: '' },
        // { name: 'twitter:description', content: '' },
        // { name: 'twitter:image', content: '' },
        // { name: 'twitter:card', content: '' },

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
