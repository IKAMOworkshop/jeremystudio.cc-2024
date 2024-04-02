<template>
    <div>
        <footer class="fill-light flex justify-between">

            <div class="flex flex-column justify-between">
            
                <div class="flex gap-200">
                    <ul class="flex flex-column gap-4">
                        <li><router-link class="text-dark body-bold" to="/about">ABOUT</router-link></li>
                        <li><router-link class="text-dark body-bold" to="/insights">INSIGHTS</router-link></li>
                        <li><router-link class="text-dark body-bold" to="/archives">ARCHIVES</router-link></li>
                    </ul>
                    <ul class="flex flex-column gap-4">
                        <button id="footer-email" class="text-dark body-bold">MAIL</button>
                    <li><a class="text-dark body-bold" href="https://github.com/IKAMOworkshop" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                    <li><a class="text-dark body-bold" href="https://www.linkedin.com/in/jeremystudio/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                    </ul>
                </div>

                <p class="text-dark body-bold">©2023</p>

            </div>

            <div class="flex gap-60">
                <h2 class="text-dark call-to-action">{{ openTag }}</h2>
                <div class="flex gap-100 align-end">
                    <h2 class="text-dark call-to-action">
                        I
                        <br />MAKE
                        <br />FUN
                        <br />THINGS
                    </h2>
                    <h2 class="text-dark call-to-action">/></h2>
                </div>
            </div>

        </footer>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

let openTag = ref('<')

onMounted(() => {
    const emailButton = document.getElementById('footer-email')

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