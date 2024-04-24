<template>
    <div class="flex flex-column gap-24">
        <div class="flex flex-column gap-8" v-for="project in projects">
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
</template>

<script setup>
import { ref } from 'vue'
import Tag from '@/components/Tag.vue'

let openTag = ref("<")
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