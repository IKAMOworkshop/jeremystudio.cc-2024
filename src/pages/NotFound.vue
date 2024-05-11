<template>
    <div>
        <div id="transition-block" class="flex justify-center align-center">
            <svg class="transition-logo" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.889 311.27L171.956 88.1111H129.363L69.2959 311.27H111.889ZM194.576 283.595L330 229.353V185.668L194.576 131.425V177.295L279.398 206.643V208.378L194.576 237.726V283.595Z" fill="white"/>
            </svg>
        </div>

        <div id="missing-experience" class="missing-experience"></div>

        <p class="home-intro text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>

        <PrimaryButton 
            id="missing-button"
            class="missing-button"
            button-text="HOME"
            button-link="/"
        />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

import PrimaryButton from '@/components/PrimaryButton.vue'

import gsap from 'gsap'

    onMounted(() => {
        const tl = gsap.timeline()
        tl.to('#transition-block', {
            duration: .8,
            opacity: 0,
            delay: .2,
            ease: 'power2.inOut',
        })
        .to('.transition-logo', {
            duration: .8,
            scale:  20,
            rotate: -20,
            ease: 'power2.inOut',
        }, '-=.8')
    })

    onBeforeRouteLeave((to, from, next) => {
        const tl = gsap.timeline()
        tl.to('#transition-block', {
            duration: .8,
            opacity: 1,
            ease: 'power2.inOut',
        })
        .to('.transition-logo', {
            duration: .8,
            scale: 1,
            rotate: 0,
            ease: 'power2.inOut',
            onComplete: () => {
                next()
            }
        }, '-=.8')
    })
</script>