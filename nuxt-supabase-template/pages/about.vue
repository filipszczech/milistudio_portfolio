<template>
    <div class="">
        <PageContent>
            <div class="max-w-7xl mx-auto mb-9">
                <div class="flex flex-col gap-6 justify-center items-center">
                    <Suspense>
                        <template #default>
                            <AsyncAboutProfile />
                        </template>
                        <template #fallback>
                            <Loader />
                        </template>
                    </Suspense>
                    <h2 class="text-4xl md:text-6xl font-semibold text-center mb-6">linki</h2>
                    <a href="https://www.instagram.com/lichtanskimichal/" target="_blank" rel="noopener" aria-label="Michał Lichtański Instagram Profile" class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :duration="600" 
                        >
                        <Icon size="1rem" name="simple-icons:instagram" />
                        <span>lichtanskimichal</span>
                    </a>
                    <a href="mailto:lichtanskimichal@gmail.com" class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :duration="600" 
                        :delay="200"
                        >
                        <Icon size="1rem" name="simple-icons:maildotru" />
                        <span>lichtanskimichal@gmail.com</span>
                    </a>
                    <a href="https://www.facebook.com/lichtanski.michal/" target="_blank" rel="noopener" aria-label="Michał Lichtański Facebook Profile" class="flex gap-2 items-center text-lg lg:text-xl pb-1 border-b border-black w-fit"
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :duration="600" 
                        :delay="400">
                        <Icon size="1rem" name="simple-icons:facebook" />
                        <span>mili.studio</span>
                    </a>
                </div>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncAboutProfile = defineAsyncComponent(() => import('~/components/AboutProfile.vue'));
    
    useHead({
        title: "Milistudio - o nas",
        meta: [
            { name: 'description', content: 'Milistudio - informacje o nas.' },
            { property: 'og:description', content: 'Milistudio - informacje o nas.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>