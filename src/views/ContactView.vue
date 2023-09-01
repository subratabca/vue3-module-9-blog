<script setup>

</script>

<template>
    <div class="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Contact Us</h1>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
                <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="text" id="name" name="name" placeholder="Your Name">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
                <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="you@example.com">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2" for="message">Message</label>
                <textarea class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="message" name="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>

</style>