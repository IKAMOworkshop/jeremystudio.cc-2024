<template>
    <div class="archives-container w-100">
        <div id="archives-experience" class="archives-experience"></div>
        <InfiniteScrollProgress />
    </div>
</template>

<script setup>
import InfiniteScrollProgress from '../components/InfiniteScrollProgress.vue'

import {useHead} from '@vueuse/head'

useHead({
    title: 'Jeremy Chang | Archives',
    meta: [
        {
            name: 'description',
            content: 'A collection of my previous design works.',
        }
    ]
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