<template>
    <div class="about-photo m-800">

        <div class="about-photo-title flex flex-column">
            <div class="flex justify-between">
                <div class="flex flex-column w-40">
                    <div class="flex gap-100">
                        <h1 class="call-to-action text-light">{{ openTag }}</h1>
                        <div class="flex flex-column">
                            <h1 class="call-to-action text-light">I</h1>
                            <h1 class="call-to-action text-light">LOVE</h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column about-hidden">
                    <p class="caption-light text-light-gray">OTHER THAN DESIGN,</p>
                </div>
            </div>
            <div class="flex flex-column align-end">
                <div class="flex align-end gap-60">
                    <div class="about-photo-interest">
                        <div id="move-track" class="about-photo-interest-move">
                            <h1 class="call-to-action text-light interest">GAMES</h1>
                            <h1 class="call-to-action text-light interest">CATS</h1>
                            <h1 class="call-to-action text-light interest">DRAWING</h1>
                        </div>
                    </div>
                    <h1 class="call-to-action text-light">/></h1>
                </div>
            </div>
        </div>
        <div class="trigger-1"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getProject, types, val } from '@theatre/core'

import aboutTwo from '@/assets/animations/aboutTwo.json'

const openTag = ref('<')

onMounted(() => {
    // Theatre JS
    const project = getProject('About Scroll HTML', {state: aboutTwo})
    const sheet = project.sheet('Interest Heading')
    const obj = sheet.object('Heading Container', {
        y: 0
    })

    const headingContainer = document.getElementById('move-track')

    obj.onValuesChange((values) => {
        headingContainer.style.transform = `translateY(${values.y}px)`
    })

    const sequenceLength = val(sheet.sequence.pointer.length)

    document.addEventListener('scroll', () => {
        let totalHeight = document.body.scrollHeight
        let currentDistance = document.documentElement.scrollTop
        let windowHeight = document.documentElement.clientHeight

        let scrollPercentage = (currentDistance / (totalHeight - windowHeight))
        sheet.sequence.position = scrollPercentage * sequenceLength
    })

})

onUnmounted(() => {

})

</script>