<script setup>
import { ref, reactive, onMounted } from 'vue'
import BlogCard from '../components/BlogCard.vue'
let blogList = reactive([])
let isLoading = ref(true)

onMounted(async () => {
  try {
    const result = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
    const response = await result.json()
    blogList = response
    isLoading.value = false
  } catch (error) {
    console.error('Error Fetching', error)
    isLoading.value = false
  }
})
</script>

<template>
<div class="grid grid-cols-3 gap-4">
    <div class="text-2xl font-bold text-indigo-700" v-if="isLoading">Loading...</div>
    <BlogCard v-else class="w-full p-4" v-for="data in blogList" :key="data.id" :data="data"></BlogCard>
</div>
</template>

<style scoped>

</style>