<template>
    <div>
        <header>
            <nav class="fixed top-0 w-full bg-mili_light_blue text-mili_dark_blue z-50">
                <div class="w-full flex justify-between items-center py-8 px-12">
                    <NuxtLink to="/">
                        <img class="h-7" src="/img/mili.png" alt="mili logo"/>
                    </NuxtLink>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" size="1.5rem" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex gap-9 xl:gap-12">
                        <NuxtLink to="/">
                            <li @mouseover="isPortfolioOpen = true" @mouseleave="isPortfolioOpen = false" class="relative py-1">
                                <div class="flex gap-2 items-center font-semibold">
                                    <p>portfolio</p>
                                    <Icon class="transition-all duration-300" :class="{ 'rotate-180': isPortfolioOpen }" name="gridicons:chevron-down" style="color: black" />
                                </div>
                                <ul v-if="isPortfolioOpen" class="absolute top-full"
                                    v-motion
                                    :initial="{ opacity: 0, y: -30 }"
                                    :enter="{ opacity: 1, y: 0 }"
                                    :leave="{ opacity: 0, y: -30 }"
                                    :duration="400">
                                    <li v-for="(category) in categories" :key="category.id" class="py-2">
                                        <NuxtLink :to="'/category/' + category.slug">
                                            <p>{{ category.name }}</p>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/about">
                            <li class="font-semibold py-1">
                                <p>o mnie</p>
                            </li>
                        </NuxtLink>
                    </ul>
                </div>
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="flex flex-col justify-center items-end gap-4 lg:hidden py-4">
                        <p>portfolio</p>
                        <p>o mnie</p>
                    </ul>
                </transition>
            </nav>
        </header>
    </div>
</template>

<script setup>
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }
    const handleLeave = (el, done) => {
      setTimeout(done, 400);
    }
    const isPortfolioOpen = ref(false);
    const categories = ref([
        { id: 1, name: 'Jedzenie', slug: 'jedzenie', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/czarnogora%202024/czg1.jpg' },
        { id: 2, name: 'Portrety', slug: 'portret', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/czarnogora%202024/0007_4A_konkurs.jpeg' },
        { id: 3, name: 'Dokument', slug: 'dokument', img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/balkany%20chlopaki/chlopaki2.jpg' },
        { id: 4, name: 'Architektura', slug: 'architektura',  img: 'https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/street%20portraits/60860014.jpg' },
    ]);
</script>

<style scoped>
    .slide-down-enter-active, .slide-down-leave-active {
        transition: all 0.5s ease;
    }

    .slide-down-enter-from, .slide-down-leave-to {
        opacity: 0;
        max-height: 0;
    }

    .slide-down-enter-to, .slide-down-leave-from {
        opacity: 1;
        max-height: 300px;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid #003D61;
    }
</style>