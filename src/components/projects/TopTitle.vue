<template>
    <div>
        <div class="flex gap-24 project-title">
            <h1 class="caption-bold text-light">{{ projectTitle }}</h1>
            <h1 class="caption-bold text-light">/></h1>
        </div>
    </div>
</template>

<script setup>

defineProps({
    projectTitle: {
        type: String,
        required: true
    }
})

</script>