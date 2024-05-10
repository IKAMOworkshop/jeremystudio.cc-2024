import gsap from "gsap"

import EventEmitter from "./EventEmitter"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

export default class Resource extends EventEmitter{
    constructor(sources){
        super();
        
        this.sources = sources;

        // Setup
        this.items = {}
        this.toLoad = this.sources.length;
        this.loaded = 0;

        // Loaders
        this.setLoader();
        this.startLoading();
    }

    setLoader(){
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.fontLoader = new FontLoader()
    }

    startLoading(){
        // Loade each source
        for(const source of this.sources){
            if(source.type === 'gltfModel'){
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'texture'){
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'font'){
                this.loaders.fontLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file){
        this.items[source.name] = file;
        this.loadProgress = document.getElementById('progress')

        this.loaded++
        this.progress = this.loaded / this.toLoad

        if(this.loadProgress){
            this.loadProgress.style.transform = `scaleX(${this.progress * 100}%)`
        }

        if(this.loaded === this.toLoad){
            setTimeout(() => {
                this.tl = gsap.timeline()

                this.tl.to('#loader-block', {
                    duration: .8,
                    opacity: 0,
                    delay: .2,
                    ease: 'power2.inOut'
                })
                .to('.loader-logo', {
                    duration: .8,
                    scale: 20,
                    rotate: -20,
                    ease: 'power2.inOut',
                }, '-=.8')
            }, 500)

            this.trigger('ready')
        }

    }
};