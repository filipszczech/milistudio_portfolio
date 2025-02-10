<template>
    <div class="">
        <PageContent>
            <div class="max-w-7xl mx-auto min-h-screen">
                <div class="mb-6 lg:mb-9 text-mili_dark_blue text-center">
                    <h1 class="text-4xl md:text-6xl font-semibold">{{ category.name }}</h1>
                    <h2 class="h-0 w-0 overflow-hidden">Podstrona prezentuje portfolio i listę zdjęć z kategorii {{ category.name }} zrealizowanych przez studio fotograficzne mili w Krakowie.</h2>
                    <p class="mt-3 text-base sm:text-lg w-4/5 mx-auto xl:w-2/3">{{ category.desc }}</p>
                </div>
                <div v-show="showPhotos" class="columns-1 sm:columns-2 md:columns-3 gap-5">
                    <div v-for="photo in photos" :key="photo" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                            v-motion
                            :initial="{ opacity: 0, y: 30 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600">
                        <NuxtImg format="webp" placeholder  :src="photo" :alt="'zdjęcie z kategorii: ' + category.name" class="w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer" @click="openModal(photo)" />
                    </div>
                </div>
                <div v-if="!showPhotos" class="text-center mt-12">
                    loading...
                </div>
                <div class="flex w-full justify-center gap-3 mt-12">
                    <div v-if="prevCategory" class="text-4xl pb-2 hover:border-b border-black">
                        <NuxtLink :to="'/' + prevCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + prevCategory.name" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-left" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                    <div v-if="nextCategory" class="text-4xl pb-2 hover:border-b border-black box-border">
                        <NuxtLink :to="'/' + nextCategory.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + nextCategory.name" class="flex gap-2 items-center">
                            <Icon name="ci:chevron-right" size="2.5rem" />
                        </NuxtLink>
                    </div>
                    <div v-else></div>
                </div>
            </div>
        </PageContent>
        <div
            v-if="selectedPhoto"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]"
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
                        <Icon name="ci:close-big" size="2rem" />
                    </button>
                </div>
                <div class="flex flex-col justify-center items-center h-[65vh] md:h-[75vh]">
                    <NuxtImg format="webp" placeholder :src="selectedPhoto" :alt="'zdjęcie z kategorii: ' + category.name" class="bg-white p-4 max-w-[85vw] h-auto md:h-[75vh] max-h-[65vh] md:max-h-[75vh] object-cover" />
                </div>
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

<script setup async>
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute();
    const slug = route.params.slug;
    const photosStore = usePhotosStore();

    const category = ref(null);
    const photos = ref([]);
    const showPhotos = ref(false);

    await photosStore.fetchCategories();
    const nextCategory = photosStore.getNextCategory(slug);
    const prevCategory = photosStore.getPreviousCategory(slug);
    category.value = await photosStore.fetchCategory(slug);
    if (!category.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Nie znaleziono kategorii o takiej nazwie.',
            fatal: true
        });
    };
    await photosStore.fetchPhotos(category.value.slug);
    photos.value = photosStore.photos;
    setTimeout(() => {
        showPhotos.value = true;
    }, 500);
    if(category) {
        useSetSeoData({
            title: category.value.name,
            description: `Zdjęcia z kategorii ${category.value.name}.`,
            image: category.value.img,
            url: `/${category.value.slug}`
        });
    }

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

    const handleKeydown = (event) => {
        if (event.key === 'Escape') {
            if(selectedPhoto.value) {
                closeModal();
            }
        } else if (event.key === 'ArrowLeft') {
            if(selectedPhoto.value) {
                prevPhoto();
            }
        } else if (event.key === 'ArrowRight') {
            if(selectedPhoto.value) {
                nextPhoto();
            }
        }
    };

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
</script>