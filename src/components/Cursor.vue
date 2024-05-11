<template>
    <div>
        <div class="cursor-container">
            <div id="cursor" class="cursor"></div>
        </div>
        <div class="blob-container">
            <div id="blob" class="blob"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const ua = navigator.userAgent
    const customCursor = document.querySelector('#cursor')
    const blob = document.getElementById('blob')

    const anchorTags = document.getElementsByTagName('a')
    const buttonTags = document.getElementsByTagName('button')

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        customCursor.style.display = 'none'
        blob.style.display = 'none'
    }

    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        customCursor.style.display = 'none'
        blob.style.display = 'none'
    }


    const mousePos = {
        x: 0,
        y: 0,
    }

    window.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX
        mousePos.y = e.clientY

        customCursor.style.opacity = 1
        
        customCursor.animate({
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`
        }, {duration: 800, fill: 'forwards'})
        blob.animate({
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`
        }, {duration: 10000, fill: 'forwards'})

    })

    const hoverEffect = () => {
        if(anchorTags){
            for (let i = 0; i < anchorTags.length; i++) {
                anchorTags[i].addEventListener('mouseenter', () => {
                    customCursor.style.transform = 'scale(.2)'
                })
                anchorTags[i].addEventListener('mouseleave', () => {
                    customCursor.style.transform = 'scale(1)'
                })
            }
        }

        if(buttonTags){
            for (let i = 0; i < buttonTags.length; i++) {
                buttonTags[i].addEventListener('mouseenter', () => {
                    customCursor.style.transform = 'scale(.2)'
                })
                buttonTags[i].addEventListener('mouseleave', () => {
                    customCursor.style.transform = 'scale(1)'
                })
            }
        }

        requestAnimationFrame(hoverEffect)
    }

    hoverEffect()
})
</script>