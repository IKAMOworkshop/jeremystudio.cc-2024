<template>
    <div class="archives-container w-100">
        <div class="flex flex-column gap-280">

            <div class="archives-title-container">
                <ArchivedTitle />
            </div>

            <div class="archives-line fill-light-gray"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import ArchivedTitle from '../components/archives/ArchivedTitle.vue'
import ArchivedProject from '../components/archives/ArchivedProject.vue'

import Lenis from '@studio-freight/lenis'

// const lenis = new Lenis({
//     smooth: true,
//     infinite: true,
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// onUnmounted(() => {
//     function destroy(){
//         lenis.destroy()
//     }
    
//     destroy()
// })

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