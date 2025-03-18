<template>
    <div
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
            <div class="flex justify-end mb-3">
                <button @click="closeModal" class="text-white">
                    <Icon name="ci:close-big" size="2rem" />
                </button>
            </div>
            <div class="flex flex-col justify-center items-center bg-white p-4">
                <NuxtImg format="webp" placeholder :src="photo.src" :alt="'zdjęcie z kategorii: ' + category" class=" max-w-[85vw] h-auto max-h-[65vh] md:max-h-[75vh] object-cover" />
                <p v-if="photo.name" class="mt-4 lg:text-lg">{{ photo.name }}</p>
            </div>
            <div class="flex justify-center gap-6 items-center mt-4 text-white">
                <button
                    class=""
                    @click="prevPhoto"
                >
                    <Icon name="ci:chevron-left" size="2rem" />
                </button>
                <button
                    class=""
                    @click="nextPhoto"
                >
                <Icon name="ci:chevron-right" size="2rem" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        photo: Object,
        category: String,
    });

    const emit = defineEmits(["close", "prev", "next"]);

    const closeModal = () => emit("close");
    const prevPhoto = () => emit("prev");
    const nextPhoto = () => emit("next");
</script>