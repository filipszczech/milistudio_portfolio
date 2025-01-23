<template>
    <div class="">
        <PageContent>
            <h1 class="h-0 w-0 overflow-hidden">Strona główna - prezentacja studia fotograficznego milistudio.</h1>
            <h2 class="h-0 w-0 overflow-hidden">Właścicielem i założycielem Milistudio jest fotograf Michał Lichtański. Strona prezentuje jego osobę i prace. Zapraszamy do współpracy.</h2>
            <div v-if="isLoading">
                <p class="text-center mt-32">loading...</p>
            </div>
            <CategorySlider v-else :categories="categories" />
        </PageContent>
    </div>
</template>

<script setup>
    const photosStore = usePhotosStore();
    const isLoading = ref(true);
    const categories = ref([]);

    try {
        await photosStore.fetchCategories();
        categories.value = photosStore.categories;
    } finally {
        isLoading.value = false;
    }

    useHead({
        title: "Milistudio - strona główna",
        meta: [
            { name: 'description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio. Założycielem i właścicielem jest fotograf Michał Lichtański.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>