<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  data: Object
})
</script>
<template>
  <div class="bg-white rounded-lg shadow-lg">
    <RouterLink :to="{name:'BlogDetails',params:{id:data.id}}">
      <img :src="data.img" alt="Image 1" class="w-full h-32 object-cover rounded-t-lg" />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ data.title }}</h3>
        <p class="text-gray-500">{{ data.short }}</p>
      </div>
  </RouterLink>
  </div>
</template>

<style scoped></style>
