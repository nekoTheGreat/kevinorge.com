export default defineNuxtRouteMiddleware((to, from) => {
    if(import.meta.client) {
        const config = useRuntimeConfig();
        if(config.public.maintenance) {
            return navigateTo("/maintenance");
        }
    }
})