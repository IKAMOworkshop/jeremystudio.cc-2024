<template>
    <div>
        <ScrollProgress />
        <div id="hyper-experience" class="hyper-experience"></div>

        <TopTitle project-title="<HYPER" />

        <HeroVideo video-name="hyper" video-source="/project-video/hyper/hyper.mp4" />

        <ProjectData
            title-color="#A8EFFF"
            project-type="TECH-CENTER"
            project-description="CONDUCTING A SERIES OF EXPERIMENTS EXPLORING EMMERGING TECHNOLOGIES."

            project-timing="FALL 2022"
            member-one="JEREMY CHANG"

            tech-one="GRAVITY SKETCH"
            tech-two="ADBOE SUBSTANCE"
            tech-three="GENERATIVE AI"
            tech-four="UNREAL ENGINE"

            skill-one="TECH RESEARCH"
            skill-two="EXPERIENCE DESIGN"
            skill-three="DIGITAL DESIGN"
            skill-four="RAPID PROTOTYPING"
            skill-five="3D DESIGN"
        />

        <div class="section-container flex justify-end content-hidden">
            <TextBlock 
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="EXPANDING BEYOND THE CURRENT DESIGN PROCESS BY EXPLORING NEW TECH."
            />
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/hyper/header_render.webp" alt="A hero render of the final design for the environment, avatar, and other assets for the scene" class="project-image"/>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="SKETCHING IDEAS"
                content-three="FAST RENDERING"
                content-four="GENERATIVE AI"
                content-five="PRESENTING WORK"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="ENVISIONING A 3D COMMUNITY SPACE THROUGH THE LENS OF DISCORD AND APPLE."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/hyper/unreal.mp4" />
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="SKETCHING IDEAS"
                content-three="FAST RENDERING"
                content-four="GENERATIVE AI"
                content-five="PRESENTING WORK"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="REIMAGINING SKETCHING 3D THROUGH VR."
                description="WE EXPLORED HOW GRAVITY SKETCH REIMAGINES A NEW WAY OF SKETCHING IDEAS IN 3D WITH VR. AS YOU CAN NOW MOVE AROUND THE SPACER, YOU CAN BETTER VISUALIZE THE SCALE AND PROPORTION THAT YOU HAVE VISIONED. IT WAS QUITE A LEARNING EXPERIENCE GETTING USED TO THE CONTROLS, AS IT WAS MY FIRST TIME EVER INTERACTING WITH VR GOOGLES AND CONTROLERS."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/hyper/gravity_sketch.mp4" />

            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/gravity_option_1.webp" alt="The first iteration of my 3D sketch showing a mountain range with tree" class="project-image content-hidden">
                    <img src="@/assets/hyper/gravity_option_2.webp" alt="A collage of all the inital sketches and reference image in 3D" class="project-image content-hidden">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/gravity_option_3.webp" alt="A sketch idea showing exploring how we can create bridges connecting different biome" class="project-image content-hidden">
                    <img src="@/assets/hyper/gravity_option_4.webp" alt="A detailed shots showing importing models and reusing assets in gravity sketch" class="project-image content-hidden">
                </div>
            </div>

            <img src="@/assets/hyper/final_sketch.webp" alt="The finalized idea sketch utilizing the grid system in gravity sketch" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="SKETCHING IDEAS"
                content-three="FAST RENDERING"
                content-four="GENERATIVE AI"
                content-five="PRESENTING WORK"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="CREATES AND ITERATES THROUGH DIFFERENT MATERIALS."
            />
        </div>

        <div class="section-container flex flex-column gap-36 content-hidden">
            <ProjectVideo video-source="/project-video/hyper/substance.mp4" />
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="WE CAN BRING THE CONCEPTS FROM GRAVITY SKETCH TO LIFE WITH BELNDER AND APPLY MATERIALS WITH ADBOE SUBSTANCE. CREATING MATERIALS USING TRADITIONAL METHODS CAN BE DAUNTING DUE TO THE STEEP LEARNING CURVE. HOWEVER, WITH SUBSTANCE, DESIGNERS CAN QUICKLY GENERATE DOZENS OF MATERIALS AND APPLY THEM TO THE MODELS. THE INTEGRATION BETWEEN PLATFORMS IS ALSO SEAMLING, MAKING IT RELATIVELY EASY TO EXPLORE VARIOUS DESIGNS. IT WAS VERY FUN TO ADJUST THE SLIDERS AND SEE THE RESULTS IMMEDIATELY."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/substance_option_1.webp" alt="The first iteration of the finalized mesh, material, and colors extracted from Discord" class="project-image content-hidden">
                    <img src="@/assets/hyper/substance_option_2.webp" alt="The thired iterative render testing a more saturated color and brighter lighting" class="project-image content-hidden">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/substance_option_3.webp" alt="The second iteration render exploring different forms for the mesh and new models" class="project-image content-hidden">
                    <img src="@/assets/hyper/substance_option_4.webp" alt="The fourth iteration of render unifying colors and merging the look and feel from Apple" class="project-image content-hidden">
                </div>
            </div>

            <img src="@/assets/hyper/substance_final.webp" alt="The finalized mesh, color, and material rendered as a hero shot" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="SKETCHING IDEAS"
                content-three="FAST RENDERING"
                content-four="GENERATIVE AI"
                content-five="PRESENTING WORK"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="SEEKING UNORTHODOX INSPIRATIONS THROUGH AI-GENERATED WORKS."
                description="AS GENERATIVE AI RAPIDLYBECOMES PROMINET, IT’S INEVITABLE TAHT IT WILL EVENTUALLY MAKE ITS WAY INTO THE DESIGN PROCESS. IN MOST CASES, I INCORPORATE IT INTO MY PROCESS TO GENERATE IDEAS TO HELP KICK OFF OR ELEVATE PROJECTS. I EXPERIMENTED WITH MIDJOURNEY, DALL-E, AND STABLE DIFFUSION TO BETTER UNDERSTAND THE DFFERENCES BETWEEN FRAMEWORKS."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/hyper/ai_frameworks.webp" alt="A image showing the Generative AI platform that I've used, which include DALL-E, Stable Diffusion, and Midjourney" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="WORKING WITH GENERATIVE AI IS AN UNUSUAL EXPERIENCE. I IMAGINED IT AS A SEARCH ENGINE WHERE INPUTTING KEYWORDS WILL CREATE DIFFERENT RESULTS. I’M ALSO FASINATED BY HOW DIFFERENT FRAMEWORKS UNDERSTAND SPECIFIC TERMS DIFFERENTLY, AND THE RESULTS ARE DRASTICALLY DIFFERENT STYLISTICALLY. I PRIMARILY USED THE GENERATED IMAGES AS BUILDING BLOCKS TO DESIGN THE 3D ASSETS AND CREATE A CALMING ENVIRONMENT."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/hyper/ai_scene_model.webp" alt="A side-by-side comparison of the generated images and how it inspired some the of form and design of the scene and model" class="contained-image">
                <div class="divider fill-gray"></div>
                <img src="@/assets/hyper/ai_mood.webp" alt="A side-by-side comparison of the generated images and how it influenced the overall lighting and mood of the scene" class="contained-image">
            </ImageContainer>
        </div>
        
        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="SKETCHING IDEAS"
                content-three="FAST RENDERING"
                content-four="GENERATIVE AI"
                content-five="PRESENTING WORK"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="GOING BEYOND A STATIC AND FLAT PRESENTATION."
                description="PRESENTING WORKS IS ONE OF THE CRUCIAL PARTS OF THE DESIGN PROCESS AS IT ENGAGES PEOPLE IN THE EXPERIENCE. HOWEVER, TRADITIONAL MEDIA, SUCH AS IMAGES AND VIDEOS, ARE LIMITED IN SHOWCASING A 3D DESIGN FULLY. WITH THIS IN MIND, I EXPLORE DIFFERENT METODS, LIKE SKETCHFAB AND UNREAL ENGINE, TO PRESENT 3D DESIGNS THAT ALLOWS THE PRESENTER AND AUDIENCES TO INTERACT AND ENGAGE WITH THE EXPERIENCES."
            />
        </div>

        <div class="section-container flex flex-column gap-36">

            <img src="@/assets/hyper/unreal_main.webp" alt="The Unreal Engine project interface for setting up the entire scene" class="project-image content-hidden">

            <div class="project-columns flex gap-36 content-hidden">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/unreal_material.webp" alt="The Unreal Engine material node editor to add additional textures due to compatibility issues" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/unreal_environment.webp" alt="Setting the scene lighting using the Unreal Engine's material editor again to create the sky dome" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BUILDING AN INTERACTIVE PROTOTYPE WITH UNREAL."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/hyper/unreal.mp4" />
            <img src="@/assets/hyper/unreal_1.webp" alt="A screenshot from the experience showing two avatars watching a screensharing concept for the overall experience" class="project-image content-hidden">
            <img src="@/assets/hyper/unreal_2.webp" alt="A screenshot showing an avatar in front of a room, which is a concept for private voice channel" class="project-image content-hidden">
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/transit.png"
                next-project-title="TRANSIT"
                next-project-link="/transit"
                button-text="NEXT PROJECT"
            />
        </div>

        <ProjectFooter class="footer-hidden" />
    </div>
</template>

<script setup>
import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import {useHead} from '@vueuse/head'
import Lenis from '@studio-freight/lenis'

useHead({
    title: 'Jeremy Chang | Hyper',
    meta: [
        {
            name: 'description',
            content: 'Conducting a series of experiments exploring emmerging technologies.',
        }
    ]
})

const lenis = new Lenis({
    smooth: true,
    lerp: .12
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

onMounted(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('content-reveal')
        }
        // } else {
		// 	entry.target.classList.remove('content-reveal');
		// }
    })
},
{
    threshold: .2,
})

const hiddenElement = document.querySelectorAll(".content-hidden")
hiddenElement.forEach((el) => observer.observe(el))

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

</script>