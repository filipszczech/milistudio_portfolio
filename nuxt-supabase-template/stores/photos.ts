import { defineStore } from 'pinia';

interface Category {
    id: number;
    name: string;
    desc: string | null;
    slug: string;
    active: boolean;
    order: number;

}

export const usePhotosStore = defineStore('photos', {
    state: () => ({
        categories: [] as Array<Category>,
        categoriesPending: false,
        categoriesError: null as string | null,
        photos: [] as Array<any>,
        photosPending: false,
        photosError: null as string | null,
        currentCategory: '' as string | null,
    }),
    
    actions: {
        // async fetchCategories() {
        //     if (this.categories.length > 0) return;
        //     this.categoriesPending = true;
        //     this.categoriesError = null;
        //     try {
        //         const data = await $fetch('/api/categories');
        //         this.categories = data || [];
        //     } catch (error) {
        //         this.categoriesError = error.message || 'Error fetching categories.';
        //     } finally {
        //         this.categoriesPending = false;
        //     }
        // },
        async fetchCategories() {
            if (!process.client) return;
            const supabase = useSupabaseClient();
            this.categoriesPending = true;
            this.categoriesError = null;

            try {
                const { data, error } = await supabase
                .from('categories_mili')
                .select('*')
                .order('order', { ascending: true, nullsFirst: false });

                if (error) throw new Error(error.message);
                this.categories = data || [];
            } catch (error) {
                this.categoriesError = (error as Error).message;
            } finally {
                this.categoriesPending = false;
            }
        },
        async fetchCategory(categorySlug: string) {
            if (this.categories.length === 0) await this.fetchCategories();
            return this.categories.find((category) => category.slug === categorySlug);
        },
        async fetchPhotos(categoryId: string) {
            if (!process.client) return;
            const supabase = useSupabaseClient();
            this.photos = [];
            this.photosPending = true;
            this.photosError = null;
            try {
                const { data, error } = await supabase
                  .from('photos_mili')
                  .select('*')
                  .eq('category_id', categoryId)
                  .order('order', { ascending: true, nullsFirst: false });
        
            if (error) throw new Error(error.message);
                this.photos = data || [];
            } catch (error) {
                this.photosError = (error as Error).message;
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
        },
        setCurrentCategory(category: string) {
            this.currentCategory = category;
        },
    },
});