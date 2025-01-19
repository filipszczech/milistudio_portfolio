<template>
    <div>
        <footer class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-3 lg:gap-6 bg-transparent py-8 px-12 xl:py-12 text-mili_dark_blue">
            <p class="lg:order-2 border-black border-b px-1"
            v-motion
            :initial="{
                opacity: 0,
                y: 30,
            }"
            :visible="{
                opacity: 1,
                y: 0,
            }"
            :duration="500">lichtanskimichal@gmail.com</p>
            <div class="flex gap-3"
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
                <Icon size="1.5rem" name="simple-icons:instagram" />
                <Icon size="1.5rem" name="simple-icons:facebook" />
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