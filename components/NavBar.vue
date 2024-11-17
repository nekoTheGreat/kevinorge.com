<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
    <nav class="main-nav">
        <div @click.prevent="router.replace('/')"><NuxtLink to="/">Home</NuxtLink></div>
        <div @click.prevent="router.replace('/projects')"><NuxtLink to="/projects">Projects</NuxtLink></div>
        <div @click.prevent="router.replace('/contacts')"><NuxtLink to="/contacts">Contacts</NuxtLink></div>
    </nav>
</template>
<style scoped>
    .main-nav {
        display: flex;
        column-gap: 10px;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding-top: 5px;
        position: relative;
        z-index: 10;
        width: fit-content;
    }
    .main-nav div {
        border: 1px solid #7b8ca6;
        border-radius: 5px;
        background-color: #B6CAE7;
        width: 100px;
        text-align: center;
    }
    .main-nav div a {
        text-decoration: none;
        color: black;
    }
    .main-nav div:hover {
        opacity: .7;
        cursor: pointer;
    }
</style>