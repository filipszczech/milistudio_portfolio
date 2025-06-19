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