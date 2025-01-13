<template>
    <div class="relative w-full h-fit cursor-pointer overflow-hidden"
    @mouseenter="hover = true"
    @mouseleave="hover = false">
        <img class="w-full h-[32rem] object-cover hover:opacity-90 transition-all duration-500 bg-white" :src="category.img" :alt="category.name"/>
        <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-black">
            <p class="text-5xl text-mili_dark_blue font-semibold">{{ category.name }}</p>
        </div>
        <div
        class="absolute top-0 left-0 w-full h-full text-test transition-opacity duration-500"
        :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
        >
        </div>
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
        backdrop-filter: blur(5px);
    }
</style>
  