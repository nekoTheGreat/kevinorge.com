<script setup>
import { onMounted } from 'vue';

const config = useRuntimeConfig()
const recaptchaKey = ref('');

onMounted(() => {
    recaptchaKey.value = config.public.recaptchaKey;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey.value}`;
    document.body.appendChild(script);
});

const onSubmitContactForm = async () => {
    // prevent default please
    grecaptcha.ready(function() {
        grecaptcha.execute(recaptchaKey.value, {action: 'submit'}).then(function(token) {
            // my contact form logic here
        });
    });
}
</script>
<template></template>