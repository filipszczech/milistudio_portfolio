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
                const data = await useSupabaseFetch('categories_mili');
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
                const data = await useSupabaseFetch('photos_mili', { category_id: categoryId });
                this.photos = data || [];
            } catch (error) {
                this.photosError = error.message || 'Error fetching photos.';
            } finally {
                this.photosPending = false;
            }
        }
    },
});