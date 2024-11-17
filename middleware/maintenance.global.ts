export default defineNuxtRouteMiddleware((to, from) => {
    if(import.meta.client) {
        const config = useRuntimeConfig();
        if(config.public.maintenance) {
            if(to.path != '/maintenance') {
                return navigateTo("/maintenance");
            }
        } else if(to.path == '/maintenance') {
            return navigateTo('/');
        }
    }
})