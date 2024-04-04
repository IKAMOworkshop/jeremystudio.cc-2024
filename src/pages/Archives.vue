<template>
    <div class="archives-container w-100">
        <div class="flex flex-column gap-164">
            <ArchivedProject />
            <ArchivedProject />
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

import ArchivedProject from '../components/archives/ArchivedProject.vue'

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    smooth: true,
    infinite: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

onUnmounted(() => {
    function destroy(){
        lenis.destroy()
    }
    
    destroy()
})

</script>