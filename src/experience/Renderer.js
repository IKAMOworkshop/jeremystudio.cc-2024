import Experience from "./Experience.js";
import * as THREE from 'three';

export default class Renderer{
    constructor(){
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.homeScene = this.experience.homeScene
        this.aboutScene = this.experience.aboutScene
        this.camera = this.experience.camera

        this.setInstance()
        this.resize()
    };

    setInstance(){
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor(0x0e131c)
        this.instance.setClearAlpha(0)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRation)
    }

    resize(){
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRation)
    }

    renderHomeScene(){
        this.homeElement = document.getElementById('home-experience')

        if(this.homeElement){
            const { left, right, top, bottom, width, height } = this.homeElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.homeInstance.aspect = width / height;
            this.camera.homeInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.homeScene, this.camera.homeInstance )
        }else{
            this.homeElement = document.getElementById('home-experience')
        }
    }

    renderAboutScene(){
        this.aboutElement = document.getElementById('about-experience')

        if(this.aboutElement){
            const { left, right, top, bottom, width, height } = this.aboutElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.aboutInstance.aspect = width / height;
            this.camera.aboutInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.aboutScene, this.camera.aboutInstance )
        }else{
            this.aboutElement = document.getElementById('about-experience')
        }
    }

    update(){
        this.homeCheck = document.getElementById('home-experience')
        this.aboutCheck = document.getElementById('about-experience')
        if(this.homeCheck){
            this.renderHomeScene()
        }

        if(this.aboutCheck){
            this.renderAboutScene()
        }
        // this.instance.render( this.homeScene, this.camera.instance )
    }
}