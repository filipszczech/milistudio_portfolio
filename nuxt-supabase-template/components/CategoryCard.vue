<template>
    <div class="relative h-64 sm:h-80 md:h-[32rem] xl:h-96 2xl:h-[32rem] w-full cursor-pointer"
        @mouseenter="hover = true"
        @mouseleave="hover = false">
        <NuxtImg format="webp" placeholder class="w-full h-full object-cover hover:opacity-60 transition-all duration-500 bg-white" :src="'https://strapi.lichtanski.com' + category.img.url" :alt="'Zdjęcie okładkowe kategorii ' + category.name"/>
        <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
            <p class="text-2xl sm:text-4xl text-white transition-all duration-500 text-center"
            :class="{ '-translate-y-3': hover, 'translate-y-0': !hover }">{{ category.name }}</p>
        </div>
        <div
        class="absolute top-0 left-0 w-full h-full text-test transition-opacity duration-500"
        :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
        >
        </div>
    </div>
</template>
  
<script setup>
    const hover = ref(false);
    const props = defineProps({
        category: {
            type: Object,
            required: true
        }
    });
</script>
  
<style scoped>
    .text-test {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(3px);
    }
</style>
  