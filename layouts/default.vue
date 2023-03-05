<script setup>
useHead({
    bodyAttrs: {
        style: 'height: 100vh',
    },
})
</script>
<template>
    <div class="container-fluid h-100 p-0 bg-dominant">
        <ClientOnly>
            <NavBar></NavBar>
        </ClientOnly>
        <slot />
    </div>
</template>
<style>
#__nuxt{
    height: 100%;
}
</style>