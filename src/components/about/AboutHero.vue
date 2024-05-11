<template>
    <div class="w-100">

        <div class="flex flex-column">

            <div class="flex justify-between">
                <div class="flex flex-column w-40">
                    <div class="flex gap-100">
                        <h1 class="large-text text-light">{{ openTag }}</h1>
                        <div class="flex flex-column align-end">
                            <h1 class="large-text text-light">I</h1>
                            <h1 class="large-text text-light">MAKE</h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column about-hidden">
                    <p class="caption-bold text-light">I AM A CREATIVE DEVELOPER,</p>
                    <p class="caption-bold text-light">A GAMER, AND AN ASPIRING</p>
                    <p class="caption-bold text-light">ILLUSTARTOR.</p>
                </div>
            </div>

            <div class="flex flex-column align-end">
                <div class="flex align-end gap-60">
                    <div class="flex flex-column align-end">
                        <h1 class="large-text text-light">FUN</h1>
                        <h1 class="large-text text-light">THINGS</h1>
                    </div>
                    <h1 class="large-text text-light">/></h1>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const openTag = ref('<')

</script>