<template>
    <div>
        <div class="flex flex-column">
            <p v-if="activeContent === 1" :style="{color: activeText}" class="caption-small-light">{{ contentOne }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentOne }}</p>

            <p v-if="activeContent === 2" :style="{color: activeText}" class="caption-small-light">{{ contentTwo }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentTwo }}</p>

            <p v-if="activeContent === 3" :style="{color: activeText}" class="caption-small-light">{{ contentThree }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentThree }}</p>

            <p v-if="activeContent === 4" :style="{color: activeText}" class="caption-small-light">{{ contentFour }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentFour }}</p>

            <p v-if="activeContent === 5" :style="{color: activeText}" class="caption-small-light">{{ contentFive }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentFive }}</p>

            <p v-if="activeContent === 6" :style="{color: activeText}" class="caption-small-light">{{ contentSix }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentSix }}</p>

            <p v-if="activeContent === 7" :style="{color: activeText}" class="caption-small-light">{{ contentSeven }}</p>
            <p v-else :style="{color: inactiveText}" class="caption-small-light">{{ contentSeven }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeText = ref('rgba(255,255,255,1)')
const inactiveText = ref('rgba(255,255,255,.5')

defineProps({
    contentOne: {
        type: String,
    },
    contentTwo:{
        type: String,
    },
    contentThree:{
        type: String,
    },
    contentFour:{
        type: String,
    },
    contentFive:{
        type: String,
    },
    contentSix:{
        type: String,
    },
    contentSeven:{
        type: String,
    },
    activeContent:{
        type: Number,
        required: true,
    },
})

</script>