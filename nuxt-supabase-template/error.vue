<template>
    <PageContent>
        <div class="max-w-7xl mx-auto my-9 md:my-16">
            <img  @click="handleClearError" class="h-12 mx-auto cursor-pointer" src="/img/mili.png" alt="mili logo" />
            <div class="mx-auto flex justify-center my-6">
                <img class="w-full max-w-52" src="https://strapi.lichtanski.com/uploads/profile_750223dab2.webp" alt="error" />
            </div>
            <div class="flex flex-col justify-center text-center">
                <h1 class="text-4xl md:text-4xl font-semibold mb-6">Wystąpił błąd! :(</h1>
                <p class="text-xl mb-2">Status błędu: {{ error.statusCode }}</p>
                <p class="text-xl mb-2">Treść błędu: {{ error.message }}</p>
                <div @click="handleClearError" class="mx-auto cursor-pointer text-2xl font-semibold p-1 border-b border-black w-fit mt-9">powrót do strony głównej</div>
            </div>
        </div>
    </PageContent>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: '/' });
    
    useHead({
        title: "Mili.studio - wystąpił błąd",
        meta: [
            { name: 'description', content: 'Mili.studio - wystąpił błąd.' }
        ],
        htmlAttrs: {
            lang: 'pl',
        },
    });
</script>