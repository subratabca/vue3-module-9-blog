<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {RouterLink} from 'vue-router'
</script>


<template>
<nav class="bg-blue-500 p-4">
        <div class="container-fluid mx-auto flex justify-between items-center">
            <RouterLink to="/" class="text-white font-bold text-lg">My Blog</RouterLink>
            <ul class="flex space-x-4">
                <RouterLink to="/" class="text-white hover:underline">Home</RouterLink>
                <RouterLink to="/about" class="text-white hover:underline">About</RouterLink>
                <RouterLink to="/service" class="text-white hover:underline">Services</RouterLink>
                <RouterLink to="/contact" class="text-white hover:underline">Contact</RouterLink>
            </ul>
        </div>
    </nav>
</template>


<style  scoped>

</style>