<template>
    <div>

        <nav class="flex justify-between align-start">

            <div class="flex gap-54">
                <router-link id="home-button" class="text-light caption-bold" to="/">
                    <div class="caption-container">
                                <div class="caption-move">
                                    <p>{{navigationTitle}}</p>
                                    <p>{{ navigationHome }}</p>
                                </div>
                            </div>
                </router-link>
            </div>

            <div class="menu-list">
                <ul class="flex gap-16">

                    <li><router-link class="router-link-text" to="/about">
                        <div class="caption-container">
                            <div class="caption-move">
                                <p>ABOUT</p>
                                <p>ABOUT</p>
                            </div>
                        </div>
                    </router-link></li>

                    <li><router-link class="router-link-text" to="/archives">
                        <div class="caption-container">
                            <div class="caption-move">
                                <p>ARCHIVES</p>
                                <p>ARCHIVES</p>
                            </div>
                        </div>
                    </router-link></li>

                    <!-- Insight Link -->
                    <!-- <li><div class="router-link-text construction-strike" to="/insights">
                        <div class="caption-container">
                            <div class="caption-stop">
                                <p>INSIGHTS</p>
                                <p>INSIGHTS</p>
                            </div>
                        </div>
                    </div></li> -->
                </ul>
                
                <!-- JP Link -->
                <!-- <div class="router-link-text construction-strike">
                    <div class="caption-container">
                            <div class="caption-stop flex align-end flex-column">
                                <p>JP</p>
                                <p>SWITCH</p>
                            </div>
                        </div>
                </div> -->
            </div>

            <button id="menu" class="menu-button">
                <div class="caption-container router-link-text">
                    <div class="caption-move">
                        <p>MENU</p>
                        <p>MENU</p>
                    </div>
                </div>
            </button>
        </nav>

        <div id="nav-menu" class="menu">
            <ul class="flex flex-column gap-16">

                <li><router-link class="menu-text nav-link" to="/about">
                    <div class="menu-container">
                        <div class="menu-move">
                            <p>ABOUT</p>
                            <p>ABOUT</p>
                        </div>
                    </div>
                </router-link></li>

                <li><router-link class="menu-text nav-link" to="/archives">
                    <div class="menu-container">
                        <div class="menu-move">
                            <p>ARCHIVES</p>
                            <p>ARCHIVES</p>
                        </div>
                    </div>
                </router-link></li>

                <!-- Insight Link -->
                <li><div class="menu-text construction-strike" to="/insights">
                    <div class="menu-container">
                        <div class="menu-stop">
                            <p>INSIGHTS</p>
                            <p>INSIGHTS</p>
                        </div>
                    </div>
                </div></li>
                
            </ul>

            <div class="router-link-text construction-strike">
                <div class="caption-container">
                    <div class="caption-stop flex-column">
                        <p>JP</p>
                        <p>SWITCH</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-nav flex justify-between align-center">
            <ul class="flex gap-16">

                <button id="email-button" class="text-light-gray caption-light">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>M.</p>
                            <p>M.</p>
                        </div>
                    </div>
                </button>
                
                <li><a class="text-light-gray caption-light" href="https://github.com/IKAMOworkshop" target="_blank" rel="noopener noreferrer">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>GH.</p>
                            <p>GH.</p>
                        </div>
                    </div>
                </a></li>

                <li><a class="text-light-gray caption-light" href="https://www.linkedin.com/in/jeremystudio/" target="_blank" rel="noopener noreferrer">
                    <div class="caption-container">
                        <div class="caption-move">
                            <p>LI.</p>
                            <p>LI.</p>
                        </div>
                    </div>
                </a></li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap';

let navigationTitle = ref('<JEREMYSTUDIO />')
let navigationHome = ref('<RETURN HOME />')

onMounted(() => {
    const emailButton = document.getElementById('email-button')

    const copyEmail = () => {
        navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
            console.log('Content copied to clipboard')
        },() => {
            console.error('Failed to copy')
        })
    }

    emailButton.addEventListener('click', copyEmail)

    const navMenu = document.getElementById('nav-menu')
    const navButton = document.getElementById('menu')
    const homeButton = document.getElementById('home-button')
    const menuListItems = document.getElementsByClassName('nav-link')

    let openCheck = false

    function toggleMenu() {
        if (openCheck === true) {
            return closeMenu();
        }
        return openMenu()
    }

    function openMenu() {
        navMenu.style.display = "flex";
        openCheck = true
        setTimeout(function(){
            navMenu.style.opacity = "1";
        }, 1)
    }

    function closeMenu() {
        setTimeout(function(){
            navMenu.style.opacity = "0"
        }, 360)
        setTimeout(function(){
            navMenu.style.display = "none"
            openCheck = false
        }, 1000)
    }

    navButton.addEventListener('click', toggleMenu)
    homeButton.addEventListener('click', closeMenu)

    for (let i = 0; i < menuListItems.length; i++){
        menuListItems[i].addEventListener('click', () => {
            setTimeout(function(){
                navMenu.style.opacity = "0"
            }, 360)
            setTimeout(function(){
                navMenu.style.display = "none"
                openCheck = false
            }, 1000)
        })
    }
})

</script>