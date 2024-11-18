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
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
