<template>
    <div class="">
        <h1 class="">Status błędu: {{ error.statusCode }}</h1>
        <div class="">
            <p class="">Wystąpił błąd! :(</p>
            <p v-if="error.statusCode === 404" class="">Podana strona nie istnieje</p>
            <p class="">Treść błędu: {{ error.message }}</p>
            <div @click="handleClearError" class="">/ powrót do strony głównej</div>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: '/' });
</script>