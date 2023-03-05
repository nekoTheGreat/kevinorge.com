<script setup>
import { Collapse } from 'bootstrap/dist/js/bootstrap';

onMounted(() => {
    new Collapse('#mainNavBarCollapse');
});
</script>
<template>
    <nav class="navbar navbar-expand-lg fw-bold bg-dominant">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavBarCollapse" aria-controls="mainNavBarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavBarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link text-complement" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle  text-complement" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item  text-dominant" href="http://bwd.kevinorge.com:81/">BWD Helpdesk</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>