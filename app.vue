<template>
  <div>
    <ScreenLoader :loading="pageLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    pageLoading.value = false
  }, 2000)
})
</script>
