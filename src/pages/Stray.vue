<template>
    <div>
        <ScrollProgress />
        <div id="stray-experience" class="stray-experience"></div>

        <TopTitle project-title="<STRAY"/>
        <HeroVideo video-source="/project-video/stray/header.mp4" />

        <ProjectData 
            title-color="#FF6581"
            project-type="WEBGL"
            project-description="DEVELOPING A SERIES OF MINI-PROJECTS TO EXPLORE THE POSSIBILITIES OF SHADER CODING."

            project-timing="SPRING 2024"
            member-one="JEREMY CHANG"

            tech-one="THREE.JS"
            tech-two="GLSL (WEBGL)"
            tech-three="THREATER.JS"
            tech-four="BLENDER"

            skill-one="DIGITAL DESIGN"
            skill-two="3D DESIGN"
            skill-three="EXPERIENCE DESIGN"
            skill-four="WEB DEVELOPMENT"
        />

        <div class="section-container flex justify-end content-hidden">

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="true"

                open-tag="<"
                closing-tag="/>"

                title="DIVING INTO THE REALM OF CUSTOME SHADERS FOR A ELEVATED WEB EXPERIENCE."
                description="AS I SLOWLY BECOME LITERATE IN THREE.JS, I AM DETERMINED TO DIVE DEEPER INTO THE WORLD OF WEBGL AND CUSTOM SHADERS. WHILE THREE.JS IS POWERFUL, WE CAN LEVEL UP THE EXPERIENCE WITH CUSTOME SHADERS. LIKE MANY OTHER THINGS I’VE LEARNED, I STARTED BY BUILDING VARIOUS PROJECTS EVEN THOUGH I HAVE NO IDEA WHAT WAS HAPPENING HALF THE TIME. BUILDING THINGS HAS ALWAYS BEEN THE BEST WAY FOR ME TO LEARN, AND IT WORKS WONDERS. WITH JUST A COUPLE OF PROJECTS. I WANT FROM NOT UNDERSTANDING TO NOW CAPABLE OF FORMULATING A GENERAL STRUCTURE WHEN LOOKING AT AN EFFECT FROM OTHER WEBSITES."
                small-text-one="SPECIAL SHOUTOUTS TO BRUNO SIMON AND YURI ARTIUKH FOR THE AMAZING GUIDANCES."
            />
        </div>

        <div class="section-container flex justify-center content-hidden">
            <img src="@/assets/stray/header.png" alt="GLSL code and the results of the rendered wobbly model" class="project-image">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="ALLOW THE MODEL VERTICES TO DANCE WITH RYTHM."
                description="SHADERS ALLOW US TO ACCESS AND CONTROL EACH VERTEXT’S DATA ON AN MESH. THIS APOWER ENABLES US TO CREATE MANY DIFFERENT EFFECTS BYOND THREE.JS’S CAPABILITIES. TO MAKE THE WOBBLY EFFECT, I FIRST UTILIZED A SIMPLEX NOISE TO APPLY A “RANDOMIZED” POSITION FOR EACH VERTEX AND ANIMATE IT WITH TIME DATA EXTRACTED FROM JAVASCRIPT. AS WE UPDATE THE POSITION, WE MUST ALSO UPDATE THE NORMALS SO THAT THREE.JS CAN CAST THE CORRECT LIGHTING EFFECT. TO ACHIEVE THAT, I CACULATED AND APPLIED THE CORRECT NORMALS BACK TO THE VERTICES SO THE SHADOWS AND REFLECTIONS WOULD WORK AS INTENDED."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/wobbly.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="NOW THAT WE HAVE THE DESIRED EFFECT, WE CAN GO CRAZY WITH THE COLORs AS WE’VE GOT ALL THE DATA WE NEEDED. I UTILIZED THE MIX() FUNCTION TO CREATE A BLEND OF COLORS AND ROUGHNESS DEPENDING ON THE POSITION."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/wobble_1.png" alt="A violet and yellow colored wobbling sphere with a matte material" class="project-image content-hidden">
                    <img src="@/assets/stray/wobble_2.png" alt="A red and blue colored wobbling sphere with a metal-like material" class="project-image content-hidden">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/wobble_3.png" alt="A green and cyan colored wobbling sphere with a matted metal material" class="project-image content-hidden">
                    <img src="@/assets/stray/wobble_4.png" alt="A violet and turqoise colored wobbling sphere with a reflective metal material" class="project-image content-hidden">
                </div>
            </div>
            <img src="@/assets/stray/wobble_5.png" alt="A green and blue colored wobbling monkey model with a matted metal material" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="RECREATING THE DYNAMIC THUMBNAIL EFFECT FROM AIRCORD."
                description="I ADORE MANY ASPECT OF THE AIRCORD’S WEBSITE. FROM THE INCREDIBLY SMOOTH SCENE TRANSITION BETWEEN PAGES TO THE INFINITE 3D SLIDER OF PROJECT ARE ALL SPECTACULAR. I’M PARTICULARLY AMUSED BY THE THUMBNAIL INTERACTION ON THEIR ARCHIVES PAGE. WHILE THE SCREEN-LIKE PLANE UPDATES THE THUMBNAIL AS YOU HOVER OVER DIFFERENT PROJECTS, IT ALSO SLOWLY TURN TORWARDS YOUR CURSOR. THIS SCENE PERFECTLY DEMONSTRATES WHAT I BELIEVE TO BE AN EFFECTIVE INTERACTIVE 3D WEB EXPERIENCE."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/dynamic_thumbnail.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="DECONSTRUCTING A DIFFICULT PROBLEM INTO SMALL PROBLEMS."
                description="AT FIRST GLANCE, THIS SEEMS TRICKY AS THIS SCENE HAS MANY MOVING PARTS, SO I BROKE THEM DOWN INTO MORE MINOR PROBLEMS TO TACKLE ONE AT A TIME. WE CAN EASILY BREAK DOWN THE EFFECTS INTO FIVE SMALL INTERACTIONS: PLANE ROTATION, BENDING THE VERTICES, LOADING TEXTURES, PARALLAX THUMBNAIL, AND UPDATING THE TEXTURE ON HOVER. NOW THAT I HAVE A TODO LIST, I CAN TACKLE THEM INDIVIDUALLY AND EVENTUALLY COMPILE THEM INTO ONE ENTITY."
            />
        </div>

        <div class="section-container flex flex-column content-hidden">
            <ImageContainer>
                <img src="@/assets/stray/deconstruct_problem.png" alt="A step-by-step image demostration on how I broke down the project into smaller pieces to resolve" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BUILDING A LIGHT CURSOR INSPIRED BY LUIGI’S MANSION."
                description="GROWING UP, I’VE PLAYED A LOT OF MARIO GAME. WHILE MANY OF THEM ARE GREAT MEMORIES, I WILL NEVER FORGET THE TIME THAT I WAS HIDING IN BED TRYING TO CATCH ALL THE BOOS BY SCRIBBLING LIGHTS ON MY NINTENDO DS. INSPIRED BY THE MINIGAME, I WANT TO BUILD AN EXPERIENCE WHERE PLAYERS CAN REVEAL DETAILS BY MOVING THE CURSOR."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/cursor.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="ENGAGE THE PLAYER THROUGH THEIR CURSOR."
                description="YOU MAY HAVE NOTICED, BUT I LOVE BINDING DIFFERENT INTERACTIONS TO THE CURSOR. IT IS A GREAT WAY TO IMMERSE USERS IN THE EXPERIENCE. IN THIS CASE, I ESSENTIALLY USE THE CURSOR POSITION TO ANIMATE PRETTY MUCH EVERYTHING THAT’S ON SCREEN. WHILE THE HEAD LOOKS WHEREVER THE CURSOR IS, THE ARMS FLAP OUTWARD BASED ON THE X POSITION OF THE CURSOR. LASTLY, I LAOS BONDED A POINT LIGHT TO THE CURSOR SO IT LIGHTS UP WHEREVER THE USER CURSOR IS."
            />
        </div>

        <div class="section-container project-columns flex gap-36 content-hidden">
            <div class="flex flex-column gap-36">
                <img src="@/assets/stray/reference_mesh_code.png" alt="A code snippet showing the process of adding a referencing mesh for the cursor and robot movement" class="project-image">
            </div>
            <div class="flex flex-column gap-36">
                <img src="@/assets/stray/animate_model_code.png" alt="A code snippet showing how I animated the robot model using the cursor position as the base value" class="project-image">
            </div>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="RECREATING A WINDOW THUMBNAIL INSPIRED BY KENTA TOSHIKURA."
                description="AS AN ASPIRING CREATIVE DEVELOPER, I’M INSPIRED BY MANY OTHERS WHO ARE GENERATING INCREDIBLE WORKS, AND I HOPE ONE DAY I CAN DO THE SAME. AS KENTA TOSHIKURA FROM GARDEN EIGHT IS ONE OF MY FAVORITES, I WANT TO RECREATE THE WINDOW EFFECT FROM HIS CURRENT PORTFOLIO. IT’S A BRILLIANT CREATION, FILLED WITH DETAILS LIKE THE SEE-THROUGH GLASS DISTORTION, THE PARALLAX MOVEMENT, AND THE TRANSITION FROM HOMEPAGE TO PROJECT CASE STUDIES. IT’S ALWAYS A TREAT BROWSING THROUGH HIS WORKS, AS THEY ARE ALL FILLED WITH AMUSING DETAILS, INTERACTIONS, AND TRANSITIONS THAT FULLY IMMERSE US IN THE EXPERIENCES."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/glass.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="OVERLAYING RENDERS WITH A RENDER TARGET FOR POSTPROCESSING."
                description="TO ACHIEVE THE SAME EFFECT, I CREATED TWO SEPARATE SCENES, EACH WITH ITS PURPOSE. THE PRIMARY SCENE IS RENDERED TO THE AUDIENCE, CREATING WINDOW EFFECTS, AND THE MODEL SCENE RENDERS AND ANIMATES THE MODEL. ONCE BOTH SCENES ARE SET UP, I ASSIGN THE PLANE IN THE PRIMARY SCENE AS A RENDER TARGET, WHICH WILL RENDER THE MODEL SCENE THROUGH ITS LENS, CREATING THE WINDOW EFFECT. LASTLY, I DISTORTED THE UV WITH SHADERS TO CREATE A GLASS-LIKE EFFECT ON TOP OF THE RENDERED MODEL. ESSENTIALLY, I’M APPLYING POSTPROCESSING TO A RENDERED IMAGE."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/stray/glass_1.png" alt="Iterations of the same window-glass effect with a robot head model" class="project-image content-hidden">
            <img src="@/assets/stray/glass_2.png" alt="Iterations of the same window-glass effect with a game controller model" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="5"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="CALCULATING POSITION AND COLOR WITH GPGPU."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/flow.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="CREATING PARTICLES IS HARD. IT’S EVEN HARDER TO ANIMATE THEM AS IT INVOLVES A LOT OF CALCULATIONS WITH HUNDREADS OF VERTICES, AND WE HAVE TO DO IT FOR EVERY FRAME. TO ACHIEVE A FLOWING PARTICLE EFFECT, WE NEED TO LEVERAGE A TECHNIQUE CALLED GENERAL-PURPOSE COMPUTING ON GRAPHICS PROCESSING UNITS (GPGPU). FROM THIS, WE CAN EMBED POSITIONAL DATA ONTO A TEXTURE, DECODE THEM, AND UPDATE EACH FRAME’S VERTICES’ POSITION ACCORDINGLY. IT’S A SUPER POWERFUL TOOL WHEN PROCESSING LARGE AMOUND OF DATA. ONCE WE ACHIEVE THIS PROCESS, WE CAN APPLY ANIMATION WITH DIFFERENT FORMULAS AND NOISES."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/stray/flow_1.png" alt="A boat model using the same flow field engine to show a more colorful results" class="project-image content-hidden">
            <img src="@/assets/stray/flow_2.png" alt="A game controller model distorted using the flow field engine to showcase a contrasting color, which is yellow and cyan" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="6"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="DISTORTING THE RENDER UV WITH POSTPROCESSING."
                description="INSTEAD OF MODIFYING THE VERTEX POSITION, WE CAN ALSO DISTORT IMAGES BY APPLYING A LAYER OF POSTPROCESSING ON TOP TO DISTORT THE UV. INSPIRED BY HOMUNCULUS’S WEBSITE, I WANT TO RECREATE THE SAME PATTERN BY DISTORTING COLORFUL IMAGES TO GENERATE BEAUTIFUL PATTERNS. TO CREATE A CUSTOM POSTPROCESSING LAYER, I REUSE CODE FROM THREE.JS AND DIRECTLY MODIFIED THE UV ON THE FRAGMENT SHADER TO DISTORT THE IMAGE LAYER UNDERNEATH. WITH THE BASE CODE, WE CAN SWITCH OUT THE IMAGES TO CREATE DIFFERENT COLOR PALETTES AND GENERATE PATTERNS BY ADJUSTING THE VALUES."
            />
        </div>
        
        <div class="section-container flex flex-column gap-36">
            <ProjectVideo class="content-hidden" video-source="/project-video/stray/distort.mp4"/>
            <div class="project-columns flex gap-36 content-hidden">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/distort_1.png" alt="Iteration of the distorted UV pattern with different images gnerating different patter and colors. In the case, is yellow and blue." class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/distort_2.png" alt="Iteration of the distorted UV pattern with different images gnerating different patter and colors. In the case, I've tried a highly saturated and colored blend of images" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="DANCING VERTEX"
                content-two="DYNAMIC THUMBNAILS"
                content-three="PATHFINDING CURSOR"
                content-four="WINDOWED RENDERING"
                content-five="FLOW FIELD PARTICLES"
                content-six="DISTORTED POSTPROCESSING"
                content-seven="RAYMARCHING"

                :active-content="7"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="SMOOTH BLENDING SHAPES TO CREATE A FLUID-LIKE EFFECTS."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/stray/raymarching.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="TO TEST THE POWER OF SHADER CODE, I FOLLOWED A RAYMARCHING GUIDE TO CREATE A FLUID BLENDING EFFECT WITH CIRCLES AND SQUARES. ALTHOUGH THE FINAL RESULT LOOKS 3D, IT IS ACHIEVED WITH MATCAP TEXTURE, HENCE THE RENDER STYLE DIFFERENCES. ESSENTIALLY, I’M BLENDING CIRCLES AND SQUARES TO CREATE THE BEAUTIFUL RENDERS."
            />
        </div>

        <div class="section-container flex flex-column content-hidden">
            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/ray_1.png" alt="Exploring a more matte metal matcap texture." class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/stray/ray_2.png" alt="Exploring a highly reflective metal matcap texture" class="project-image">
                </div>
            </div>
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/hyper.png"
                next-project-title="HYPER"
                next-project-link="/hyper"
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
import ProjectFooter from '../components/ProjectFooter.vue';

import { onMounted, onUnmounted } from 'vue'
import {useHead} from '@vueuse/head'
import Lenis from '@studio-freight/lenis'

useHead({
    title: 'Jeremy Chang | Stray',
    meta: [
        {
            name: 'description',
            content: 'Developing a series of mini-projects to explore the possibilities of shader coding.',
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