<template>
    <div>
        <ScrollProgress />
        <div id="arcane-experience" class="arcane-experience"></div>


        <TopTitle project-title="<ARCANE"/>
        <HeroVideo video-source="/project-video/arcane/header.mp4" />

        <ProjectData 
            title-color="#7DF7FF"
            project-type="WEB DESIGN"
            project-description="DEVELOPING AN IMMERSIVE 3D WEB EXPERIENCE TO DISPLAY MY FRONT-END PROJECTS."

            project-timing="WINTER 2022"
            member-one="JEREMY CHANG"

            tech-one="VUE.JS"
            tech-two="THREE.JS"
            tech-three="GSAP"
            tech-four="LENIS.JS"
            tech-five="NETLIFY"
            tech-six="BLENDER"

            skill-one="WEB DESIGN"
            skill-two="WEB DEVELOPMENT"
            skill-three="3D DESIGN"
            skill-four="3D&2D MOTION"
        />

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="THE EXPERIENCE"
                content-three="PROJECT PLANNING"
                content-four="DEVELOPMENT"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BLENDING 2D WITH 3D TO CREATE A PERSONALIZED WEB EXPERIENCE."
            />
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/arcane/screen_showcase.png" alt="A hero shot of a collage of different screens from the developed website" class="project-image">
        </div>

        <div class="section-container flex justify-between">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="THE EXPERIENCE"
                content-three="PROJECT PLANNING"
                content-four="DEVELOPMENT"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="LAYERING ELEMENTS BETWEEN DIMENSIONS."
                description="DESIGNING A 3D WEB EXPERIENCE IS QUITE DIFFERENT FROM A TRADITIONAL 3D SITE. INSTEAD OF DEALING WITH TYPOGRAPHY, SHAPES, AND COLORS, WE’RE DESIGNING WITH FORMS, LIGHTS, AND DEPTH. WITH 3D, WE CAN INCLUDE MORE DEPTH IN THE EXPERIENCE THAT HELPS SUPPORT THE MAIN CONTENT AND CREATE ENGAGEMENT WITH THE DIFFERENT INTERACTIONS."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/arcane/model_collage.png" alt="A collage of models used for this website, which include the hero robot head, a cat, and a simplified keyboard" class="contained-image">
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

                description="WHILE DESIGNING, I UTILIZED THE CAMERA’S MOVEMENT WITH PARALLAX SCROLLING TO DISPLAY THE THICKNESS OF THE MESH. I CREATED MULTIPLE LAYERS BETWEEN THE VARIOUS CONTENT TO GLUE THEM TOGETHER BETWEEN 2D AND 3D."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/arcane/main_model.mp4"/>
            <ProjectVideo class="content-hidden" video-source="/project-video/arcane/not_found.mp4"/>
        </div>
        
        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="IT’S NOT JUST A PROJECT DOCUMENTATION, BUT A BRANDING PROJECT."
                description="MANY ARGUED THAT A PORTFOLIO SITE SHOULD BE SIMPLE AND GET STRAIGHT TO THE POINT, AS IT CREATES FEWER DISTRACTIONS FROM YOUR PROJECTS. HOWEVER, I BELIEVE A PORTFOLIO IS MORE THAN JUST DOCUMENTATION OF YOUR WORK. LIKEWISE, I ALWAYS TREAT THEM AS A BRANDING PROJECT TO PRESENT MYSELF AND MY WORK, SO I ALWAYS FIND OPPORTUNITIES TO ELEVATE THE EXPERIENCE WITH SUBTLE EFFECTS."
            />
        </div>

        <div class="section-container flex gap-36 content-hidden">
            <div class="flex flex-column gap-36 w-100">
                <ProjectVideoSmall video-source="/project-video/arcane/hover.mp4"/>
            </div>
            <div class="flex flex-column gap-36 w-100">
                <ProjectVideoSmall video-source="/project-video/arcane/cursor.mp4"/>
            </div>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="THE EXPERIENCE"
                content-three="PROJECT PLANNING"
                content-four="DEVELOPMENT"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="SETTING A FOUNDATION FOR DESIGN AND CONTENT."
                description="LIKE ALL BRANDING PROJECTS, I ALWAYS ASK MYSELF THREE THINGS TO SET A FOUNDATION FOR MY PORTFOLIO: HOW DO YOU WANT YOUR TARGET AUDIENCE TO FEEL, THINK, AND DO? UNDERSTANDING THE THREE CORE GOALS CREATES A PROJECT DESIGN BRIEF AND ALIGNS THE CONTENT’S TONE AND THE SITE’S VISUAL DESIGN. WHILE THE “THINK” AND “DO” DICTATE THE CONTENT, THE FEELS DIRECT THE VISUAL DESIGN."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/arcane/design_pillar.png" alt="A diagram showing the base pillars that I consider when designing a website, especially a portfolio" class="contained-image">
            </ImageContainer>
        </div>
        
        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="THE ART OF STEALING... OR AKA - FINDING INSPIRATIONS."
                description="EXPERIENCING GREAT THINGS FROM OTHERS WILL ALWAYS BE MY BIGGEST SOURCE OF MOTIVATION. EVERYTHING I DO STARTED WITH SOMETHING INCREDIBLE I SAW FROM SOMEONE, WHETHER IT’S DESIGN, ILLUSTRATION (LEARNING), OR DRUMMING (ALSO LEARNING). DURING MY LAST COUPLE OF SEMESTERS AT SCHOOL, I’VE ALWAYS BEEN ASTONISHED BY ALL THE INCREDIBLE 3D WEBSITES. SO, I CURATED A COLLECTION OF WEBSITES I ADORE AND IDENTIFIED OPPORTUNITIES AND ELEMENTS TO INTEGRATE INTO MY DESIGN."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/arcane/visual_research.png" alt="A collage of all the referenced screenshots from other people's websites" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="THE EXPERIENCE"
                content-three="PROJECT PLANNING"
                content-four="DEVELOPMENT"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="LEVERAGING VUE 3’S CAPABILITY WITH THREE."
                description="I DECIDED TO LEVERAGE VUE’S CAPABILITY TO BUILD A DYNAMIC SITE TO SPEED UP MY DEVELOPMENT PROCESS. ALTHOUGH I NEVER INTEGRATED THREE.JS WITH A FRAMEWORK, IT WAS PRETTY STRAIGHTFORWARD TO UNDERSTAND THE DIFFERENT LIFE CYCLE HOOKS TO GET IT TO WORK."
            />
        </div>

        <div class="section-container content-hidden">
            <ImageContainer>
                <img src="@/assets/arcane/vue_three.png" alt="A image showing the Vue.js and Three.js logo" class="contained-image">
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

                description="HOWEVER, THERE’S ALWAYS ROOM FOR IMPROVEMENT, AS I’M CURRENTLY EXPERIMENTING WITH MODULES AND CLASSES TO EVENTUALLY TACKLE A MUCH MORE COMPLEX PROJECT."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/arcane/blender.png" alt="A screenshot from Blender showing the modeling process of the robot head" class="project-image content-hidden">
            <div class="project-columns flex gap-36 content-hidden">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/arcane/import_model_code.png" alt="A code snippet showing the importing and loading of models" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/arcane/animating_model_code.png" alt="A code snippet showing the code of updating the position of the models, which animate them using sin functions and time" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="AT ONE POINT, I NEEDED TO SEPARATE DIFFERENT RENDERS ON A SINGLE PAGE. IT QUICKLY BECAME TRICKY AS THE BROWSER LIMITS THE AMOUNT OF WEBGL CONTEXTS YOU CAN HAVE, AND IT’S JUST NOT GREAT FOR PERFORMANCE. TO ACOMPLISH THE SEPARATION, I CREATED FUNCTIONS TO GENERATE THE NECESSARY DATA TO CONSTRUCT A SCENE AND ASSIGN VIRTUAL CANVASES TO RENDER THE DIFFERENT OBJECTS."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/arcane/model_sections.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="INITIALLY, THE CONCEPT WAS A BIT TOUGH TO GRASP AS I’M STILL TRYING TO UNDERSTAND MODULIZING THREE.JS CODE, ESPECIALLY WITH A FRAMEWOKR. HOWEVER, ONCE I BROKE DOWN AND UNDERSTOOD EACH STEP, I WAS ABLE TO RECREATE IT WITHIN VUE."
            />
        </div>

        <div class="section-container project-columns flex gap-36 content-hidden">
            <div class="flex flex-column gap-36">
                <img src="@/assets/arcane/setting_scene_code.png" alt="A code snippet showing the function that sets up the various scenes for the multi-render" class="project-image">
            </div>
            <div class="flex flex-column gap-36">
                <img src="@/assets/arcane/render_section_code.png" alt="A code snippet showing the slicing code to tell the canvas to check for render target and render the corrisponding scene" class="project-image">
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

                title="THE GLUE OF THE EXPERIENCE."
                description="TO CREATE A SUBTLE AND SMOOTH EXPERIENCE, I UTILIZED VUE ROUTER’S API AND GSAP TO BUILD TRANSITIONS AND ANIMATIONS THAT GLUE ALL THE COMPONENTS AND PAGES TOGETHER. ALTHOUGH IMPLEMENTING GSAP IS QUITE SIMPLE, THERE ARE STILL SOME MINOR THINGS THAT I NEED TO RESOLVE."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/arcane/transition_scroll.mp4" />

            <div class="project-columns flex gap-36 content-hidden">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/arcane/transition_code.png" alt="A code snippet showing the GSAP animation code for page transitions" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/arcane/scroll_code.png" alt="A code snippet showing the GSAP animation code for scroll triggers" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="FOR THE WORK PAGE, I IMPLEMENTED AN INFINITE SCROLL TO AVOID BREAKING THE FLOW OF PREJECT EXPLORATION. WITH THE DYNAMIC THUMBNAIL, MY GOAL WAS TO CREATE SOMETHING UNORTHODOX AND DARING IN A WEB EXPERIENCE."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/arcane/infinite_scroll.mp4"/>
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/nebula.png"
                next-project-title="NEBULA"
                next-project-link="/nebula"
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
import ProjectVideoSmall from '@/components/projects/ProjectVideoSmall.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import {useHead} from '@vueuse/head'
import Lenis from '@studio-freight/lenis'

useHead({
    title: 'Jeremy Chang | Arcane',
    meta: [
        {
            name: 'description',
            content: 'Developing an immersive 3D web experience to display my front-end projects.',
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

requestAnimationFrame(raf)

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