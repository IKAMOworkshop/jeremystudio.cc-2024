<template>
    <div>
        <router-link to="/">

            <div class="flex flex-column gap-24">

                <img :src="thumbnail" alt="" class="project-image">

                <div class="flex flex-column gap-16">

                    <div class="flex gap-36 w-164">
                        <h2 class="text-light title-bold">{{ openTag }}</h2>
                        <div class="flex gap-164 align-end justify-between w-100">
                            <h2 class="text-light title-bold">{{ title }}</h2>
                            <h2 class="text-light title-bold">/></h2>
                        </div>
                    </div>

                    <div class="insights-tag-group flex gap-4">
                        <Tag :tag-text="tagText"/>
                    </div>
                </div>
            </div>

        </router-link>

    </div>
</template>

<script setup>
import { ref } from 'vue'

import Tag from '@/components/Tag.vue'

let openTag = ref('<')

defineProps({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tagText:{
        type: String,
        required: true
    }

})
</script>