<template>
    <div class="about-photo m-600">

        <div class="about-photo-title flex flex-column">
            <div class="flex justify-between">
                <div class="flex flex-column w-40">
                    <div class="flex gap-100">
                        <h1 class="call-to-action text-light">{{ openTag }}</h1>
                        <div class="flex flex-column">
                            <h1 class="call-to-action text-light">I</h1>
                            <h1 class="call-to-action text-light">LOVE</h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column">
                    <p class="caption-light text-light-gray">OTHER THAN DESIGN,</p>
                </div>
            </div>
            <div class="flex flex-column align-end">
                <div class="flex align-end gap-60">
                    <div class="about-photo-interest flex flex-column align-end">
                        <div id="move-track" class="about-photo-interest-move flex flex-column align-end">
                            <h1 class="call-to-action text-light interest">GAMES</h1>
                            <h1 class="call-to-action text-light interest">CATS</h1>
                            <h1 class="call-to-action text-light interest">DRAWING</h1>
                        </div>
                    </div>
                    <h1 class="call-to-action text-light">/></h1>
                </div>
            </div>
        </div>
        <div class="trigger-1"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const openTag = ref('<')

const ctx = gsap.context(() => {})

onMounted(() => {
    // ctx.add(() => {
    //     const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.trigger-1',
    //         start: 'top center',
    //         end: 'bottom center',
    //         markers: true,
    //         scrub: 1
    //     }
    // })

    // tl  .to('#move-track', {
    //         y: -80,
    //     })
    //     .to('#move-track', {
    //         y: -160,
    //         delay: 1
    //     })
    // })

})

onUnmounted(() => {
    ctx.revert()
})

</script>