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
                <div class="flex w-full justify-center gap-3 mt-12">
                    <div v-if="h.prevCategory" class="text-4xl pb-2 hover:border-b border-black">
                        <NuxtLink :to="'/' + h.prevCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + h.prevCategory.name" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-left" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                    <div v-if="h.nextCategory" class="text-4xl pb-2 hover:border-b border-black box-border">
                        <NuxtLink :to="'/' + h.nextCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + h.nextCategory.name" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-right" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
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
        nextCategory: null,
        prevCategory: null,
    })

    const route = useRoute();
    const categoriesStore = useCategoriesStore();


    onMounted(async () => {
        await categoriesStore.fetchCategories()
        console.log(route.params.slug)
        console.log(categoriesStore.categories)
        const currentCategory = categoriesStore.setCurrentCategory(route.params.slug);
        if(!currentCategory) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Nie znaleziono kategorii.',
                fatal: true
            })
        }
        h.nextCategory = categoriesStore.getNextCategory();
        h.prevCategory = categoriesStore.getPreviousCategory();
        h.category = categoriesStore.currentCategory;
        useSetSeoData({
            title: h.category.name,
            description: `Portfolio studia fotograficznego Mili Studio (Kraków). Zdjęcia z kategorii ${h.category.name}.`,
            image: h.category.img.url,
            url: `/${h.category.slug}`,
        })
    })
</script>