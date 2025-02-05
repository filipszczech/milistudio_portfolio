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
        async fetchPhotos(categoryId: string) {
            this.photos = [];
            this.photosPending = true;
            this.photosError = null;
            try {
              const { data, error } = await useFetch('/api/photos', {
                query: { categoryId },
              });
              if (error.value) {
                throw new Error(error.value.message || 'Error fetching photos.');
              }
              this.photos = data.value || [];
            } catch (error) {
              this.photosError = error.message || 'Error fetching photos.';
              console.error('Błąd pobierania zdjęć:', error);
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