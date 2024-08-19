<template>
    <div>
        <div id="transition-block" class="flex justify-center align-center">
            <svg class="transition-logo" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.889 311.27L171.956 88.1111H129.363L69.2959 311.27H111.889ZM194.576 283.595L330 229.353V185.668L194.576 131.425V177.295L279.398 206.643V208.378L194.576 237.726V283.595Z" fill="white"/>
            </svg>
        </div>

        <ScrollProgress />
        <div id="transit-experience" class="transit-experience"></div>
        <div id="scroll">

        <TopTitle project-title="<TRANSIT"/>
        <HeroVideo video-name="trasit" video-source="/project-video/transit/header_video.mp4" />
        
        <ProjectData 
            title-color="#FFCC49"
            project-type="VR/MR"
            project-description="BUILDING A MIXED-REALITY EXPERIENCE EXPLORING THE LINK BETWEEN THE PHYSICAL AND VIRTUAL."

            project-timing="FALL 2022"
            member-one="JEREMY CHANG"
            member-two="KIRA BABU"

            tech-one="BLENDER"
            tech-two="UNITY"
            tech-three="C#"

            skill-one="RAPID PROTOTYPING"
            skill-two="EXPERIENCE DESIGN"
            skill-three="VR/AR DESIGN"
            skill-four="DIGITAL DESIGN"
            skill-five="3D DESIGN"
        />

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="INTEGRATION"
                content-three="PROTOTYPES"
                content-four="INSTALLATION"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="EXPANDING THE LINK BETWEEN THE PHYSICAL AND THE VIRTUAL."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <div class="project-columns flex gap-36 content-hidden">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/transit/physical_controller.webp" alt="A hero shot of the prototype controller with the digital experience playing in the background" class="project-image">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/transit/virtual_world.webp" alt="A top-down shot of the simulated traffic in the experience" class="project-image">
                </div>
            </div>
            <img src="@/assets/transit/installation_header.webp" alt="A person interacting with the experience in VR" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BROADENING THE PERSPECTIVE OF DAILY COMMUNTERS."
                description="KIRAN AND I WANT TO BUILD EMPATHY BETWEEN DIFFERENT MODES OF TRANSIT THROUGH A MIXED-REALITY EXPERIENCE. WE AIM TO CREATE A MORE EXPANSIVE PERSPECTIVE FOR DAILY COMMUNITERS, WHICH MAY LEAD TO A BETTER ECOSYSTEM. TO PROMOTE PUBLIC TRANSIT, WE DESIGNED A CHAOTIC EXPERIENCE FOR PERSONAL VEHICLES TO CONTRAST WITH THE RELAXING JOURNEY OF PUBLIC TRANSIT."
            />
        </div>

        <div class="section-container">
            <img src="@/assets/transit/modes_of_transportation.webp" alt="A four quadrum image showing the different mode of transportation that we've tried to recreate in the experience" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="INTEGRATION"
                content-three="PROTOTYPES"
                content-four="INSTALLATION"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BUILDING PROTOTYPES TO CONNECT THE PHYSICAL WORLD WITH VIRTUAL WORLD."
                description="AS WE’RE BUILDING AN EXPERIENCE MISING THE SPACE BETWEEN THE PHYSICAL AND VIRTUAL, THE TEAM NEEDS TO CREATE A SYNC BETWEEN THEM. WE MADE A BUDDY SYSTEM TO COMMUNICATE UNDATES BETWEEN THE TWO WORLDS TO ENSURE THE POSITION, SCALE, OR ORIENTATION ARE MAPPED CORRECTLY."
            />
        </div>

        <div class="section-container">
            <img src="@/assets/transit/syncing_process.webp" alt="A image showing the process of syncing the physical prototype to the digital version" class="project-image content-hidden">
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="INTEGRATION"
                content-three="PROTOTYPES"
                content-four="INSTALLATION"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="THE TEAM ITERATED THROUGH MANY PROTOTPES, AS BOTH DIMENSIONS HAVE SHORTCOMINGS. WHILE THE VIRTUAL WORLD GENERATED A LOT OF BUGS, THE PHYSICAL WORLD SIMPLY REQUIRED US TO, WELL... FOLLOW THE LAWS OF PHYSICS. NOT TO MENTION THAT WE HAVE TO INTEGRATE THE TWO SEAMLESSLY IN THE END."
            />
        </div>

        <div class="section-container flex flex-column gap-24">
            <SmallTitle
                highlight-text="PHYSICAL"
                secondary-text="PROTOTYPES"
            />
            <div class="flex flex-column gap-36">
                <img src="@/assets/transit/paper_prototype.webp" alt="A image showing the making of the first version prototype" class="project-image content-hidden">
                <div class="project-columns flex gap-36">
                    <div class="flex flex-column gap-36">
                        <img src="@/assets/transit/prototype_1.webp" alt="A image showing the syncing process of the VR controller to Unity" class="project-image content-hidden">
                        <img src="@/assets/transit/prototype_2.webp" alt="A image showing the testing of the second verison prototype" class="project-image content-hidden">
                        <img src="@/assets/transit/prototype_3.webp" alt="A image showing a person test-driving the finalized prototype with wood" class="project-image content-hidden">
                    </div>
                    <div class="flex flex-column gap-36">
                        <img src="@/assets/transit/prototype_4.webp" alt="A hero shot of the second version prototype" class="project-image">
                        <img src="@/assets/transit/prototype_5.webp" alt="A image showing a person testing the scooter controller for the finalized prototype" class="project-image content-hidden">
                    </div>
                </div>
                <img src="@/assets/transit/final_prototype.webp" alt="A hero shot of the finalized prototype" class="project-image content-hidden">
            </div>
        </div>

        <div class="section-container flex flex-column gap-24">
            <SmallTitle
                class="content-hidden"
                highlight-text="VIRTUAL"
                secondary-text="SETUP"
            />
            <div class="flex flex-column gap-36">
                <ProjectVideo class="content-hidden" video-source="/project-video/transit/car_turning.mp4"/>
                <ProjectVideo class="content-hidden" video-source="/project-video/transit/walking.mp4"/>
                <ProjectVideo class="content-hidden" video-source="/project-video/transit/scrooter_turning.mp4"/>
                <img src="@/assets/transit/unity.webp" alt="A screenshot of the Unity environment when setting up the scene and lighting" class="project-image content-hidden">
            </div>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="INTRODUCTION"
                content-two="INTEGRATION"
                content-three="PROTOTYPES"
                content-four="INSTALLATION"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="false"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="DESIGNING THE CHAOTIC FUN TO CREATING A LASTING EXPERIENCES."
                description="THE TEAM WANTED TO CREATE A LASTING EXPERIENCE. WE TOOK CONSIDERAION OF THE INSTALLATION’S ENVIRONMENT AND DECIDED TO CREATE AN ARCADE-LIKE EXPERIENCE WHERE PEOPLE CAN ENJOY THE MOMENT WITH EACH OTHER."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/transit/installation_main.webp" alt="A hero shot showing the full experience with a projector" class="project-image content-hidden">
            <div class="project-columns flex gap-36">
                <div class="flex flex-column gap-36">
                    <img src="@/assets/transit/installation_1.webp" alt="A photo showing a person interacting with the walking level for the experience" class="project-image content-hidden">
                    <img src="@/assets/transit/installation_2.webp" alt="A photo showing a person interacting with the driving level for the experience" class="project-image content-hidden">
                </div>
                <div class="flex flex-column gap-36">
                    <img src="@/assets/transit/installation_3.webp" alt="A photo showing a person interacting with the scooter level for the experience" class="project-image content-hidden">
                    <img src="@/assets/transit/installation_4.webp" alt="A photo showing a person interacting with the bus level for the experience" class="project-image content-hidden">
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

                description="WHILE THE CHAOTIC MOVEMENT DAUGHING BETWEEN CARS AND PEDESTRIANS MAY INITIALLY BE FRUSTRATING, WE REMOVED ANY COMETITIVE ELEMENTS TO KEEP THE FUN. WE TOOK MANY INSPIRATIONS FROM PARTY GAMES WHEN DESIGNING THE FINAL EXPERIENCE, WHICH CREATED MANY HEALTHY AND ENTERTAINING TEST RUNS."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/transit/installation.mp4"/>
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/arcane.png"
                next-project-title="ARCANE"
                next-project-link="/arcane"
                button-text="NEXT PROJECT"
            />
        </div>

        <ProjectFooter id="footer" class="footer-hidden" />

        </div>
    </div>
