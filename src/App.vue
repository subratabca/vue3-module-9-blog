<script setup>
  import {  RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue';
  //import HeroSection from './components/HeroSection.vue';
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <Navbar></Navbar>
    <!-- <HeroSection /> -->
    <RouterView />
  </div>
</template>

<style scoped>

</style>