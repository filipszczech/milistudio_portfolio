<template>
    <div class="">
        <PageContent>
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
        title: "Milistudio",
        meta: [
            { name: 'description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>