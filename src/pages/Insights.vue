<template>
    <div>
        <ScrollProgress />
        
        <!-- Header -->
        <div class="insights-top-container flex justify-between">

            <div class="flex gap-60">
                <h2 class="text-light call-to-action">{{ openTag }}</h2>
                <div class="flex gap-100 align-end">
                    <h2 class="text-light call-to-action">
                        THOUGHTS
                        <br />IN
                        <br />MY MIND
                    </h2>
                    <h2 class="text-light call-to-action">/></h2>
                </div>
            </div>

            <div class="flex flex-column justify-between align-end">

                <div class="flex flex-column gap-24 insights-top-description">
                    <h2 class="text-light caption-bold">APOLOGIES, BUT MY JAPANESE ARE NOT YET GOOD ENOUGH TO TRANSLATE THESE.</h2>
                    <p class="text-light-gray caption-small-light">IT’S VERY HARD.</p>
                </div>

                <div class="flex gap-8">

                    <Tag tag-text="DESIGN"/>
                    <Tag tag-text="DEV"/>
                    <Tag tag-text="CAREER"/>

                </div>
            </div>

        </div>

        <!-- Content Section -->
        <div class="section-container flex gap-60">

            <div class="grid gap-60">
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/01.png"
                    title="TRANSITIONING FROM PURE DESIGN TO A CREATIVE DEVELOPER."
                    tag-text="CAREER"
                />
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/02.png"
                    title="EXPANDING MY DESIGN PRACTICE BEYOND JUST SCREEN DESIGN."
                    tag-text="DESIGN"
                />
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/02.png"
                    title="EXPANDING MY DESIGN PRACTICE BEYOND JUST SCREEN DESIGN."
                    tag-text="DESIGN"
                />
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/01.png"
                    title="TRANSITIONING FROM PURE DESIGN TO A CREATIVE DEVELOPER."
                    tag-text="CAREER"
                />
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/01.png"
                    title="TRANSITIONING FROM PURE DESIGN TO A CREATIVE DEVELOPER."
                    tag-text="CAREER"
                />
                <ArticleThumbnail 
                    thumbnail="/mock-thumbnail/02.png"
                    title="EXPANDING MY DESIGN PRACTICE BEYOND JUST SCREEN DESIGN."
                    tag-text="DESIGN"
                />
            </div>
        </div>
        
        <ProjectFooter />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import Tag from '@/components/Tag.vue'
import ArticleThumbnail from '@/components/insights/ArticleThumbnail.vue'
import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

let openTag = ref('<')
</script>