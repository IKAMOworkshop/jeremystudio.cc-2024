<template>
    <div>

        <div id="about-experience" class="about-experience"></div>
        <ScrollProgress />

        <div class="about-hero m-240">
            <AboutHero />
        </div>

        <div class="section-container flex justify-end m-600">
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

        <div class="section-container flex m-600">
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

        <div class="section-container flex flex-column align-end gap-60 m-600">
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

    <ProjectFooter />
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

import { onMounted, onUnmounted, ref } from 'vue'
import Lenis from '@studio-freight/lenis'

const openTag = ref('<')

const lenis = new Lenis({
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

onUnmounted(() => {
    function destroy(){
        lenis.destroy()
    }
    
    destroy()
})

</script>