<template>
    <div class="">
        <PageContent v-if="category">
            <div class="max-w-7xl mx-auto">
                <div class="mb-6 lg:mb-9 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ category.name }}</h1>
                    <p class="mt-3 text-lg">Opis kategorii zdjęć. Jakaś historia,informacje i w ogóle.</p>
                </div>
                <div v-if="photos.length > 0" class="columns-1 sm:columns-2 md:columns-3 gap-5">
                    <div v-for="photo in photos" :key="photo.id" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                            v-motion
                            :initial="{ opacity: 0, y: 30 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600">
                        <img :src="photo.src" :alt="'zdjęcie: ' + photo.name" class="w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer" @click="openModal(photo)" />
                    </div>
                </div>
                <div class="hidden md:flex w-full justify-between mt-12">
                    <div v-if="prevCategory" class="text-4xl pb-2 hover:border-b border-black">
                        <NuxtLink :to="'/' + prevCategory.slug" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-left" size="2.5rem" />
                            <!-- <p>{{ prevCategory.name }}</p> -->
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                    <div v-if="nextCategory" class="text-4xl pb-2 hover:border-b border-black box-border">
                        <NuxtLink :to="'/' + nextCategory.slug" class="flex gap-2 items-center">
                            <!-- <p>{{ nextCategory.name }}</p> -->
                            <Icon name="ci:chevron-right" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                </div>
            </div>
        </PageContent>
        <div
            v-if="selectedPhoto"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            @click.self="closeModal"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :leave="{ opacity: 0 }"
            :duration="300"
            >
            <div class="h-fit w-fit"
                v-motion
                :initial="{ scale: 0.7 }"
                :enter="{ scale: 1 }"
                :leave="{ scale: 0.7 }"
                :duration="300">
                <div class="flex justify-end mb-4">
                    <button @click="closeModal" class="text-white">
                        <Icon name="ci:chevron-right" size="2rem" />
                    </button>
                </div>
                <div class="flex flex-col justify-center items-center h-[75vh]">
                    <img :src="selectedPhoto.src" :alt="'zdjęcie: ' + selectedPhoto.name" class="bg-white p-4 max-w-[80vw] max-h-[75vh] object-cover" />
                </div>
                <!-- <img :src="selectedPhoto.src" :alt="'zdjęcie: ' + selectedPhoto.name" class="bg-white p-4 max-w-[80vw] h-[75vh] object-cover" /> -->
                <div class="flex justify-center gap-6 items-center mt-4 text-white">
                    <button
                        class=""
                        @click="prevPhoto"
                        :disabled="photos.length <= 1"
                    >
                        <Icon name="ci:chevron-left" size="2rem" />
                    </button>
                    <button
                        class=""
                        @click="nextPhoto"
                        :disabled="photos.length <= 1"
                    >
                    <Icon name="ci:chevron-right" size="2rem" />
                    </button>
                </div>
            </div>
        </div>
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

    await photosStore.fetchCategories();
    const nextCategory = photosStore.getNextCategory(slug);
    const prevCategory = photosStore.getPreviousCategory(slug);
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

    const selectedPhoto = ref(null);
    const openModal = (photo) => {
        selectedPhoto.value = photo;
    };
    const closeModal = () => {
      selectedPhoto.value = null;
    };
    const selectedPhotoIndex = computed(() => {
      return photos.value.findIndex((photo) => photo === selectedPhoto.value);
    });
    const prevPhoto = () => {
      if (selectedPhotoIndex.value > 0) {
        selectedPhoto.value = photos.value[selectedPhotoIndex.value - 1];
      } else {
        selectedPhoto.value = photos.value[photos.value.length - 1];
      }
    };
    const nextPhoto = () => {
      if (selectedPhotoIndex.value < photos.value.length - 1) {
        selectedPhoto.value = photos.value[selectedPhotoIndex.value + 1];
      } else {
        selectedPhoto.value = photos.value[0];
      }
    };
</script>