<template>
    <div>


            <div class="flex gap-48">
                <h2 v-if="openTagShow" class="text-light title-bold">{{ openTag }}</h2>
                <div class="flex flex-column gap-48 main-content">

                    <div v-if="titleShow" class="flex gap-48 align-end">
                        <h2 class="text-light title-bold">{{ title }}</h2>
                        <h2 class="text-light title-bold">{{ closingTag }}</h2>
                    </div>

                    <p v-if="descriptionShow" class="text-light-gray caption-light">{{ description }}</p>
                    
                    <div v-if="captionShow" class="flex flex-column">
                        <p class="text-light-gray caption-small-light">{{ smallTextOne }}</p>
                        <p class="text-light-gray caption-small-light">{{ smallTextTwo }}</p>
                    </div>

                </div>
            </div>
    </div>
</template>

<script setup>

defineProps({
    openTag: {
        type: String,
    },
    title:{
        type: String,
    },
    closingTag:{
        type: String,
    },
    description:{
        type: String,
    },
    smallTextOne:{
        type: String,
    },
    smallTextTwo:{
        type: String,
    },
    openTagShow:{
        type: Boolean,
    },
    titleShow:{
        type: Boolean,
    },
    descriptionShow:{
        type: Boolean,
    },
    captionShow:{
        type: Boolean,
    },
})

</script>