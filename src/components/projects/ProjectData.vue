<template>
    <div>
        <div id="data-container" class="data-container flex justify-between align-center">

            <div class="project-descriptions flex flex-column gap-24">
                <h3 :style="{color: titleColor}" class="caption-wide">{{ projectType }}</h3>
                <p class="text-light body-light">{{ projectDescription }}</p>
            </div>

            <div class="project-datas flex flex-column gap-48">
                
                <div class="flex flex-column align-end gap-4">
                    <h2 class="text-light-gray caption-small-bold">TIMELINE</h2>
                    <p class="text-light caption-small-light data-props">{{ projectTiming }}</p>
                </div>

                <div class="flex flex-column align-end gap-4">
                    <h2 class="text-light-gray caption-small-bold">MEMBERS</h2>
                    <p class="text-light caption-small-light data-props">
                        {{ memberOne }}
                        <br />{{ memberTwo }}
                    </p>
                </div>

                <div class="flex flex-column align-end gap-4">
                    <h2 class="text-light-gray caption-small-bold">TECHNOLOGIES</h2>
                    <div class="flex flex-column">
                        <p class="text-light caption-small-light data-props">{{ techOne }}</p>
                        <p class="text-light caption-small-light data-props">{{ techTwo }}</p>
                        <p class="text-light caption-small-light data-props">{{ techThree }}</p>
                        <p class="text-light caption-small-light data-props">{{ techFour }}</p>
                        <p class="text-light caption-small-light data-props">{{ techFive }}</p>
                        <p class="text-light caption-small-light data-props">{{ techSix }}</p>
                    </div>
                </div>

                <div class="flex flex-column align-end gap-4">
                    <h2 class="text-light-gray caption-small-bold">SKILLS</h2>
                    <div class="flex flex-column">
                        <p class="text-light caption-small-light data-props">{{ skillOne }}</p>
                        <p class="text-light caption-small-light data-props">{{ skillTwo }}</p>
                        <p class="text-light caption-small-light data-props">{{ skillThree }}</p>
                        <p class="text-light caption-small-light data-props">{{ skillFour }}</p>
                        <p class="text-light caption-small-light data-props">{{ skillFive }}</p>
                        <p class="text-light caption-small-light data-props">{{ skillSix }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue'

onMounted(() => {
    const dataContainer = document.getElementById('data-container')
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

        dataContainer.style.transform = `translate(${cursor.mouseX * 5}%, ${cursor.mouseY * 5}%)`

        requestAnimationFrame(moveFunction)
    }

    moveFunction()

})

defineProps({
    titleColor: {
        type: String,
        required: true
    },
    projectType:{
        type: String,
        required: true
    },
    projectDescription:{
        type: String,
        required: true
    },
    projectTiming:{
        type: String,
        required: true
    },
    memberOne:{
        type: String,
        required: true
    },
    memberTwo:{
        type: String,
    },
    techOne:{
        type: String,
    },
    techTwo:{
        type: String,
    },
    techThree:{
        type: String,
    },
    techFour:{
        type: String,
    },
    techFive:{
        type: String,
    },
    techSix:{
        type: String,
    },
    skillOne:{
        type: String,
    },
    skillTwo:{
        type: String,
    },
    skillThree:{
        type: String,
    },
    skillFour:{
        type: String,
    },
    skillFive:{
        type: String,
    },
    skillSix:{
        type: String,
    },
})

</script>