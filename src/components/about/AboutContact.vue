<template>
    <div>

        <button class="about-contact flex flex-column m-200">
            <div class="flex justify-between w-100">
                <div class="flex flex-column w-40">
                    <div class="flex gap-100">
                        <h1 class="large-text text-light">{{ openTag }}</h1>
                        <div class="flex flex-column">
                            <h1 class="large-text text-light">GET</h1>
                            <h1 class="large-text text-light">IN</h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <p class="caption-light text-light-gray">SAW SOMETHING COOL?</p>
                    <p class="caption-light text-light-gray">OR JUST LOOKING FOR A</p>
                    <p class="caption-light text-light-gray">SQUAD TO GAME WITH?</p>
                </div>
            </div>
            <div class="flex flex-column align-end w-100">
                <div class="flex align-end gap-60">
                    <div class="flex flex-column align-end">
                        <h1 class="large-text text-light">TOUCH</h1>
                    </div>
                    <h1 class="large-text text-light">/></h1>
                </div>
            </div>
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const openTag = ref('<')

</script>