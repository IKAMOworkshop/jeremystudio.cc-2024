<template>
    <div class="w-100">

        <div class="flex flex-column">

            <div class="flex justify-between">
                <div class="flex flex-column w-40">
                    <div class="flex gap-100">
                        <div class="about-hero-container">
                            <h1 class="large-text text-light about-title-move">{{ openTag }}</h1>
                        </div>
                        <div class="flex flex-column align-end">
                            <div class="about-hero-container">
                                <h1 class="large-text text-light about-title-move">I</h1>
                            </div>
                            <div class="about-hero-container">
                                <h1 class="large-text text-light about-title-move">MAKE</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column about-hidden">
                    <p class="caption-bold text-light">I AM A CREATIVE DEVELOPER,</p>
                    <p class="caption-bold text-light">A GAMER, AND AN ASPIRING</p>
                    <p class="caption-bold text-light">ILLUSTARTOR.</p>
                </div>
            </div>

            <div class="flex flex-column align-end">
                <div class="flex align-end gap-60">
                    <div class="flex flex-column align-end">
                        <div class="about-hero-container">
                            <h1 class="large-text text-light about-title-move">FUN</h1>
                        </div>
                        <div class="about-hero-container">
                            <h1 class="large-text text-light about-title-move">THINGS</h1>
                        </div>
                    </div>
                    <div class="about-hero-container">
                        <h1 class="large-text text-light about-hero-move">/></h1>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap';

const openTag = ref('<')

onMounted(() => {
    const tl = gsap.timeline()

    tl.from('.about-title-move', {
        duration: 1,
        y: 100,
        ease: 'power2.inOut',
        delay: .4
    })
})

</script>