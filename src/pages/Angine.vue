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

        <ProjectFooter />
    </div>
</template>

<script setup>
import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import QuotesBlock from '@/components/projects/QuotesBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ProjectVideoSmall from '@/components/projects/ProjectVideoSmall.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import ImageContainerPadless from '../components/projects/ImageContainerPadless.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ProjectFooter from '@/components/ProjectFooter.vue'

</script>