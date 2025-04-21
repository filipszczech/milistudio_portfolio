<template>
    <div>
        <div class="mt-5 w-full min-h-[32rem]">
            <!-- <div class="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 2xl:mt-6"> -->
            <div class="flex gap-3 md:gap-6 justify-center flex-wrap">
                <div v-for="(category, categoryId) in categories" :key="category.id" class="w-[calc(50%-6px)] md:w-[calc(50%-12px)] xl:w-[calc(25%-20px)]">
                    <NuxtLink :to="'/' + category.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + category.name">
                        <CategoryCard
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600" 
                            :delay="isLargeScreen ? 100 + 75 * categoryId : 0"
                            :category="category"
                            @click="photosStore.setCurrentCategory(category.name)" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const photosStore = usePhotosStore();
    const categories = ref([]);
    const isLargeScreen = computed(() => window.innerWidth >= 1024);
    onMounted(async () => {
        await photosStore.fetchCategories();
        categories.value = photosStore.categories;
    });
</script>