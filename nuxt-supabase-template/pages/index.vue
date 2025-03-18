<template>
    <div class="">
        <PageContent>
            <h1 class="h-0 w-0 overflow-hidden">Strona główna - prezentacja studia fotograficznego milistudio.</h1>
            <h2 class="h-0 w-0 overflow-hidden">Właścicielem i założycielem Milistudio jest fotograf Michał Lichtański. Strona prezentuje jego osobę i prace. Zapraszamy do współpracy.</h2>
            <Suspense>
                <template #default>
                    <AsyncCategorySlider />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
        </PageContent>
    </div>
</template>

<script setup>
    const AsyncCategorySlider = defineAsyncComponent(() => import('~/components/CategorySlider.vue'));

    useHead({
        title: "Milistudio - strona główna",
        meta: [
            { name: 'description', content: 'Strona prezentuje portfolio studia fotograficznego Milistudio, znajdującego się w Krakowie. Założycielem i właścicielem jest fotograf Michał Lichtański.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>