<template>
    <div class="button-wrapper">
        <router-link id="button" class="project-button caption-bold flex justify-center align-center gap-4" :to="buttonLink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="button-icon" d="M14.5 11.134C15.1667 11.5189 15.1667 12.4811 14.5 12.866L11.5 14.5981C10.8333 14.983 10 14.5019 10 13.7321L10 10.2679C10 9.49815 10.8333 9.01702 11.5 9.40192L14.5 11.134Z" fill="rgba(11,13,16,1)"/>
            </svg>
            <span id="hover-effect" class="button-hover"></span>
            <span class="base-button-fill"></span>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
    
defineProps({
    buttonLink: {
        type: String,
        required: true
    }
})

onMounted(() => {
    const button = document.getElementById('button')
    const hoverEffect = document.getElementById('hover-effect')

    let reletivePos = {}
    reletivePos.relX = 0
    reletivePos.relY = 0
    
    button.addEventListener('mouseenter', (e) => {
        let parentOffset = button.getBoundingClientRect()

        reletivePos.relX = e.pageX - parentOffset.left
        reletivePos.relY = e.pageY - (parentOffset.top + window.scrollY)

        hoverEffect.style.left = reletivePos.relX + 'px'
        hoverEffect.style.top = reletivePos.relY + 'px'
    })

    button.addEventListener('mouseout', (e) => {
        let parentOffset = button.getBoundingClientRect()

        reletivePos.relX = e.pageX - parentOffset.left
        reletivePos.relY = e.pageY - (parentOffset.top + window.scrollY)

        hoverEffect.style.left = reletivePos.relX + 'px'
        hoverEffect.style.top = reletivePos.relY + 'px'
    })
})

</script>