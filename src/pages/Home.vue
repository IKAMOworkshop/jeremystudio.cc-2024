<template>
    <div>
        <div id="home-experience" class="home-experience"></div>

        <p class="home-intro text-light-gray caption-light intro-copy">I’M A CREATIVE DEVELOPER WHO BUILD DIGITAL EXPERIENCES.</p>

        <InfiniteScrollProgress />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useHead} from '@vueuse/head'

import InfiniteScrollProgress from '../components/InfiniteScrollProgress.vue'

useHead({
    title: 'Jeremy Chang',
    meta: [
        {
            name: 'description',
            content: 'A creative developer who build digital experiences.',
        }
    ]
})

onMounted(() => {

})

</script>