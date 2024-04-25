<template>
    <div class="archives-title-container flex flex-column gap-24">
        <div id="full-list" class="flex flex-column gap-24">
            <div class="archieve-title flex flex-column gap-8" v-for="project in projects">
                <div class="flex gap-4">
                    <h2 class="text-light body-bold">{{ openTag }}</h2>
                    <div class="flex gap-24 align-end w-100">
                        <h2 class="text-light body-bold">{{ project.title }}</h2>
                        <h2 class="text-light body-bold">/></h2>
                    </div>
                </div>
                <div class="flex gap-8">

                    <Tag :tag-text="project.tag"/>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Tag from '@/components/Tag.vue'

let openTag = ref("<")

onMounted(() => {
    const titleList = document.getElementsByClassName('archieve-title')
    const container = document.getElementById('full-list')
    const scroll = {}
    scroll.scroll = 0
    scroll.scrollTarget = 0
    scroll.scrollPosition = 0

    window.addEventListener('mousewheel', (event) => {
        scroll.scrollTarget = event.wheelDelta
    })

    const scrollEffect = () => {

        scroll.scroll -= (scroll.scroll - scroll.scrollTarget) * .1
        scroll.scrollPosition += scroll.scroll * .5
        scroll.scrollTarget = 0

        if(scroll.scrollPosition <= 1 - container.getBoundingClientRect().height){
            scroll.scrollPosition = 0
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