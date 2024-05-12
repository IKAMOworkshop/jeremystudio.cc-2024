<template>
    <div>
        <div id="transition-block" class="flex justify-center align-center">
            <svg class="transition-logo" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.889 311.27L171.956 88.1111H129.363L69.2959 311.27H111.889ZM194.576 283.595L330 229.353V185.668L194.576 131.425V177.295L279.398 206.643V208.378L194.576 237.726V283.595Z" fill="white"/>
            </svg>
        </div>

        <div v-show="!isMobile" id="home-experience" class="home-experience"></div>
        <p class="home-intro text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>

        <div v-show="isMobile" class="home-phone-experience">
            <HomeProjectPhone 
                link="/stray"
                title="STRAY"
                tag-text="WEBGL"
                thumbnail="/project-thumbnail/stray.png"
            />
            <HomeProjectPhone 
                link="/hyper"
                title="HYPER"
                tag-text="TECH-CENTER RESEARCH"
                thumbnail="/project-thumbnail/hyper.png"
            />
            <HomeProjectPhone 
                link="/transit"
                title="TRANSIT"
                tag-text="MIXED REALITY"
                thumbnail="/project-thumbnail/transit.png"
            />
            <HomeProjectPhone 
                link="/arcane"
                title="ARCANE"
                tag-text="WEB DESIGN"
                thumbnail="/project-thumbnail/arcane.png"
            />
            <HomeProjectPhone 
                link="/nebula"
                title="NEBULA"
                tag-text="ECOSYSTEM DESIGN"
                thumbnail="/project-thumbnail/nebula.png"
            />
            <HomeProjectPhone 
                link="/angine"
                title="ANGINE"
                tag-text="DESIGN SYSTEM"
                thumbnail="/project-thumbnail/angine.png"
            />
        </div>

        <InfiniteScrollProgress v-show="!isMobile"/>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

import { useHead } from '@vueuse/head'

import InfiniteScrollProgress from '@/components/InfiniteScrollProgress.vue'
import HomeProjectPhone from '@/components/home/HomeProjectPhone.vue'

import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

let isMobile = false

const ua = navigator.userAgent

if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    isMobile = true
}

if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        isMobile = true

}

const lenis = new Lenis({
    smooth: true,
    lerp: .12
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

useHead({
    title: 'Jeremy Chang',
    meta: [
        {
            name: 'description',
            content: 'A creative developer who build digital experiences.',
        }
    ]
})

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