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
    let totalScroll = 0
    scrollProgress.style.transform = 'translateX(-20px)'

    document.addEventListener('mousewheel', (e) => {
        totalScroll += e.wheelDelta

        let finalScroll = totalScroll / e.wheelDelta
        console.log()
        scrollProgress.style.transform = `translateX(${Math.abs(finalScroll % 100) - 20}px)`
        
    })
})
</script>