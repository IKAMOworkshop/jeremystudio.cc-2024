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