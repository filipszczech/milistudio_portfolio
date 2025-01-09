<template>
    <div>
        <header>
            <nav class="fixed top-0 w-full z-50 bg-white">
                <div class="w-full flex justify-between items-center py-8 xl:py-12">
                    <NuxtLink to="/">
                        <p>logo</p>
                    </NuxtLink>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex gap-9 xl:gap-12">
                        <li>
                            <p>menu element</p>
                        </li>
                        <li>
                            <p>menu element</p>
                        </li>
                    </ul>
                </div>
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="flex flex-col justify-center items-end gap-4 lg:hidden py-4">
                        <p>menu element</p>
                        <p>menu element</p>
                        <p>menu element</p>
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
        border-bottom: 1px solid;
    }
</style>