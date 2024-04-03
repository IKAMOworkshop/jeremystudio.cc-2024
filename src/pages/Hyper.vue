<template>
    <div>
        <TopTitle project-title="<HYPER" />

        <HeroVideo video-source="/project-video/hyper/hyper.mp4" />

        <ProjectData
            title-color="#A8EFFF"
            project-type="TECH-CENTER"
            project-description="CONDUCTING A COLLECTION OF EXPERIMENTS EXPLORING EMMERGING TECHNOLOGIES."

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

        <div class="section-container flex justify-end">
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

        <div class="section-container">
            <img src="@/assets/hyper/header_render.png" alt="" class="project-image">
        </div>

        <div class="section-container flex justify-between">
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

        <div class="section-container">
            <ProjectVideo video-source="/project-video/hyper/unreal.mp4" />
        </div>

        <div class="section-container flex justify-between">
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
            <ProjectVideo video-source="/project-video/hyper/gravity_sketch.mp4" />

            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/gravity_option_1.png" alt="" class="project-image">
                    <img src="@/assets/hyper/gravity_option_2.png" alt="" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/gravity_option_3.png" alt="" class="project-image">
                    <img src="@/assets/hyper/gravity_option_4.png" alt="" class="project-image">
                </div>
            </div>

            <img src="@/assets/hyper/final_sketch.png" alt="" class="project-image">
        </div>

        <div class="section-container flex justify-between">
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

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo video-source="/project-video/hyper/substance.mp4" />
        </div>

        <div class="section-container flex justify-end">
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
                    <img src="@/assets/hyper/substance_option_1.png" alt="" class="project-image">
                    <img src="@/assets/hyper/substance_option_2.png" alt="" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/substance_option_3.png" alt="" class="project-image">
                    <img src="@/assets/hyper/substance_option_4.png" alt="" class="project-image">
                </div>
            </div>

            <img src="@/assets/hyper/substance_final.png" alt="" class="project-image">
        </div>

        <div class="section-container flex justify-between">
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

        <div class="section-container">
            <ImageContainer>
                <img src="@/assets/hyper/ai_frameworks.png" alt="" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-end">
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

        <div class="section-container">
            <ImageContainer>
                <img src="@/assets/hyper/ai_scene_model.png" alt="" class="contained-image">
                <div class="divider fill-gray"></div>
                <img src="@/assets/hyper/ai_mood.png" alt="" class="contained-image">
            </ImageContainer>
        </div>
        
        <div class="section-container flex justify-between">
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

            <img src="@/assets/hyper/unreal_main.png" alt="" class="project-image">

            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/unreal_material.png" alt="" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/hyper/unreal_environment.png" alt="" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-end">
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
            <ProjectVideo video-source="/project-video/hyper/unreal.mp4" />
            <img src="@/assets/hyper/unreal_1.png" alt="" class="project-image">
            <img src="@/assets/hyper/unreal_2.png" alt="" class="project-image">
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24">
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

        <ProjectFooter />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'


import ProjectFooter from '@/components/ProjectFooter.vue'


</script>