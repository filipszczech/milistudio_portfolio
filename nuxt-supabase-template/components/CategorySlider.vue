<template>
    <div>
        <div class="mt-5 md:mt-12 2xl:mt-24 w-full min-h-[32rem]">
            <div class="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 2xl:mt-32">
                <div v-for="(category, categoryId) in categories" :key="category.id">
                    <NuxtLink :to="'/' + category.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + category.name">
                        <CategoryCard
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600" :delay="200 + 200*categoryId" :category="category" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
    categories: {
        type: Object,
        required: true
    }
    });
</script>