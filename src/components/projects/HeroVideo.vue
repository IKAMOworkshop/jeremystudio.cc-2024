<template>
    <div>
        <div class="hero-video-container flex justify-center align-center">
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