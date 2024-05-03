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
    let scrollPosition = 0
    scrollProgress.style.transform = 'translateX(-20px)'

    document.addEventListener('mousewheel', (e) => {
        let scrollTarget = e.deltaY

        if (scrollTarget > 100){
            scrollTarget = 100
        }else if (scrollTarget < -100){
            scrollTarget = -100
        }

        totalScroll += scrollTarget

        let finalScroll = (totalScroll / scrollTarget) * 2

        const lerp = () => {
            finalScroll -= (finalScroll - (scrollTarget * .01)) * .1
            scrollPosition += finalScroll * .001
            scrollTarget = 0

            scrollProgress.style.transform = `translateX(${Math.abs(scrollPosition % 100) - 20}px)`


            requestAnimationFrame(lerp)
        }
        lerp()
        
    })
})
</script>