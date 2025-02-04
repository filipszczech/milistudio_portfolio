<template>
    <div>
        <header>
            <nav class="relative w-full text-mili_dark_blue z-50">
                <div class="w-full flex justify-between items-center py-8 px-4 sm:px-6 lg:px-8" 
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -30,
                    }"
                    :visible="{
                        opacity: 1,
                        y: 0,
                    }"
                    :duration="500">
                    <NuxtLink to="/">
                        <img class="h-7" src="/img/mili.png" alt="mili logo"
                            v-motion
                            :initial="{
                                scale: 0.7,
                            }"
                            :visible="{
                                scale: 1,
                            }"
                            :duration="500"/>
                    </NuxtLink>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" size="1.5rem" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex gap-6">
                        <NuxtLink to="/">
                            <li @mouseover="isPortfolioOpen = true" @mouseleave="isPortfolioOpen = false" class="bg-white relative py-1 box-border z-50">
                                <div class="flex gap-2 items-center px-2">
                                    <p>portfolio</p>
                                    <Icon class="transition-all duration-300" :class="{ 'rotate-180': isPortfolioOpen }" name="gridicons:chevron-down" />
                                </div>
                                <ul v-if="isPortfolioOpen" class="absolute bg-white bg-opacity-65 top-full"
                                    v-motion
                                    :initial="{ opacity: 0, y: -30 }"
                                    :enter="{ opacity: 1, y: 0 }"
                                    :leave="{ opacity: 0, y: -30 }"
                                    :duration="400">
                                    <li v-for="(category) in categories" :key="category.id" class="py-1 px-2">
                                        <NuxtLink :to="'/' + category.slug">
                                            <p>{{ category.name }}</p>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/about">
                            <li class="py-1 px-2">
                                <p>o mnie</p>
                            </li>
                        </NuxtLink>
                    </ul>
                </div>
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="navbar-links flex flex-col justify-center items-end gap-4 lg:hidden pb-2 px-4 sm:px-6">
                        <li class="">
                            <NuxtLink to="/">
                                <p>portfolio</p>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink to="/about">
                                <p>o nas</p>
                            </NuxtLink>
                        </li>
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
    const isPortfolioOpen = ref(false);
    const photosStore = usePhotosStore();
    const categories = ref([]);
    await photosStore.fetchCategories();
    categories.value = photosStore.categories;
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
    .text-test {
        background: rgba(255, 255, 255, 0.1); /* Półprzezroczyste tło */
        backdrop-filter: blur(3px);
    }
</style>