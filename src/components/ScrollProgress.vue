<template>
    <div>
        <div class="progress-bar">
            <div id="scroll-progress" class="progress"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const scrollProgress = document.getElementById('scroll-progress')

    
    document.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight
        const currentDistance = document.documentElement.scrollTop
        const windowHeight = document.documentElement.clientHeight

        const scrollPercentage = (currentDistance / (totalHeight - windowHeight)) * 100

        scrollProgress.style.transform = `translateX(${scrollPercentage * .6}px)`
    })
})
</script>