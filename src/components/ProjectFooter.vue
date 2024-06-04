<template>
    <div>
        <footer class="fill-light flex justify-between">

            <div class="footer-left">
            
                <div class="footer-links">
                    <ul class="flex flex-column gap-4">

                        <li><router-link class="text-dark body-bold" to="/about">
                            <div class="caption-container">
                                <div class="caption-move">
                                    <p>ABOUT</p>
                                    <p>ABOUT</p>
                                </div>
                            </div>
                        </router-link></li>

                        <li><router-link class="text-dark body-bold" to="/archives">
                            <div class="caption-container">
                                <div class="caption-move">
                                    <p>ARCHIVES</p>
                                    <p>ARCHIVES</p>
                                </div>
                            </div>
                        </router-link></li>

                        <!-- <li><div class="text-dark body-bold construction-strike" to="/insights">
                            <div class="caption-container">
                                <div class="caption-move">
                                    <p>INSIGHTS</p>
                                    <p>INSIGHTS</p>
                                </div>
                            </div>
                        </div></li> -->
                    </ul>


                    <ul class="flex flex-column gap-4">
                        <button id="footer-email" class="text-dark body-bold">
                            <div class="caption-container">
                                <div class="caption-move">
                                    <p>MAIL</p>
                                    <p>MAIL</p>
                                </div>
                            </div>
                        </button>

                    <li><a class="text-dark body-bold" href="https://github.com/IKAMOworkshop" target="_blank" rel="noopener noreferrer">
                        <div class="caption-container">
                                <div class="caption-move">
                                    <p>GITHUB</p>
                                    <p>GITHUB</p>
                                </div>
                            </div>
                    </a></li>

                    <li><a class="text-dark body-bold" href="https://www.linkedin.com/in/jeremystudio/" target="_blank" rel="noopener noreferrer">
                        <div class="caption-container">
                                <div class="caption-move">
                                    <p>LINKEDIN</p>
                                    <p>LINKEDIN</p>
                                </div>
                            </div>
                    </a></li>
                    </ul>

                </div>

                <p class="text-dark body-bold">©2023</p>

            </div>

            <div class="footer-right">
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