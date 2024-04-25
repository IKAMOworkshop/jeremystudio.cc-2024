<template>

<div class="archives-project-container flex flex-column gap-280">
        <div id="project-list" class="flex flex-column gap-280 align-center">
            
            <div v-for="project in projects" class="archive-project flex justify-between align-center">
                <img v-if="project.type === 'image'" :src="project.asset" alt="" class="archives-image">
                
                <div v-if="project.type === 'video'" class="archives-video-container flex justify-center align-center">
                    <div class="archives-video">
                        <!-- Video -->
                        <video class="archives-video-asset" autoplay muted loop>
                            <source :src="project.asset"  type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="flex flex-column gap-280">
        


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tag from '@/components/Tag.vue'

let openTag = ref("<")

onMounted(() => {
    const titleList = document.getElementsByClassName('archive-project')
    const container = document.getElementById('project-list')
    const scroll = {}
    scroll.scroll = 0
    scroll.scrollTarget = 0
    scroll.scrollPosition = 0

    window.addEventListener('mousewheel', (event) => {
        scroll.scrollTarget = event.wheelDelta
    })

    const scrollEffect = () => {

        scroll.scroll -= (scroll.scroll - scroll.scrollTarget) * .1
        scroll.scrollPosition += scroll.scroll * .6
        scroll.scrollTarget = 0

        if(scroll.scrollPosition <= 1 - container.getBoundingClientRect().height){
            scroll.scrollPosition = 0
        }

        if(scroll.scrollPosition >= 60){
            scroll.scrollPosition = -60
        }

        for(let i = 0; i < titleList.length; i++) {
            titleList[i].style.transform = `translateY(${scroll.scrollPosition}px)`
        }

        requestAnimationFrame(scrollEffect)
    }

    scrollEffect()
})
</script>

<script>
import projectData from '@/components/archives/archivedProject.json'

export default {
data() {
    return {
    projects: projectData,
    };
},
};
</script>