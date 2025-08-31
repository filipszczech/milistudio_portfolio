<template>
    <div class="">
        <PageContent>
            <div class="max-w-7xl mx-auto mb-9">
                <div class="flex flex-col gap-6 justify-center items-center">
                    <Suspense>
                        <template #default>
                            <AsyncAboutProfile />
                        </template>
                        <template #fallback>
                            <Loader />
                        </template>
                    </Suspense>
                </div>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncAboutProfile = defineAsyncComponent(() => import('~/components/AboutProfile.vue'));
    useHead({
        title: "Mili.studio - o mnie",
        meta: [
            { name: 'description', content: 'Michał Lichtański – założyciel studia fotograficznego Milistudio w Krakowie' },
            { property: 'description', content: 'Michał Lichtański – założyciel studia fotograficznego Milistudio w Krakowie.' },
            { property: 'og:description', content: 'Michał Lichtański – założyciel studia fotograficznego Milistudio w Krakowie.' },
            { property: 'og:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:url', content: 'https://lichtanski.com/o-mnie' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Milistudio - informacje o mnie.' },
            { name: 'twitter:description', content: 'Fotograf Michał Lichtański – założyciel Milistudio w Krakowie. Portfolio i historia kariery.' },
            { name: 'twitter:image', content: 'https://strapi.lichtanski.com/uploads/profile_750223dab2.webp' }
        ],
        htmlAttrs: {
            lang: 'pl'
        },
        script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Michał Lichtański",
                "jobTitle": "Fotograf",
                "image": "https://strapi.lichtanski.com/uploads/profile_750223dab2.webp",
                "url": "https://lichtanski.com/o-mnie",
                "worksFor": {
                "@type": "LocalBusiness",
                "name": "Milistudio",
                "url": "https://lichtanski.com/"
                },
                "sameAs": [
                    "https://www.instagram.com/lichtanskimichal/",
                    "https://www.facebook.com/lichtanski.michal/",
                    "https://www.instagram.com/milistudio/",
                ],
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kraków",
                    "addressCountry": "PL"
                }
            })
        }
    ]
    });
</script>