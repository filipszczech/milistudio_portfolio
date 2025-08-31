<template>
    <div class="">
        <PageContent>
            <div v-if="h.category" class="max-w-7xl mx-auto min-h-screen">
                <div class="mb-6 lg:mb-9 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ h.category.name }}</h1>
                    <h2 class="h-0 w-0 overflow-hidden">Podstrona prezentuje portfolio i listę zdjęć z kategorii {{ h.category.name }} zrealizowanych przez studio fotograficzne mili w Krakowie.</h2>
                    <p class="mt-3 text-base sm:text-lg w-4/5 mx-auto xl:w-2/3">{{ h.category.desc }}</p>
                </div>
                <div class=" min-h-screen">
                    <Suspense>
                        <template #default>
                            <AsyncPhotosContainer :category="h.category" />
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

<script setup async>
    import { useRoute } from 'vue-router'
    import { computed, onMounted } from 'vue'
    import { useCategoriesStore } from '~/stores/categories'

    const AsyncPhotosContainer = defineAsyncComponent(() =>
        import('~/components/PhotosContainer.vue')
    )

    const h = reactive({
        category: null,
    })

    const route = useRoute();
    const categoriesStore = useCategoriesStore();


    onMounted(async () => {
        await categoriesStore.fetchCategories()
        const currentCategory = categoriesStore.setCurrentCategory(route.params.slug);
        if(!currentCategory) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Nie znaleziono kategorii.',
                fatal: true
            })
        }
        h.category = categoriesStore.currentCategory;
        useHead({
            title: `Mili.Studio - ${h.category.name}`,
            meta: [
                { name: 'description', content: `Portfolio studia fotograficznego Mili.studio. Zdjęcia z kategorii ${h.category.name}.` },
                { property: 'og:title', content: `Mili.Studio - ${h.category.name}` },
                { property: 'og:description', content: `Portfolio studia fotograficznego Mili.studio. Zdjęcia z kategorii ${h.category.name}.` },
                { property: 'og:image', content: `https://strapi.lichtanski.com${h.category.img.url}` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: `https://lichtanski.com/${h.category.slug}` },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: `Mili.Studio - ${h.category.name}` },
                { name: 'twitter:description', content: `Portfolio studia fotograficznego Mili.studio. Zdjęcia z kategorii ${h.category.name}.` },
                { name: 'twitter:image', content: `https://strapi.lichtanski.com${h.category.img.url}` }
            ],
            htmlAttrs: {
                lang: 'pl'
            },
            script: [
                {
                type: 'application/ld+json',
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": `Mili.Studio - ${h.category.name}`,
                    "description": `Portfolio studia fotograficznego Mili.studio. Zdjęcia z kategorii ${h.category.name}.`,
                    "url": `https://lichtanski.com/${h.category.slug}`,
                    "image": `https://strapi.lichtanski.com${h.category.img.url}`,
                    "hasPart": {
                        "@type": "ItemList",
                        "name": `Galeria zdjęć z kategorii ${h.category.name}`,
                        "itemListElement": (h.category.photos || []).map((photo, index) => ({
                            "@type": "ImageObject",
                            "position": index + 1,
                            "name": photo.name || `${h.category.name} - zdjęcie ${index + 1}`,
                            "contentUrl": `https://strapi.lichtanski.com${photo.url}`,
                        }))
                    },
                    "isPartOf": {
                    "@type": "WebSite",
                    "name": "Mili.studio",
                    "url": "https://lichtanski.com"
                    }
                })
                }
            ]
        })
    })
</script>