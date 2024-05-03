<template>
    <div>
        <!-- <ScrollProgress /> -->

        <!-- Placeholder -->
        <div class="insights-placeholder-container flex justify-center align center">
            <div class="insights-placeholder flex flex-column justify-center">
                <div class="flex justify-between w-100 layer-1">
                    <div class="flex flex-column w-40 layer-2">
                        <div class="flex gap-100 layer-3">
                            <h1 class="large-text text-light">{{ openTag }}</h1>
                            <div class="flex flex-column layer-4">
                                <h1 class="large-text text-light">PAGE</h1>
                                <h1 class="large-text text-light">COMING</h1>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column">
                        <p class="caption-light text-light-gray">ON NO!</p>
                        <p class="caption-light text-light-gray">I'M WORKING ON IT,</p>
                        <p class="caption-light text-light-gray">SIT TIGHT!</p>
                    </div>
                </div>
                <div class="flex flex-column align-end w-100 layer-1">
                    <div class="flex align-end gap-60 layer-2">
                        <div class="about-contact-email flex flex-column align-end">
                            <h1 class="large-text text-light">SOON</h1>
                        </div>
                        <h1 class="large-text text-light">/></h1>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Header -->
        <!-- <div class="insights-top-container flex justify-between">

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

        </div> -->

        <!-- Content Section -->
        <!-- <div class="section-container flex gap-60">

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
        
        <ProjectFooter /> -->
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