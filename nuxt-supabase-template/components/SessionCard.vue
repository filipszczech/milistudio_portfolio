<template>
    <div class="relative w-full h-fit cursor-pointer overflow-hidden mb-3"
    @mouseenter="hover = true"
    @mouseleave="hover = false">
        <img class="w-full object-cover hover:opacity-90 transition-all duration-500" :src="session.img" :alt="session.name"/>
        <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-black">
        </div>
        <div
        class="absolute top-0 left-0 w-full h-full text-test transition-opacity duration-500"
        :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
        >
        </div>
        <p class="text-lg mt-2 text-mili_dark_blue">{{ session.name }}</p>
    </div>
</template>
  
<script setup lang="ts">
    const hover = ref(false);
    interface Session {
        name: string;
        img: string;
    };
    defineProps<{
        session: Session;
    }>();
</script>
  