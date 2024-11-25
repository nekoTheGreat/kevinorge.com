<script setup>
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import '~/assets/styles/app.scss';
import { onMounted } from 'vue';

const config = useRuntimeConfig();
onMounted(() => {
    if(config.public.maintenance) {
        setPageLayout('maintenance');
    }
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaKey}`;
    document.body.appendChild(script);
});
useHead({
    link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
})
</script>
<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
<style>
    .grecaptcha-badge {
        visibility: hidden;
    }
</style>