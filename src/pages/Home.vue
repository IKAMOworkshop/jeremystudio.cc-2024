<template>
    <div>
        <p class="home-intro text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>

        <div class="home-title flex justify-between">
            <div class="flex align-center">
                <h1 class="hero text-light open-tag-offset">{{ openTag }}</h1>
                <h1 class="hero text-light">STRAY</h1>
            </div>
            <h1 class="hero text-light close-tag-offset">/></h1>
        </div>

        <div class="home-description flex justify-between align-center">
            <div class="home-description-container flex flex-column gap-16">
                <p class="caption-bold text-light">BULIDING A COLLECTION OF IMMERSIVE 3D WEB EXPERIENCES WITH THREE.JS AND MORE.</p>
                <div class="flex gap-4">
                    <Tag tag-text="CREATIVE CODING"/>
                </div>
            </div>
            <ProjectButton 
                button-link="/stray"
            />
        </div>
        <InfiniteScrollProgress />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import Tag from '@/components/Tag.vue'
import ProjectButton from '../components/ProjectButton.vue';
import InfiniteScrollProgress from '../components/InfiniteScrollProgress.vue'

let openTag = ref('<')

</script>