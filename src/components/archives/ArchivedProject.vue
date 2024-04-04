<template>
    <div>
        
        <div class="flex justify-between align-center">

            <div class="flex flex-column gap-8">
                <div class="flex gap-4">
                    <h2 class="text-light body-bold">{{ openTag }}</h2>
                    <div class="flex gap-24 align-end w-100">
                        <h2 class="text-light body-bold">IKAMO.ME</h2>
                        <h2 class="text-light body-bold">/></h2>
                    </div>
                </div>
                <div class="flex gap-8">

                    <Tag tag-text="WEB DESIGN"/>

                </div>
            </div>
            
            <img src="/project-thumbnail/nubula.png" alt="" class="archives-image">

            <PrimaryButton 
                button-link="/"
                button-text="View Project"
            />

            <div class="archives-line fill-light-gray"></div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

import PrimaryButton from '@/components/PrimaryButton.vue'
import Tag from '@/components/Tag.vue'

let openTag = ref("<")
</script>