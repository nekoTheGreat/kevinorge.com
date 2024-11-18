<script setup>
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
        <div class="d-flex justify-content-center align-items-center" style="z-index: 10;">
            <div style="padding: 100px 10px; height: 300px;">
            <div class="text-center" style="position: relative; font-size: 3rem; z-index: 10;">
                Sorry, the site is on maintenance mode.
            </div>
            </div>
        </div>
    </div>
</template>