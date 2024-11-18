<script setup>
import { onMounted } from 'vue';

useHead({
    title: 'Contact me'
});

const config = useRuntimeConfig()

const onSubmitContactForm = async () => {
    // prevent default please
    grecaptcha.ready(function() {
        grecaptcha.execute(config.public.recaptchaKey, {action: 'submit'}).then(function(token) {
            // my contact form logic here
        });
    });
}
</script>
<template></template>