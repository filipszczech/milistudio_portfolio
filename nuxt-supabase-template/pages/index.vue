<template>
    <div class="">
        <PageContent>
            <h1 class="h-0 w-0 overflow-hidden">Strona główna - prezentacja studia fotograficznego milistudio.</h1>
            <h2 class="h-0 w-0 overflow-hidden">Właścicielem i założycielem Milistudio jest fotograf Michał Lichtański. Strona prezentuje jego osobę i prace. Zapraszamy do współpracy.</h2>
            <div class=" min-h-[32rem]">
                <Suspense>
                    <template #default>
                        <AsyncCategorySlider />
                    </template>
                    <template #fallback>
                        <Loader />
                    </template>
                </Suspense>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncCategorySlider = defineAsyncComponent(() => import('~/components/CategorySlider.vue'));

    useHead({
        title: "Mili.studio - strona główna",
        meta: [
            { name: 'og:title', content: 'Daniel Stoiński Redesign' },
            { name: 'description', content: 'Portfolio studia fotograficznego Milistudio, znajdującego się w Krakowie. Założycielem i właścicielem jest fotograf Michał Lichtański.' },
            { property: 'og:description', content: 'Portfolio studia fotograficznego Milistudio, znajdującego się w Krakowie. Założycielem i właścicielem jest fotograf Michał Lichtański.' },
            { property: 'og:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://lichtanski.com/' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Milistudio - strona główna' },
            { name: 'twitter:description', content: 'Portfolio studia fotograficznego Milistudio, znajdującego się w Krakowie.' },
            { name: 'twitter:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
        script: [
            {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Milistudio",
                "description": "Studio fotograficzne Milistudio, znajdujące się w Krakowie. Założycielem i właścicielem firmy jest Michał Lichtański.",
                "url": "https://lichtanski.com/",
                "image": "https://strapi.lichtanski.com/uploads/profile_750223dab2.webp",
                "email": "lichtanskimichal@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kraków",
                    "addressCountry": "PL"
                },
                "sameAs": [
                    "https://www.instagram.com/lichtanskimichal/",
                    "https://www.facebook.com/lichtanski.michal/",
                    "https://www.instagram.com/milistudio/",
                ]
            })
            }
        ],
    });
</script>