<template>
    <div>
        <div id="home-experience" class="home-experience"></div>

        <p class="home-intro text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>

        <!-- <div class="home-title flex justify-between">
            <div class="flex align-center">
                <h1 class="hero text-light open-tag-offset">{{ openTag }}</h1>
                <div class="project-titles">
                    <div id="title-list">
                        <h1 v-for="project in projects" class="hero text-light titles">{{ project.title }}</h1>
                    </div>
                </div>
            </div>
            <h1 class="hero text-light close-tag-offset">/></h1>
        </div> -->

        <div class="home-description flex justify-end">
            <!-- <div class="home-description-container flex flex-column gap-16">
                <p class="caption-bold text-light">BULIDING A COLLECTION OF IMMERSIVE 3D WEB EXPERIENCES WITH THREE.JS AND MORE.</p>
                <div class="flex gap-4">
                    <Tag tag-text="CREATIVE CODING"/>
                </div>
            </div> -->
            <ProjectButton 
                button-link="/stray"
            />
        </div>
        <InfiniteScrollProgress />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Tag from '@/components/Tag.vue'
import ProjectButton from '../components/ProjectButton.vue';
import InfiniteScrollProgress from '../components/InfiniteScrollProgress.vue'

let openTag = ref('<')

onMounted(() => {
    // const titleList = document.getElementsByClassName('titles')
    // const container = document.getElementById('title-list')
    // const scroll = {}
    // scroll.scroll = 0
    // scroll.scrollTarget = 0
    // scroll.scrollPosition = 0

    // window.addEventListener('mousewheel', (event) => {
    //     scroll.scrollTarget = event.wheelDelta
    // })

    // const scrollEffect = () => {
    //     scroll.scroll -= (scroll.scroll - scroll.scrollTarget) * .1
    //     scroll.scrollPosition += scroll.scroll * .2
    //     scroll.scrollTarget = 0

    //     for(let i = 0 ; i < titleList.length ; i++){
    //         const titleHeight = titleList[i].getBoundingClientRect().height

    //         scroll.finalScroll = ((scroll.scrollPosition) % (container.getBoundingClientRect().height - titleHeight))
    //         titleList[i].style.translate = `0px ${scroll.finalScroll}px`

    //         let rounded = 0

    //         if(scroll.finalScroll % titleHeight > ((titleHeight / 2) * -1)){
    //             rounded = Math.ceil(scroll.finalScroll / titleHeight) * titleHeight
    //             // console.log(rounded)
    //         }else if(scroll.finalScroll % titleHeight < ((titleHeight / 2) * -1)){
    //             rounded = Math.floor(scroll.finalScroll / titleHeight) * titleHeight
    //             // console.log(rounded)
    //         }

    //         let diff = (rounded - scroll.finalScroll)
    //         scroll.finalScroll += diff * .8

    //         titleList[i].style.translate = `0px ${scroll.finalScroll}px`
    //     }


    //     requestAnimationFrame(scrollEffect)
    // }

    // scrollEffect()
})

</script>

<script>
import mainProject from '@/dataset/mainProjects.json'

export default {
data() {
    return {
    projects: mainProject,
    };
},
};
</script>