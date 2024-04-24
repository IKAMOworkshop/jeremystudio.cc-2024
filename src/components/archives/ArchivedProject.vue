<template>
    <div class="flex flex-column gap-280">
        
        <div v-for="project in projects" class="flex justify-between align-center">

            
            <img v-if="project.type === 'image'" :src="project.asset" alt="" class="archives-image">
            
            <div v-if="project.type === 'video'" class="archives-video-container flex justify-center align-center">
                <div class="archives-video">
                    <!-- Video -->
                    <video class="archives-video-asset" autoplay muted loop>
                        <source :src="project.asset"  type="video/mp4">
                    </video>
                </div>
            </div>


            <div class="flex flex-column align-end gap-4">
                    <h2 class="text-light-gray caption-small-bold">DATE</h2>
                    <p class="text-light body-bold data-props">{{ project.date }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

let openTag = ref("<")
let assetType ='video'
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