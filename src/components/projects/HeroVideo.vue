<template>
    <div>
        <div id="video-container" class="hero-video-container flex justify-center align-center">
            <div class="hero-video">
                <!-- Video -->
                <video :id="videoName" class="hero-video-asset" autoplay muted loop>
                    <source :src="videoSource"  type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const videoContainer = document.getElementById('video-container')
    const cursor = {}
    cursor.x = 0
    cursor.y = 0
    cursor.mouseX = 0
    cursor.mouseY = 0

    window.addEventListener('mousemove', (e) => {
        cursor.x = e.clientX / window.innerWidth - .5
        cursor.y = e.clientY / window.innerHeight - .5
    })

    const moveFunction = () => {
        cursor.mouseX = (1 - .05) * cursor.mouseX + .05 * cursor.x
        cursor.mouseY = (1 - .05) * cursor.mouseY + .05 * cursor.y

        videoContainer.style.transform = `translate(${cursor.mouseX * 2}%, ${cursor.mouseY* 2}%)`

        requestAnimationFrame(moveFunction)
    }

    moveFunction()

})

defineProps({
    videoSource: {
        type: String,
        required: true
    },
    videoName: {
        type: String,
        required: true
    }
})

</script>