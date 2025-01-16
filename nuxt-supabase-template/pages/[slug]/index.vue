<template>
    <div class="">
        <PageContent v-if="category">
            <div class="max-w-7xl mx-auto">
                <div class="mb-6 lg:mb-9 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ category.name }}</h1>
                    <p class="mt-3 text-lg">Opis kategorii zdjęć. Jakaś historia,informacje i w ogóle.</p>
                </div>
                <div v-if="photos.length > 0" class="columns-1 sm:columns-2 md:columns-3 gap-6">
                    <div v-for="photo in photos" :key="photo.id" class="w-full break-inside-avoid mb-6"
                            v-motion
                            :initial="{ opacity: 0, y: 30 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600">
                        <img :src="photo.src" :alt="'zdjęcie: ' + photo.name" class="w-full object-cover" />
                    </div>
                </div>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    const route = useRoute();
    const slug = route.params.slug;
    const photosStore = usePhotosStore();
    const category = ref(null);
    const photos = ref([]);
    category.value = await photosStore.fetchCategory(slug);
    await photosStore.fetchPhotos(category.value.id);
    photos.value = photosStore.photos;
    if(category) {
        useSetSeoData({
            title: category.value.name,
            description: `Zdjęcia z kategorii ${category.value.name}.`,
            image: category.value.img,
            url: `/${category.value.slug}`
        });
    }
    if (!category) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Nie znaleziono kategorii o takiej nazwie.',
            fatal: true
        });
    };

</script>