<template>
    <div class="">
        <PageContent v-if="category">
            <h1 class="text-2xl font-bold mb-4">{{ category.name }}</h1>
            <div class="columns-1 sm:columns-2 md:columns-3 gap-6">
                <div class="w-full bg-red-400 h-96 break-inside-avoid mb-6"></div>
                <div class="w-full bg-green-400 h-80 break-inside-avoid mb-6"></div>
                <div class="w-full bg-blue-400 h-72 break-inside-avoid mb-6"></div>
                <div class="w-full bg-orange-400 h-96 break-inside-avoid mb-6"></div>
                <div class="w-full bg-gray-400 h-72 break-inside-avoid mb-6"></div>
                <div class="w-full bg-purple-400 h-72 break-inside-avoid mb-6"></div>
                <div class="w-full bg-gray-800 h-64 break-inside-avoid mb-6"></div>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';
    const categories = ref([
        { id: 1, name: 'Jedzenie', slug: 'jedzenie', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/czarnogora%202024/czg1.jpg' },
        { id: 2, name: 'Portrety', slug: 'portret', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/czarnogora%202024/0007_4A_konkurs.jpeg' },
        { id: 3, name: 'Dokument', slug: 'dokument', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20chlopaki/chlopaki2.jpg' },
        { id: 4, name: 'Architektura', slug: 'architektura',  img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/street%20portraits/60860014.jpg' },
    ]);

    const route = useRoute();
    const slug = route.params.slug;

    const category = computed(() =>
        categories.value.find((cat) => cat.slug === slug)
    );
</script>