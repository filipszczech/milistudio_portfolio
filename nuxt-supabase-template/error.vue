<template>
    <PageContent>
        <div class="max-w-7xl mx-auto">
            <h1 class="">Status błędu: {{ error.statusCode }}</h1>
            <div class="">
                <p class="">Wystąpił błąd! :(</p>
                <p v-if="error.statusCode === 404" class="">Podana strona nie istnieje</p>
                <p class="">Treść błędu: {{ error.message }}</p>
                <div @click="handleClearError" class="">/ powrót do strony głównej</div>
            </div>
        </div>
    </PageContent>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: '/' });
    
    useHead({
        title: "Milistudio | wystąpił błąd",
        meta: [
            { name: 'description', content: 'Milistudio - wystąpił błąd.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>