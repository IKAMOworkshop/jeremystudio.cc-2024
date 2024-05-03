<template>
    <div>

        <nav class="flex justify-between align-start">

            <div class="flex gap-54">
                <router-link class="text-light caption-bold" to="/">
                    <div class="caption-container">
                                <div class="caption-move">
                                    <p>{{navigationTitle}}</p>
                                    <p>{{ navigationHome }}</p>
                                </div>
                            </div>
                </router-link>
            </div>

            <div class="flex gap-164">
                <ul class="flex gap-16">

                    <li><router-link class="text-light-gray caption-light" to="/about">
                        <div class="caption-container">
                            <div class="caption-move">
                                <p>ABOUT</p>
                                <p>ABOUT</p>
                            </div>
                        </div>
                    </router-link></li>

                    <li><router-link class="text-light-gray caption-light" to="/archives">
                        <div class="caption-container">
                            <div class="caption-move">
                                <p>ARCHIVES</p>
                                <p>ARCHIVES</p>
                            </div>
                        </div>
                    </router-link></li>

                    <!-- Insight Link -->
                    <li><div class="text-light-gray caption-light construction-strike" to="/insights">
                        <div class="caption-container">
                            <div class="caption-stop">
                                <p>INSIGHTS</p>
                                <p>INSIGHTS</p>
                            </div>
                        </div>
                    </div></li>
                </ul>
                
                <!-- JP Link -->
                <div class="text-light-gray caption-light construction-strike">
                    <div class="caption-container">
                            <div class="caption-stop flex align-end flex-column">
                                <p>JP</p>
                                <p>SWITCH</p>
                            </div>
                        </div>
                </div>
            </div>

        </nav>

        <div class="bottom-nav flex justify-between align-center">
            <ul class="flex gap-16">

                <button id="email-button" class="text-light-gray caption-light">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>M.</p>
                            <p>M.</p>
                        </div>
                    </div>
                </button>
                
                <li><a class="text-light-gray caption-light" href="https://github.com/IKAMOworkshop" target="_blank" rel="noopener noreferrer">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>GH.</p>
                            <p>GH.</p>
                        </div>
                    </div>
                </a></li>

                <li><a class="text-light-gray caption-light" href="https://www.linkedin.com/in/jeremystudio/" target="_blank" rel="noopener noreferrer">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>LI.</p>
                            <p>LI.</p>
                        </div>
                    </div>
                </a></li>
            </ul>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

let navigationTitle = ref('<JEREMYSTUDIO />')
let navigationHome = ref('<RETURN HOME />')

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