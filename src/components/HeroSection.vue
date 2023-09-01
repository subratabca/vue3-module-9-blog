<template>
    <div class="relative">
      <img :src="imageUrl" alt="Banner Image" class="w-full h-96">
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 class="text-4xl text-white">{{ title }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const imageUrl = ref("https://cdn.pixabay.com/photo/2023/08/21/04/55/mountains-8203576_640.jpg");
  const title = ref("Discover Our Collection");
  </script>
  
  <style scoped>
  /* Add your custom styles or Tailwind classes here */
  </style>