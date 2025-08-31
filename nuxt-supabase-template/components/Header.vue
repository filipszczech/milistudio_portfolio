<template>
    <div>
        <header>
            <nav class="fixed top-0 bg-white lg:relative w-full text-mili_dark_blue z-50">
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
                    <NuxtLink to="/" aria-label="Zobacz stronę główną Milistudio">
                        <img class="h-7" src="/img/mili_blue_dot.png" alt="mili logo"
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
                        <NuxtLink to="/" aria-label="Zobacz stronę główną Milistudio">
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
                                    <li v-for="(category) in categories" :key="category.id">
                                        <NuxtLink :to="'/' + category.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + category.name">
                                            <p class="py-1 px-2" @click="categoriesStore.setCurrentCategory(category.slug)">{{ category.name }}</p>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/o-mnie" aria-label="Zobacz informacje na temat Milistudio">
                            <li class="py-1 px-2">
                                <p>o mnie</p>
                            </li>
                        </NuxtLink>
                    </ul>
                </div>
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="fixed top-0 left-0  bg-white w-screen h-screen max-h-screen navbar-links flex flex-col justify-center pl-12 sm:pl-20 text-2xl gap-3 lg:hidden pb-2 pr-4 sm:pr-6">
                        
                    <button @click="toggleMenu" class="absolute top-12 right-12">
                        <Icon name="ci:close-big" size="2.5rem" />
                    </button>
                        <li class="mb-6">
                            <NuxtLink to="/" aria-label="Zobacz stronę główną Milistudio"  @click="toggleMenu">
                                <img class="h-12" src="/img/mili.png" alt="mili logo"
                                    v-motion
                                    :initial="{
                                        opacity: 0,
                                        scale: 0.7,
                                        x: -100,
                                    }"
                                    :enter="{
                                        opacity: 1,
                                        scale: 1,
                                        x: 0,
                                    }"
                                    :duration="500"
                                />
                            </NuxtLink>
                        </li>
                        <li class=""
                            v-motion
                                :initial="{
                                    opacity: 0,
                                    scale: 0.7,
                                    x: -100,
                                }"
                                :enter="{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                }"
                                :duration="500"
                                :delay="100">
                            <NuxtLink to="/o-mnie" aria-label="Zobacz informacje na temat Milistudio" @click="toggleMenu">
                                <p>o mnie</p>
                            </NuxtLink>
                        </li>
                        <li v-for="(category, index) in categories" :key="category.id" class=""
                            v-motion
                                :initial="{
                                    opacity: 0,
                                    scale: 0.7,
                                    x: -100,
                                }"
                                :enter="{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                }"
                                :duration="500"
                                :delay="200 + 100*index">
                            <NuxtLink :to="'/' + category.slug" :aria-label="'Zobacz zdjęcia z kategorii ' + category.name"  @click="handleCategoryClick(category)">
                                <p>{{ category.name }}</p>
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
    const isPortfolioOpen = ref(false);
    const categoriesStore = useCategoriesStore();
    const categories = ref([]);
    await categoriesStore.fetchCategories();
    categories.value = categoriesStore.categories;

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
        toggleBodyScroll(isMenuOpen.value);
    }

    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    const handleCategoryClick = (category) => {
        toggleMenu();
        categoriesStore.setCurrentCategory(category.slug)
    };
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
        max-height: 100vh;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid #003D61;
    }
    .text-test {
        background: rgba(255, 255, 255, 0.1); /* Półprzezroczyste tło */
        backdrop-filter: blur(3px);
    }
</style>