<template>
    <div>
        <footer class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-3 lg:gap-6 bg-transparent py-8 px-12 xl:py-12 text-mili_dark_blue">
            <a href="mailto:lichtanskimichal@gmail.com" class="order-2 border-black border-b px-1"
            v-motion
            :initial="{
                opacity: 0,
                y: 30,
            }"
            :visible="{
                opacity: 1,
                y: 0,
            }"
            :duration="500">lichtanskimichal@gmail.com</a>
            <div class="flex gap-3 items-center"
                v-motion
                :initial="{
                    opacity: 0,
                    y: 30,
                }"
                :visible="{
                    opacity: 1,
                    y: 0,
                }"
                :duration="500">
                <a href="https://www.instagram.com/lichtanskimichal/" target="_blank" rel="noopener" aria-label="Michał Lichtański Instagram Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                    <Icon size="1.5rem" name="simple-icons:instagram" />
                </a>
                <a href="https://www.facebook.com/lichtanski.michal/" target="_blank" rel="noopener" aria-label="Michał Lichtański Facebook Profile" class="flex items-center hover:scale-105 transition-all duration-300">
                    <Icon size="1.5rem" name="simple-icons:facebook" />
                </a>
            </div>
            <p class="order-3"
                v-motion
                :initial="{
                    opacity: 0,
                    y: 30,
                }"
                :visible="{
                    opacity: 1,
                    y: 0,
                }"
                :duration="500">© All rights reserved</p>
        </footer>
    </div>
</template>

<script setup>

</script>