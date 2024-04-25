<template>
    <div class="archives-container w-100">
        <div class="flex flex-column gap-280">
            
            <ArchivedTitle />
            <ArchivedDate />

            <div class="archives-line fill-light-gray"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import ArchivedTitle from '../components/archives/ArchivedTitle.vue'
import ArchivedDate from '../components/archives/ArchivedDate.vue'



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