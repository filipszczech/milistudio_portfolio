<template>
    <div>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-5 relative">
            <div v-show="loaderActive" class="absolute top-0 left-0 w-full min-h-screen h-full z-10 bg-white transition-all duration-500">
                <div class="flex justify-center items-center w-full">
                    <Loader />
                </div>
            </div>
            <div v-for="photo in photos" :key="photo" class="w-full break-inside-avoid mb-3 sm:mb-5 overflow-hidden"
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :duration="600">
                <NuxtImg @click="openModal(photo)" format="webp" placeholder :src="'https://strapi.lichtanski.com' + photo.url" :alt="'zdjęcie z kategorii: ' + category.name" class="w-full object-cover md:hover:scale-[1.02] transition-all duration-500 md:cursor-pointer" />
            </div>
        </div>
        <PhotoModal 
            v-if="selectedPhoto && isLargeScreen" 
            :photo="selectedPhoto"
            :category="category.name"
            @close="closeModal"
            @prev="prevPhoto"
            @next="nextPhoto" />
    </div>
</template>

<script setup>
    const props = defineProps({
        category: {
            type: Object,
            required: true
        }
    });
    const photos = ref(props.category.photos);
    const selectedPhoto = ref(null);
    const loaderActive = ref(false);
    const isLargeScreen = computed(() => window.innerWidth >= 768);
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

    const showLoader = () => {
        loaderActive.value = true;
        setTimeout(() => {
            loaderActive.value = false;
        }, 1000);
    };

    onMounted(() => {
        showLoader();
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
</script>