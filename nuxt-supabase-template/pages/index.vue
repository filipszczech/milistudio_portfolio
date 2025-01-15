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
                <swiper-container 
                    class="mt-5 md:mt-12 2xl:mt-24 w-full"
                    slides-per-view="4"
                    space-between="32" 
                    autoplay="true"
                    mousewheel="true"
                    free-mode="true"
                    :pagination="{ clickable: true }"
                    :breakpoints="{
                        320: { slidesPerView: 1 },
                        740: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                        1536: { slidesPerView: 4 }
                    }"
                    style="--swiper-pagination-color: black; --swiper-pagination-bottom: 0px;">
                    <swiper-slide v-for="(category, categoryId) in categories" :key="category.id" class="mb-12">
                        <NuxtLink :to="'/' + category.slug">
                            <CategoryCard
                                v-motion
                                :initial="{ opacity: 0, y: 20 }"
                                :enter="{ opacity: 1, y: 0 }"
                                :duration="600" :delay="200*categoryId" :category="category" />
                        </NuxtLink>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </PageContent>
    </div>
</template>

<script setup>
    const categories = ref([
        { id: 1, name: 'portret', slug: 'portret', img: '/img/portret.jpg' },
        { id: 2, name: 'architektura', slug: 'architektura', img: '/img/architektura3.jpg' },
        { id: 3, name: 'fotografia kulinarna', slug: 'fotografia-kulinarna', img: '/img/jedzenie.jpg' },
        { id: 4, name: 'stills', slug: 'stills',  img: '/img/stills.jpg' },
        // { id: 5, name: 'inne', slug: 'inne',  img: '/img/inne.jpg' },
    ]);
    // const categories = ref([
    //     { id: 1, name: 'Jedzenie', slug: 'jedzenie', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/czarnogora%202024/czg1.jpg' },
    //     { id: 2, name: 'Portrety', slug: 'portret', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20chlopaki/chlopaki1.jpg' },
    //     { id: 3, name: 'Dokument', slug: 'dokument', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20chlopaki/chlopaki2.jpg' },
    //     { id: 4, name: 'Inne', slug: 'architektura',  img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/architektura/kolorki.jpg' },
    //     { id: 5, name: 'Architektura', slug: 'architektura',  img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/architektura/kolorki.jpg' },
    //     ]);
</script>

<style scoped>
    .text-test {
        font-family: 'Playfair Display', serif;
        background: rgba(255, 255, 255, 0.2); /* Półprzezroczyste tło */
        backdrop-filter: blur(10px);
    }
</style>