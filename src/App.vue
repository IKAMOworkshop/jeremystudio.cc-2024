<template>
    <Navigation />
    <!-- TEMP LINK -->
    <div class="temp-link flex flex-column">
        <router-link class="text-light-gray caption-light" to="/stray">STRAY</router-link>
        <router-link class="text-light-gray caption-light" to="/hyper">HYPER</router-link>
        <router-link class="text-light-gray caption-light" to="/transit">TRANSIT</router-link>
        <router-link class="text-light-gray caption-light" to="/arcane">ARCANE</router-link>
        <router-link class="text-light-gray caption-light" to="/nebula">NEBULA</router-link>
        <router-link class="text-light-gray caption-light" to="/angine">ANGINE</router-link>
    </div>
    
    <router-view></router-view>
</template>

<script setup>

import Navigation from './components/Navigation.vue';

</script>