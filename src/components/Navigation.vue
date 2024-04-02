<template>
    <div>

        <nav class="flex justify-between">

            <div class="flex gap-60">
                <router-link class="text-light caption-bold" to="/">{{ navigationTitle }}</router-link>
                <p class="text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>
            </div>

            <div class="flex gap-100">
                <ul class="flex gap-16">
                    <li><router-link class="text-light caption-light" to="/about">ABOUT</router-link></li>
                    <li><router-link class="text-light caption-light" to="/insights">INSIGHTS</router-link></li>
                    <li><router-link class="text-light caption-light" to="/archives">ARCHIVES</router-link></li>
                </ul>
                <button class="text-light-gray caption-light">JP</button>
            </div>

        </nav>

        <div class="bottom-nav flex justify-between">
            <ul class="flex gap-16">
                <button id="email-button" class="text-light-gray caption-light">M.</button>
                <li><a class="text-light-gray caption-light" href="https://github.com/IKAMOworkshop" target="_blank" rel="noopener noreferrer">GH.</a></li>
                <li><a class="text-light-gray caption-light" href="https://www.linkedin.com/in/jeremystudio/" target="_blank" rel="noopener noreferrer">LI.</a></li>
            </ul>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

let navigationTitle = ref('<JEREMYSTUDIO />')

onMounted(() => {
    const emailButton = document.getElementById('email-button')

    const copyEmail = () => {
        navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
            console.log('Content copied to clipboard')
        },() => {
            console.error('Failed to copy')
        })
    }

    emailButton.addEventListener('click', copyEmail)
})

</script>