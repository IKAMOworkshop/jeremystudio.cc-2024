<template>
    <div>
        <router-link class="primary-button fill-light caption-bold flex justify-center align-center gap-4" :to="buttonLink">
            {{ buttonText }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 11.134C15.1667 11.5189 15.1667 12.4811 14.5 12.866L11.5 14.5981C10.8333 14.983 10 14.5019 10 13.7321L10 10.2679C10 9.49815 10.8333 9.01702 11.5 9.40192L14.5 11.134Z" fill="rgba(11,13,16,1)"/>
            </svg>
        </router-link>
    </div>
</template>

<script setup>

defineProps({
    buttonText: {
        type: String,
        required: true
    },
    buttonLink: {
        type: String,
        required: true
    }
})

</script>