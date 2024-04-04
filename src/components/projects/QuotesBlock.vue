<template>
    <div class="flex flex-column gap-24">

            <p :style="{color: numberColor}" class="text-light-gray caption-wide quote-number">{{ smallText }}</p>
            <div class="flex gap-48">
                <h2 class="text-light-gray paragraph-title">"</h2>
                <div class="flex flex-column gap-48 main-content">

                    <div class="flex gap-48 align-end">
                        <h2 class="text-light title-bold">{{ quote }}</h2>
                        <h2 class="text-light-gray paragraph-title">"</h2>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>

defineProps({
    quote:{
        type: String,
    },
    smallText:{
        type: String,
    },
    numberColor:{
        type: String,
    }
})

</script>