</template>

<script setup>
import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import {useHead} from '@vueuse/head'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import VirtualScroll from 'virtual-scroll'

useHead({
    title: 'Jeremy Chang | Transit',
    meta: [
        {
            name: 'description',
            content: 'Building a mixed-reality experience exploring the link between the physical and virtual.',
        }
    ]
})

// const lenis = new Lenis({
//     smooth: true,
//     lerp: .12
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

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

    window.scrollTo(0, 0)

    const scroller = new VirtualScroll()

    let scrollContainer = document.getElementById('scroll')
    let footerContainer = document.getElementById('footer')

    // Page Scroll
    let scroll = 0
    let scrollTarget = 0
    let scrollPosition = 0
    let containerSize = null

    if(scrollContainer){
        containerSize = scrollContainer.getBoundingClientRect().height
    }

    scroller.on(event => {
        scrollTarget = - event.deltaY
    })

    const tick = () => {
            if(!scrollContainer){
                scrollPosition = 0
            }
            // Reset Scroll
            scrollContainer = document.getElementById('scroll')
            

            scroll -= (scroll - scrollTarget) * .1
            scrollPosition += scroll * 1.2
            scrollTarget = 0

            scrollPosition = Math.max(0, Math.min(scrollPosition, containerSize - window.innerHeight))

            if(scrollContainer){
                scrollContainer.style.transform = `translateY(${-scrollPosition}px)`
                containerSize = scrollContainer.getBoundingClientRect().height
            }

            window.requestAnimationFrame(tick)
        }

        tick()

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
    // function destroy(){
    //     lenis.destroy()
    // }
    
    // destroy()
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