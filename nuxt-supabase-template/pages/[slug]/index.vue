<template>
    <div class="">
        <PageContent>
            <div v-if="category" class="max-w-7xl mx-auto min-h-screen">
                <div class="mb-6 lg:mb-9 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ category.name }}</h1>
                    <h2 class="h-0 w-0 overflow-hidden">Podstrona prezentuje portfolio i listę zdjęć z kategorii {{ category.name }} zrealizowanych przez studio fotograficzne mili w Krakowie.</h2>
                    <p class="mt-3 text-base sm:text-lg w-4/5 mx-auto xl:w-2/3">{{ category.desc }}</p>
                </div>
                <div class=" min-h-screen">
                    <Suspense>
                        <template #default>
                            <AsyncPhotosContainer :category="category" />
                        </template>
                        <template #fallback>
                            <Loader />
                        </template>
                    </Suspense>
                </div>
                <div class="flex w-full justify-center gap-3 mt-12">
                    <div v-if="prevCategory" class="text-4xl pb-2 hover:border-b border-black">
                        <NuxtLink :to="'/' + prevCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + prevCategory.name" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-left" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                    <div v-if="nextCategory" class="text-4xl pb-2 hover:border-b border-black box-border">
                        <NuxtLink :to="'/' + nextCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + nextCategory.name" class="flex gap-2 items-center">
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
    import { useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    const AsyncPhotosContainer = defineAsyncComponent(() => import('~/components/PhotosContainer.vue'));

    const route = useRoute();
    const slug = route.params.slug;
    const photosStore = usePhotosStore();
    const category = ref(null);
    const nextCategory = ref(null);
    const prevCategory = ref(null);

    useHead({
        title: "Milistudio - " + photosStore.currentCategory,
    });

    onMounted(async () => {
        await photosStore.fetchCategories();
        nextCategory.value = photosStore.getNextCategory(slug);
        prevCategory.value = photosStore.getPreviousCategory(slug);
        category.value = await photosStore.fetchCategory(slug);
        if (!category.value) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Nie znaleziono kategorii o takiej nazwie.',
                fatal: true
            });
        };
        if(category) {
            useSetSeoData({
                title: category.value.name,
                description: `Portfolio studia fotograficznego Mili Studio, znajdującego się w Krakowie. Zdjęcia z kategorii ${category.value.name}.`,
                image: category.value.img,
                url: `/${category.value.slug}`
            });
            photosStore.setCurrentCategory(category.value.name);
        }
    });    

    
</script>