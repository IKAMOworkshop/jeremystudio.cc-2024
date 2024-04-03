<template>
        <div class="project-video-container flex justify-center align-center">
            <div class="project-video-small">
                <!-- Video -->
                <video class="project-video-asset" autoplay muted loop>
                    <source :src="videoSource"  type="video/mp4">
                </video>
            </div>
        </div>
</template>

<script setup>

defineProps({
    videoSource: {
        type: String,
        required: true
    }
})

</script>