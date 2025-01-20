<template>
    <div class="relative h-64 sm:h-80 md:h-[32rem] w-full cursor-pointer overflow-hidden transform hover:translate-y-5"
        @mouseenter="hover = true"
        @mouseleave="hover = false">
        <NuxtImg format="avif" placeholder class="w-full h-full object-cover hover:opacity-60 transition-all duration-500 bg-white" :src="category.img" :alt="'Zdjęcie okładkowe kategorii ' + category.name"/>
        <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-black">
            <p class="text-2xl sm:text-4xl text-white transition-all duration-500 text-center"
            :class="{ '-translate-y-3': hover, 'translate-y-0': !hover }">{{ category.name }}</p>
        </div>
        <div
        class="absolute top-0 left-0 w-full h-full text-test transition-opacity duration-500"
        :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
        >
        </div>
        <!-- <h2 class="mt-6 text-4xl text-center text-black">{{ category.name }}</h2> -->
        <!-- <p class="text-2xl mt-3 text-[#003D61]">{{ category.name }}</p> -->
    </div>
</template>
  
<script setup lang="ts">
    const hover = ref(false);
    interface Category {
        name: string;
        img: string;
    };
    defineProps<{
        category: Category;
    }>();
</script>
  
<style scoped>
    .text-test {
        background: rgba(255, 255, 255, 0.1); /* Półprzezroczyste tło */
        backdrop-filter: blur(3px);
    }
</style>
  