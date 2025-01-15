<template>
    <div class="">
        <PageContent v-if="category">
            <div class="max-w-7xl mx-auto">
                <div class="mb-6 lg:mb-12 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ category.name }}</h1>
                    <p class="mt-6 text-lg">Opis kategorii zdjęć. Jakaś historia,informacje i w ogóle.</p>
                </div>
                <div class="columns-1 sm:columns-2 md:columns-3 gap-6">
                    <div class="w-full bg-red-400 h-96 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-green-400 h-80 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-blue-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-orange-400 h-96 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-gray-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-purple-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-gray-800 h-64 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-red-400 h-96 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-green-400 h-80 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-blue-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-orange-400 h-96 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-gray-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-purple-400 h-72 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                    <div class="w-full bg-gray-800 h-64 break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600"></div>
                </div>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';
    const categories = ref([
        { id: 1, name: 'Portret', slug: 'portret', img: '/img/portret.jpg' },
        { id: 2, name: 'Architektura', slug: 'architektura', img: '/img/architektura3.jpg' },
        { id: 3, name: 'Footografia kulinarna', slug: 'fotografia-kulinarna', img: '/img/jedzenie.jpg' },
        { id: 4, name: 'stills', slug: 'stills',  img: '/img/stills.jpg' },
        { id: 5, name: 'inne', slug: 'inne',  img: '/img/inne.jpg' },
    ]);

    const route = useRoute();
    const slug = route.params.slug;

    const category = computed(() =>
        categories.value.find((cat) => cat.slug === slug)
    );
</script>

<style scoped>
    .text-test {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
    }
</style>