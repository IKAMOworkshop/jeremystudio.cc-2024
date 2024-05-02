import Experience from "./Experience.js";
import * as THREE from 'three';

export default class Renderer{
    constructor(){
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.sizes = this.experience.sizes;
        this.homeScene = this.experience.homeScene;
        this.camera = this.experience.camera;

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
    
            this.camera.instance.aspect = width / height;
            this.camera.instance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.homeScene, this.camera.instance )
        }else{
            this.homeElement = document.getElementById('home-experience')
        }
    }

    update(){
        this.renderHomeScene()
        // this.instance.render( this.homeScene, this.camera.instance )
    }
}