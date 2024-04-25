<template>
    <div class="flex justify-center align-end">

        <div :style="{backgroundImage: 'url(' + backgroundImage + ')'}" class="next-project-container">
            <div class="next-project-overlay flex justify-center align-center">
                <div class="flex gap-60">
                    <h2 class="text-light call-to-action">{{ openTag }}</h2>
                    <div class="flex gap-100 align-end">
                        <h2 class="text-light call-to-action">
                            {{ nextProjectTitle }}
                            <br /><span class="spacer-text">:D</span>
                        </h2>
                        <h2 class="text-light call-to-action">/></h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="next-project-link">
            <PrimaryButton
                :button-link="nextProjectLink"
                :button-text="buttonText"
            />
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

import PrimaryButton from '@/components/PrimaryButton.vue'

let openTag = ref('<')

defineProps({
    backgroundImage: {
        type: String,
        required: true
    },
    nextProjectTitle:{
        type: String,
        required: true
    },
    nextProjectLink:{
        type: String,
        required: true
    },
    buttonText:{
        type: String,
        required: true
    }
})
</script>