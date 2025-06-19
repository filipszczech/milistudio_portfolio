<template>
    <div v-if="h.profile">
        <NuxtImg format="webp" placeholder :src="'https://strapi.lichtanski.com' + h.profile.img.url" alt="Michał Lichtański - zdjęcie profilowe" class="w-full mt-6 lg:mt-0 object-cover max-w-[32rem] mx-auto mb-6" />
        <h1 class="text-4xl md:text-6xl font-semibold text-center mt-6 md:mt-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="600" 
            :delay="200"
        >milistudio.</h1>
        <h2 class="text-center text-lg lg:text-xl max-w-2xl my-6">{{ h.profile.desc }}</h2>
        <div class="flex flex-col gap-6 justify-center items-center mt-6md:mt-12">
            <h2 class="text-4xl md:text-6xl font-semibold text-center">linki</h2>
            <a :href="h.profile.ig_link" target="_blank" rel="noopener" aria-label="Michał Lichtański Instagram Profile" class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600" 
                >
                <Icon size="1rem" name="simple-icons:instagram" />
                <span>{{ h.profile.ig_name }}</span>
            </a>
            <div class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600" 
                :delay="200"
                >
                <Icon size="1rem" name="simple-icons:maildotru" />
                <span>{{ h.profile.mail }}</span>
        </div>
            <a :href="h.profile.fb_link" target="_blank" rel="noopener" aria-label="Michał Lichtański Facebook Profile" class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600" 
                :delay="400">
                <Icon size="1rem" name="simple-icons:facebook" />
                <span>{{ h.profile.fb_name }}</span>
            </a>
        </div>
    </div>
</template>

<script setup>
    const h = reactive({
        profile: null,
        profilePending: false,
        profileError: null,
    })

    onMounted(async () => {
        h.profilePending = true
        try {
            const { data } = await $fetch('https://strapi.lichtanski.com/api/profiles?populate[img][fields][0]=url', {
            })

            h.profile = data[0] || null;
        } catch (e) {
            h.categoriesError = e.message
        } finally {
            h.profilePending = false;
        }
    });
</script>