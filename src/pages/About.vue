<template>
    <div>
        <div id="transition-block" class="flex justify-center align-center">
            <svg class="transition-logo" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.889 311.27L171.956 88.1111H129.363L69.2959 311.27H111.889ZM194.576 283.595L330 229.353V185.668L194.576 131.425V177.295L279.398 206.643V208.378L194.576 237.726V283.595Z" fill="white"/>
            </svg>
        </div>

        <div id="about-experience" class="about-experience"></div>
        <ScrollProgress />

        <div class="about-hero m-240">
            <AboutHero />
        </div>

        <div class="section-container flex justify-end m-800">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="true"

                open-tag="<"
                closing-tag="/>"

                title="EVERY NEW PROJECT, I LEARN SOMETHING FUN AND COOL."
                description="I’M ALWAYS TRILLED TO BE WORKING ON SOMETHING NEW. IT’S A GREAT WAY FOR ME TO TRY SOMETHING NEW AND COOL. I LOVE EXPERIMENTING WITH EVERY GENRE OF LIFE AS THEY CAN HELP ME BLEND COOL STUFF TOGETHER TO CRAFT SOMETHING UNEXPECTED.  WITH ALL MY EXPERIENCE, I ON A MISSION TO DESIGN DIGITAL EXPERIENCES THAT ENGAGE PEOPLE ON MULTIPLE LEVELS."
                small-text-one="ME: “I NEED TO FOCUS NOW”"
                small-text-two="ALSO ME: “WOW, THAT COOL, I WANT”"
            />
        </div>

        <div class="section-container flex m-800">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="true"

                open-tag="<"
                closing-tag="/>"

                title="I BUILD A LOT OF THINGS. SOMETIMES A LITTLE TOO MANY..."
                description="THROUGHOUT MY LIFE I’VE BUILT QUITE A BIT OF THINGS RANGING FROM PC, KEYBORAD, WORKSPACE, INSTALLING, WEBSITES, VIDEOS, THE LIST GOES ON. IT’S JUST SECOND NATURE FOR ME TO LEARN THROUGH MAKING THINGS. ACTUALLY, LOOKING BACK NOW, I’VE MADE A BUNCH OF GARBAGE, BUT HEY... AT LEAST THIS TIME IS BETTER THAN LAST TIME."
                small-text-one="ME: “THIS IS FIRE, ONE OF MY BEST WORK I THINK”"
                small-text-two="ALSO ME A MONTH LATER: “BREH, THIS IS DOGSH*T LMAO”"
            />
        </div>

        <div class="section-container flex flex-column align-end gap-60 m-800">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="IT TOOK A WHILE, BUT I KNOW SOME OF THESE THINGS."
            />

            <AboutSkills />
        </div>

        <AboutPhoto/>

        <div class="section-container">
            <AboutContact />
        </div>

    <ProjectFooter class="footer-hidden"/>
    </div>
</template>

<script setup>
import ScrollProgress from '@/components/ScrollProgress.vue'
import AboutHero from '@/components/about/AboutHero.vue'
import AboutSkills from '@/components/about/AboutSkills.vue'
import AboutPhoto from '@/components/about/AboutPhoto.vue'
import AboutContact from '@/components/about/AboutContact.vue'

import TextBlock from '@/components/projects/TextBlock.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router';
import {useHead} from '@vueuse/head'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';

useHead({
    title: 'Jeremy Chang | About',
    meta: [
        {
            name: 'description',
            content: 'A creative developer who build digital experiences.',
        }
    ]
})

const lenis = new Lenis({
    smooth: true,
    lerp: .12
});

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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

    window.scrollTo(0, 1)

    const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-reveal')
        }
        else {
			entry.target.classList.remove('footer-reveal');
		}
        })
    },
    {
        threshold: .1,
    })

    const hiddenFooter = document.querySelectorAll(".footer-hidden")
    hiddenFooter.forEach((el) => footerObserver.observe(el))
})

onUnmounted(() => {
    function destroy(){
        lenis.destroy()
    }
    
    destroy()
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