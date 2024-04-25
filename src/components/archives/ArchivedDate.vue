<template>
    <div class="archives-date-container flex flex-column gap-24">
        <div class="flex flex-column gap-24">
            <div class="flex flex-column align-end gap-4">
                <h2 class="text-light-gray caption-small-light">TIMELINE</h2>
                <div class="archive-date-box">
                    <div id="date-list" class="flex flex-column gap-4">
                        <p class="archive-date text-light body-bold data-props" v-for="project in projects">{{ project.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    const dateList = document.getElementsByClassName('archive-date')
    const dateContainer = document.getElementById('date-list')
    const scroll = {}
    scroll.scroll = 0
    scroll.scrollTarget = 0
    scroll.scrollPosition = 0

    window.addEventListener('mousewheel', (event) => {
        scroll.scrollTarget = event.wheelDelta
    })

    const scrollEffect = () => {

        scroll.scroll -= (scroll.scroll - scroll.scrollTarget) * .1
        scroll.scrollPosition += scroll.scroll * .16
        scroll.scrollTarget = 0

        if(scroll.scrollPosition <= 1 - dateContainer.getBoundingClientRect().height){
            scroll.scrollPosition = 0
        }

        for(let i = 0; i < dateList.length; i++) {
            dateList[i].style.transform = `translateY(${scroll.scrollPosition}px)`
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