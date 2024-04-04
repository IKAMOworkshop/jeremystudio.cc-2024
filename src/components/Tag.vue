<template>
    <div>
        <div class="tag text-light">
            <p class="caption-small-light text-light">{{ tagText }}</p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    tagText: {
        type: String,
        required: true
    }
})

</script>