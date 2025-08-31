export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/mili') {
        return navigateTo('/');
    }
})