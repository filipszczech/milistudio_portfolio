import { defineStore } from 'pinia';

export const usePhotosStore = defineStore('photos', {
    state: () => ({
        categories: [] as Array<any>,
        categoriesPending: false,
        categoriesError: null as string | null,
        photos: [] as Array<any>,
        photosPending: false,
        photosError: null as string | null,
    }),
    
    actions: {
        async fetchCategories() {
            if (this.categories.length > 0) return;
            this.categoriesPending = true;
            this.categoriesError = null;
            try {
                const data = await $fetch('/api/categories');
                this.categories = data || [];
            } catch (error) {
                this.categoriesError = error.message || 'Error fetching categories.';
            } finally {
                this.categoriesPending = false;
            }
        },
        async fetchCategory(categorySlug: string) {
            if (this.categories.length === 0) await this.fetchCategories();
            return this.categories.find((category) => category.slug === categorySlug);
        },
        async fetchPhotos(category: string) {
            this.photos = [];
            this.photosPending = true;
            this.photosError = null;
            try {
                const data = await $fetch(`/api/get_images?category=${category}`);
                this.photos = data.images?.map(item => 
                    `https://pub-6ac639a5d0904d47911839cf9484d860.r2.dev/${encodeURIComponent(item.key)}`
                ) || [];
            } catch (error) {
                this.photosError = error.message || 'Error fetching photos.';
            } finally {
                this.photosPending = false;
            }
        },
        getNextCategory(categorySlug: string) {
            if (!this.categories || this.categories.length === 0) return null; 
            const currentIndex = this.categories.findIndex((category) => category.slug === categorySlug);
            if (currentIndex === -1) return null;
            return this.categories[currentIndex + 1] || this.categories[0];
        },
        getPreviousCategory(categorySlug: string) {
            if (!this.categories || this.categories.length === 0) return null; 
            const currentIndex = this.categories.findIndex((category) => category.slug === categorySlug);
            if (currentIndex === -1) return null;
            return this.categories[currentIndex - 1] || this.categories[this.categories.length - 1];
        }
    },
});