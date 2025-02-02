<script setup>
import NavBar from '~/components/NavBar.vue';
// useHead({
//     bodyAttrs: {
//         style: 'height: 100vh; height: 100dvh',
//     },
// })
</script>
<template>
    <div class="container-fluid" style="position: relative; height: 100vh; height: 100dvh;">

        <NavBar></NavBar>
        <slot />
    </div>
</template>