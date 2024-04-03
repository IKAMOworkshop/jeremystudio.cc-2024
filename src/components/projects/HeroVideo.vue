<template>
    <div>
        <div class="hero-video-container flex justify-center align-center">
            <div class="hero-video">
                <!-- Video -->
                <video class="hero-video-asset" autoplay muted loop>
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
    }
})

</script>