<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

let blogList = reactive({})
let isLoading = ref(true)
let router = useRouter()

onMounted(async () => {
  try {
    const result = await fetch(
      `https://basic-blog.teamrabbil.com/api/post-details/${parseInt(props.id)}`
    )
    if (result.status === 404) {
      router.push({ name: 'NotFound' })
    }
    const response = await result.json()
    blogList = response['postDetails']
    console.log(blogList)
    isLoading.value = false
  } catch (error) {
    console.error('Error Fetching', error)
  }
})


</script>
<template>
  <div class="w-full bg-white overflow-hidden shadow-md">
    <img class="w-full h-96" :src="blogList.img" alt="Blog Image">
    <div class="p-6">
      <h1 class="text-2xl font-semibold text-gray-800 mb-2">{{ blogList.title }}</h1>
      <p class="text-gray-600">{{ blogList.content }}</p>
    </div>
  </div>
</template>

<style scoped></style>
