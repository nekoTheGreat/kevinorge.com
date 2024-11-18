<script setup>
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import '~/assets/styles/app.scss';

const config = useRuntimeConfig();
if(config.public.maintenance) {
    setPageLayout('maintenance');
}
</script>
<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
