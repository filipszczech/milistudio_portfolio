<template>
    <div>
        <!-- <swiper-container 
            class="mt-5 md:mt-12 2xl:mt-24 w-full min-h-[32rem]"
            slides-per-view="4"
            space-between="32" 
            autoplay="true"
            mousewheel="true"
            free-mode="true"
            :pagination="{ clickable: true }"
            :breakpoints="{
                320: { slidesPerView: 1 },
                740: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1536: { slidesPerView: 4 }
            }"
            style="--swiper-pagination-color: black; --swiper-pagination-bottom: 0px;">
            <swiper-slide v-for="(category, categoryId) in categories" :key="category.id" class="mb-12">
                <NuxtLink :to="'/' + category.slug">
                    <CategoryCard
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :enter="{ opacity: 1, y: 0 }"
                        :duration="600" :delay="200*categoryId" :category="category" />
                </NuxtLink>
            </swiper-slide>
        </swiper-container> -->
        <div class="mt-5 md:mt-12 2xl:mt-24 w-full min-h-[32rem]">
            <div class="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 2xl:mt-32">
                <div v-for="(category, categoryId) in categories" :key="category.id">
                    <NuxtLink :to="'/' + category.slug">
                        <CategoryCard
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600" :delay="200*categoryId" :category="category" />
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