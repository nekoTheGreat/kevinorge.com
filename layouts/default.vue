<script setup>
import NavBar from '~/components/NavBar.vue';
useHead({
    bodyAttrs: {
        style: 'height: 100vh',
    },
})
</script>
<template>
    <div class="container-fluid h-100 p-0" style="position: relative;">
        <div style="position: absolute; width: 280px; height: 100vh; background-color: #B6CAE7; margin-left: 100px; z-index: 1;">
        </div>
        <NavBar></NavBar>
        <slot />
    </div>
</template>