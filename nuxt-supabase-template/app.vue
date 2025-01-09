<template>
    <div class="font-mono">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
    useHead({
      meta: [
        { name: "description", content: '' },
        { property: 'og:url', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: '' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: '' },
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
    transform: translateX(100px);
  }
</style>
