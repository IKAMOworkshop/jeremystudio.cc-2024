<template>
    <div class="archives-container w-100">
        <div id="archives-experience" class="archives-experience"></div>
        <div class="flex flex-column gap-280">
            
            <ArchivedTitle />
            <ArchivedDate />
            <ArchivedProject />
            <InfiniteScrollProgress />

            <div class="archives-line fill-light-gray"></div>
        </div>
    </div>
</template>

<script setup>
import ArchivedTitle from '../components/archives/ArchivedTitle.vue'
import ArchivedDate from '../components/archives/ArchivedDate.vue'
import ArchivedProject from '../components/archives/ArchivedProject.vue'
import InfiniteScrollProgress from '../components/InfiniteScrollProgress.vue'

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