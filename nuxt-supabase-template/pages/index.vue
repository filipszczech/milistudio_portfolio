<template>
    <div class="">
        <PageContent>
            <!-- <div class="mb-8 w-full flex justify-between items-end flex-wrap gap-6 text-[#003D61]"
                    v-motion
                    :delay="300"
                    :duration="600"
                    :initial="{ opacity: 0, y: 20 }"
                    :visibleOnce="{ opacity: 1, y: 0 }">
                <h1 class="text-6xl">milistudio.</h1>
            </div> -->
            <!-- <div class="w-full mb-6 relative text-mili_dark_blue">
                <img class="w-full lg:w-2/3 mx-auto bg-white" src="https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20printy/60920013_print.jpg" />
                <h1 class="text-4xl md:text-4xl text-white absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 p-12">milistudio</h1>
            </div> -->
            <!-- <img class="w-full mb-6 lg:mb-12" src="https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20printy/60920013_print.jpg" /> -->
            <!-- <p class="text-lg text-center mb-32 w-full lg:w-2/3 mx-auto text-mili_dark_blue"
                    v-motion
                    :delay="300"
                    :duration="600"
                    :initial="{ opacity: 0, y: 20 }"
                    :visibleOnce="{ opacity: 1, y: 0 }">Tworzymy projekty dla naszycch klientów od 15 lat. Jesteśmy studiem kreatywnym z pasją do fotografii i sztuki i w ogóle.</p> -->
            <!-- <div class="grid gap-6 lg:gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 2xl:mt-32">
                <div v-for="(category, categoryId) in categories" :key="category.id">
                    <NuxtLink :to="'/' + category.slug">
                        <CategoryCard
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visibleOnce="{ opacity: 1, y: 0 }"
                            :duration="600" :delay="300 + 200*categoryId" :category="category" />
                    </NuxtLink>
                </div>
            </div> -->
            <ClientOnly>
                <CategorySlider :categories="categories" />
            </ClientOnly>
        </PageContent>
    </div>
</template>

<script setup>
    const photosStore = usePhotosStore();
    const categories = ref([]);
    await photosStore.fetchCategories();
    categories.value = photosStore.categories;

    useHead({
        title: "Milistudio",
        meta: [
            { name: 'description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>