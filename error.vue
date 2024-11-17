<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div class="d-flex justify-content-center align-items-center" style="z-index: 10;">
      <div class="text-center" style="padding: 100px 10px; height: 300px;">
        <div style="position: relative; font-size: 3rem; z-index: 10;">
          {{ error?.statusMessage ?? error?.statusCode ?? 'Server Error' }}
        </div>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>
