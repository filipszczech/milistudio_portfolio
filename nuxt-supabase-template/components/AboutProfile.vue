<template>
    <div v-if="profile">
        <NuxtImg format="webp" placeholder :src="profile.img" alt="Michał Lichtański - zdjęcie profilowe" class="w-full mt-6 lg:mt-0 object-cover max-w-[32rem] mx-auto mb-6" />
        <h1 class="text-4xl md:text-6xl font-semibold text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="600" 
            :delay="200"
        >milistudio.</h1>
        <h2 class="text-center text-lg lg:text-xl max-w-2xl my-6">{{ profile.desc }}</h2>
    </div>
</template>

<script setup>
    const profile = ref(null);
    const profilePending = ref(true);
    const profileError = ref(null);

    onMounted(async () => {
        const supabase = useSupabaseClient();
        profileError.value = null;
        try {
            const { data, error } = await supabase
            .from('profiles_mili')
            .select('*')
            .eq('active', true)
            .limit(1)
            .single();
    
        if (error) throw new Error(error.message);
        profile.value = data || null;
        } catch (error) {
            profileError.value = error.message;
        } finally {
            profilePending.value = false;
        }
    });
</script>