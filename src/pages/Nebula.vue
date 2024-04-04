<template>
    <div>

        <TopTitle project-title="<NEBULA"/>
        <HeroVideo video-source="/project-video/nebula/header_video.mp4" />

        <ProjectData 
            title-color="#7593FF"
            project-type="ECOSYSTEM"
            project-description="DESIGNING AN ADAPTIVE SLEEP TRAINER TO CURATE A PERSONALIZED SLEEP ROUTINE."

            project-timing="FALL 2021"
            member-one="JEREMY CHANG"
            member-two="ZIYI ZHOU"

            tech-one="FIGMA"
            tech-two="RHINO"
            tech-three="KEYSHOT"

            skill-one="ECOSYSTEM DESIGN"
            skill-two="UIUX DESIGN"
            skill-three="PRODUCT DESIGN"
            skill-four="BRAND DESIGN"
            skill-five="2D MOTION"
        />

        <div class="section-container flex justify-between">
            <TableContent 
                content-one="DESIGN PROBLEM"
                content-two="THE EXPERIENCE"
                content-three="THE BRAND"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="NEBULA AIMS TO ADDRESS THE RELATIONSHIP BETWEEN TECHNOLOGY AND MENTAL HYGINE."
            />
        </div>

        <div class="section-container">
            <img src="@/assets/nebula/header.png" alt="" class="project-image">
        </div>

        <div class="section-container flex justify-end">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="THE ROOT PROBLEM OF MENTAL HYGINE - SLEEP."
                description="THROUGH RESEARCH, THE TEAM IDENTIFIED SLEEP AS THE ROOT OF A PERSON’S PHYSICAL AND MENTAL WELL-BEING, AS A POOR SLEEP ROUTINE MAY RESULT IN AN ENDLESS CYCLE OF STRESS AND NEGATIVE EMOTIONS."
            />
        </div>

        <div class="section-container">
            <ProjectVideo video-source="/project-video/nebula/sleep_cycle.mp4"/>
        </div>

        <div class="section-container flex justify-between">
            <TableContent 
                content-one="DESIGN PROBLEM"
                content-two="THE EXPERIENCE"
                content-three="THE BRAND"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="PERSONALIZING AN IDEAL SLEEP CYCLE FOR INDIVIDUAL USER."
                description="WE SIMPLIFIED A SLEEP CYCLE INTO THREE MAIN PHASES - BEFORE, DURING, AND AFTER. WE THEN IDENTIFIED OPPORTUNITIES FOR EACH PHASE TO CREATE THE IDEAL SCENARIO. FOR EXAMPLE, A WELL-ROUNDED SLEEP ROUTINE SHOULD INCLUDE A 30-MIN WIND DOWN BEFORE SLEEP, CREATE A CALM AND DARK ROOM DURING SLEEP, AND WAKE UP AT THE END OF A REM CYCLE."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ImageContainer>
                <img src="@/assets/nebula/sleep_routine.png" alt="" class="contained-image">
            </ImageContainer>
            <div class="flex gap-36">
                <ImageContainerPadless>
                    <img src="@/assets/nebula/product_highlight.png" alt="" class="contained-image">
                </ImageContainerPadless>
                <ImageContainerPadless>
                    <img src="@/assets/nebula/ui_highlight.png" alt="" class="contained-image">
                </ImageContainerPadless>
            </div>
        </div>

        <ProjectFooter />
    </div>
</template>

<script setup>
import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ProjectVideoSmall from '@/components/projects/ProjectVideoSmall.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import ImageContainerPadless from '../components/projects/ImageContainerPadless.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ProjectFooter from '@/components/ProjectFooter.vue'

</script>