import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [],
        categoriesPending: false,
        categoriesError: null,
        currentCategory: null,
    }),

    getters: {
        currentIndex: (state) =>
        state.currentCategory
            ? state.categories.findIndex(c => c.name === state.currentCategory)
            : -1,

        totalCategories: (state) => state.categories.length,
    },

    actions: {
        async fetchCategories() {
        if (import.meta.server) return
        if (this.categories.length) return
        this.categoriesPending = true
        this.categoriesError = null
        try {
            const { data } = await $fetch('https://strapi.lichtanski.com/api/categories?populate[img][fields][0]=url&populate[photos][fields][0]=url', {
            })

            this.categories = data || []
            if (this.categories.length) {
                this.currentCategory = this.categories[0].name
            }
        } catch (e) {
            this.categoriesError = e.message
        } finally {
            this.categoriesPending = false
        }
        },
        setCurrentCategory(slug) {
            const category = this.categories.find(c => c.slug === slug)
            if (category) {
                this.currentCategory = category
                return true
            }
            return false;
        },
    },
    })
