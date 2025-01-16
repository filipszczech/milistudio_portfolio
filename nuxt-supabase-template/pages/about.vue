<template>
    <div class="">
        <PageContent>
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl md:text-6xl font-semibold text-center">O mnie</h1>
            </div>
        </PageContent>
    </div>
</template>

<script setup>
    useHead({
        title: "Milistudio | o nas",
        meta: [
            { name: 'description', content: 'Milistudio - informacje o nas.' },
            { property: 'og:description', content: 'Milistudio - informacje o nas.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
</script>