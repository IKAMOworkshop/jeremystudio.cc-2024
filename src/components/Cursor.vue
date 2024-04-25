<template>
    <div>
        <div class="cursor-container">
            <div id="cursor" class="cursor"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const cursor = document.getElementById('cursor')

    const anchorTags = document.getElementsByTagName('a')
    const buttonTags = document.getElementsByTagName('button')

    const mousePos = {
        x: 0,
        y: 0,
    }

    window.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX
        mousePos.y = e.clientY
        
        cursor.animate({
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`
        }, {duration: 800, fill: 'forwards'})

    })

    for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(.5)'
        })
        anchorTags[i].addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)'
        })
    }

    for (let i = 0; i < buttonTags.length; i++) {
        buttonTags[i].addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(.5)'
        })
        buttonTags[i].addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)'
        })
    }
})
</script>