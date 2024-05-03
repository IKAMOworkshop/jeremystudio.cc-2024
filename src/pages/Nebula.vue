<template>
    <div>
        <ScrollProgress />

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

        <div class="section-container flex justify-between content-hidden">
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
            <img src="@/assets/nebula/header.png" alt="A hero shot of the projector and the final app interface side-by-side" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-end content-hidden">
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

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/nebula/sleep_cycle.mp4"/>
        </div>

        <div class="section-container flex justify-between content-hidden">
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
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/sleep_routine.png" alt="A diagram showing the three section that our team decide to focus on, which is before, during, and after sleep" class="contained-image">
            </ImageContainer>
            <div class="flex gap-36 content-hidden">
                <ImageContainerPadless>
                    <img src="@/assets/nebula/product_highlight.png" alt="A detailed rendered of the projector" class="contained-image">
                </ImageContainerPadless>
                <ImageContainerPadless>
                    <img src="@/assets/nebula/ui_highlight.png" alt="A close up screenshot of the landing page for the app" class="contained-image">
                </ImageContainerPadless>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="CREATING A DESIGNED ENVIRONMENT."
                description="SETTING A SUITABLE SURROUNDING FOR THE DIFFERENT PHASES IS CRUCIAL TO A WELL-ROUNDED SLEEP ROUTINE. TO CREATE A DESIGNED EXPERIENCE, WE INCORPORATE A PROJECTOR’S LIGHTING CAPABILITY WITH AN IOT ECOSYSTEM TO GENEREATE THE PERFECT ENVIRONMENT AND GUIDE THE USERS THROUGH A CURATED SLEEP ROUTINE. WHILE THE PROJECTOR CONTROLS THE LIGHTING AND PROJECT VISUALS, OTHER CONNECTED DEFICES CONTROL THE AUDIO, TEMPERATURE, AND MORE."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/nebula/bed_side.png" alt="A demostration image showing a person sleeping next to the projector, while it's controlling the environmental lighting and mood" class="project-image content-hidden">
            <img src="@/assets/nebula/three_scenes.png" alt="A room render showing the different types of lighting and mood that the project and app can create" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BUILDING A UNIQUE EXPERIENCE FOR INDIVIDUAL USER."
                description="WE DESIGNED NEBULA TO LEARN FROM THE USER AND ADAPT TO PROVIDE THE APPROPRIATE GUIDANCE. WHILE THE PROJECTOR MODIFIES THE USER’S SURROUNDINGS, THE APP COLLECTS EXISTING DATA (CALENDAR EVENTS, PAIRED DEVICES, ETC) FROM THE USER’S PHONE AND UTILIZES THEM TO GENEREATE SUGGESTIONS. AT THE BSE LEVEL, THE APP ALSO ACTS AS THE CONTROLLER FOR THE ECOSYSTEM, ALLOWING USERS TO SET THEIR DURROUNDINGS IF NEEDED. COMBINDING THE TWO ENBALES NEBULA TO CREATE A UNIQUE SLEEP ROUTINE FOR EACH USER BASED ON THEIR PREFERENCES."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/nebula/integration.mp4"/>
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/product_view.png" alt="A three way render of the front, side, and back of the projector" class="contained-image">
            </ImageContainer>
            <ImageContainerPadless class="content-hidden">
                <img src="@/assets/nebula/ui_collage.png" alt="A collage of the final app interface design" class="contained-image">
            </ImageContainerPadless>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DESIGN PROBLEM"
                content-two="THE EXPERIENCE"
                content-three="THE BRAND"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="CRAFTING A BRAND THAT REFLECTS THE EXPERIENCE."
                description="TO DESIGN A BRAND THAT’S RADIATES THE SAME ESSANCE AS THE EXPERIENCE, WE EXTRATED THE PROJECTOR’S SIHOUETTE AND INCORPORATED THE THREE SLEEP PHASES TO CREATE A SUBTLE SUNRISE EFFECT. THE THIN STROKE AND TYPOGRAPHY MIRROR THE LIGHTNESS THAT OUR ECOSYSTEM CREATES, AND THE SUBTLE FADE-IN SIMULATES HOW IT WILL CHANGE FROM SCENE TO SCENE."
            />
        </div>

        <div class="section-container flex gap-36 content-hidden">
            <div class="flex flex-column gap-36 w-100">
                <img src="@/assets/nebula/brand_showcase.png" alt="A image showcasing the brand logo and color of the project" class="project-image covered-image">
            </div>
            <div class="flex flex-column gap-36 w-100">
                <ProjectVideoSmall video-source="/project-video/nebula/brand_motion.mp4"/>
            </div>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DESIGN PROBLEM"
                content-two="THE EXPERIENCE"
                content-three="THE BRAND"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="LEARNING THE TOPICS AND IDENTIFING OPPORTUNITIES FOR THE EXPERIENCE."
                description="WHEN THE TEAM DECIDED TO FOCUS ON SLEEP, WE STARTED BY GATHERING AS MUCH INFORMATION ABOUT SLEEP TO EDUCATE OURSELVES ON THE TOPICWITH THE INFORMATION AS BASE, WE ABLE TO FORMULATE A USER RESEARCH PLAN.WE THEN WORKED WITH INDIVIDUALS AGED BETWEEN 18-31 TO IDENTIFY PATTERNS AND OPPORTUNITIES FOR US TO DESIGN FOR."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainerPadless>
                <img src="@/assets/nebula/survey.png" alt="A glance at the questions for the created survey for user research" class="contained-image">
            </ImageContainerPadless>
        </div>

        <div class="section-container flex flex-column align-end gap-100">
            <QuotesBlock
                class="content-hidden"
                quote="OTHER THAN SCHOOL, I’VE ALSO HAVE PERSONAL PROJECTS, WHICH MAKES IT TO ACHIVE THE EIGHT HOURS OF SLEEP."
                small-text="<01  />"
                number-color="#7593FF"
            />
            <QuotesBlock
                class="content-hidden"
                quote="SOMETIMES I NEED TO SLEEP LATE AT NIGHT, WHICH IS FINE FOR A DAY, BUT IT CREATES A BAD CYCLE OF TERRIBLE ROUTINE."
                small-text="<02  />"
                number-color="#7593FF"
            />
            <QuotesBlock
                class="content-hidden"
                quote="I THINK MANY ACTIONS DURING THE DAY EVENTUALLY LEAD UP TO AFFECT MY SLEEP, THINGS JUST GETS DELAYED A LOT."
                small-text="<03  />"
                number-color="#7593FF"
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/journey_map.png" alt="A user journey diagram of the experience" class="contained-image">
            </ImageContainer>
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/scenario.png" alt="A sketched version of the entire user journey with Nebula" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DESIGN PROBLEM"
                content-two="THE EXPERIENCE"
                content-three="THE BRAND"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"

                :active-content="5"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="ENCHANT THE DETAILS THROUGH TESTING AND PROTOTYPING."
                description="THE TEAM BUILT MULTIPLE PROTOTYPES TO TEST OUR HYPOTHESIS AND CREATE A VISION OF THE EXPERIENCE. TO BETTER COMMUNICATE THE DETAILS, WE TESTED THE ENTIRE EXPERIENCE WITH EACH ITERATION AND ENSURED A STREAMLINED USER FLOW FROM START TO END."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/ceiling_mount.png" alt="A side-by-side image showing the paper prototype and digital mock up for the ceiling mounting method" class="contained-image">
                <div class="divider fill-gray"></div>
                <img src="@/assets/nebula/gilder_mount.png" alt="A side-by-side image showing the paper prototype and digital mock up for the ceiling glider method" class="contained-image">
                <div class="divider fill-gray"></div>
                <img src="@/assets/nebula/multi_device.png" alt="A side-by-side image showing the paper prototype and digital mock up for the multi-devices method" class="contained-image">
            </ImageContainer>
            <img src="@/assets/nebula/light_testing.png" alt="A photo showing the light-testing process to make sure projectors clarity under certain lighting condition" class="project-image content-hidden">
            <img src="@/assets/nebula/form_explore.png" alt="Iterations of differnet models exploring the look and feels of the final product" class="project-image content-hidden">
            <ImageContainer class="content-hidden">
                <img src="@/assets/nebula/wireframe.png" alt="A information architecture diagram mappping the wireframe and their corrisponding flow" class="contained-image">
            </ImageContainer>
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/angine.png"
                next-project-title="ANGINE"
                next-project-link="/angine"
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
import QuotesBlock from '@/components/projects/QuotesBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ProjectVideoSmall from '@/components/projects/ProjectVideoSmall.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import ImageContainerPadless from '../components/projects/ImageContainerPadless.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

onMounted(() => {
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