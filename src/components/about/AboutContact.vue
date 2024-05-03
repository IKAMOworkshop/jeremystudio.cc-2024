<template>
    <div>

        <button id="about-email" class="about-contact flex flex-column m-200">
            <div class="flex justify-between w-100 layer-1">
                <div class="flex flex-column w-40 layer-2">
                    <div class="flex gap-100 layer-3">
                        <h1 class="large-text text-light">{{ openTag }}</h1>
                        <div class="flex flex-column layer-4">

                            <div class="about-contact-email flex flex-column">
                                <div class="about-contact-move">
                                    <h1 class="large-text text-light">GET</h1>
                                    <h1 class="large-text text-light">COPY</h1>
                                </div>
                            </div>

                            <div class="about-contact-email flex flex-column">
                                <div class="about-contact-move">
                                    <h1 class="large-text text-light">IN</h1>
                                    <h1 class="large-text text-light">EMAIL</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <p class="caption-light text-light-gray">SAW SOMETHING COOL?</p>
                    <p class="caption-light text-light-gray">OR JUST LOOKING FOR A</p>
                    <p class="caption-light text-light-gray">SQUAD TO GAME WITH?</p>
                </div>
            </div>
            <div class="flex flex-column align-end w-100 layer-1">
                <div class="flex align-end gap-60 layer-2">
                    <div class="about-contact-email flex flex-column align-end">
                        <div class="about-contact-move flex flex-column align-end">
                            <h1 class="large-text text-light">TOUCH</h1>
                            <h1 class="large-text text-light">:D</h1>
                        </div>
                    </div>
                    <h1 class="large-text text-light">/></h1>
                </div>
            </div>
        </button>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const openTag = ref('<')

onMounted(() => {
    const emailButton = document.getElementById('about-email')

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