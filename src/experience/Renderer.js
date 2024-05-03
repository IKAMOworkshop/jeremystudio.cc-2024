import Experience from "./Experience.js";
import * as THREE from 'three';

export default class Renderer{
    constructor(){
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes

        this.homeScene = this.experience.homeScene
        this.aboutScene = this.experience.aboutScene
        this.archivesScene = this.experience.archivesScene
        this.strayScene = this.experience.strayScene
        this.hyperScene = this.experience.hyperScene
        this.transitScene = this.experience.transitScene
        this.arcaneScene = this.experience.arcaneScene
        this.nebulaScene = this.experience.nebulaScene
        this.angineScene = this.experience.angineScene

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

    renderArchivesScene(){
        this.archivesElement = document.getElementById('archives-experience')

        if(this.archivesElement){
            const { left, right, top, bottom, width, height } = this.archivesElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.archivesInstance.aspect = width / height;
            this.camera.archivesInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.archivesScene, this.camera.archivesInstance )
        }else{
            this.archivesElement = document.getElementById('archives-experience')
        }
    }

    renderStrayScene(){
        this.strayElement = document.getElementById('stray-experience')

        if(this.strayElement){
            const { left, right, top, bottom, width, height } = this.strayElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.strayInstance.aspect = width / height;
            this.camera.strayInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.strayScene, this.camera.strayInstance )
        }else{
            this.strayElement = document.getElementById('stray-experience')
        }
    }

    renderHyperScene(){
        this.hyperElement = document.getElementById('hyper-experience')

        if(this.hyperElement){
            const { left, right, top, bottom, width, height } = this.hyperElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.hyperInstance.aspect = width / height;
            this.camera.hyperInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.hyperScene, this.camera.hyperInstance )
        }else{
            this.hyperElement = document.getElementById('hyper-experience')
        }
    }

    renderTransitScene(){
        this.transitElement = document.getElementById('transit-experience')

        if(this.transitElement){
            const { left, right, top, bottom, width, height } = this.transitElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.transitInstance.aspect = width / height;
            this.camera.transitInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.transitScene, this.camera.transitInstance )
        }else{
            this.transitElement = document.getElementById('transit-experience')
        }
    }

    renderArcaneScene(){
        this.arcaneElement = document.getElementById('arcane-experience')

        if(this.arcaneElement){
            const { left, right, top, bottom, width, height } = this.arcaneElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.arcaneInstance.aspect = width / height;
            this.camera.arcaneInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.arcaneScene, this.camera.arcaneInstance )
        }else{
            this.arcaneElement = document.getElementById('arcane-experience')
        }
    }

    renderNebulaScene(){
        this.nebulaElement = document.getElementById('nebula-experience')

        if(this.nebulaElement){
            const { left, right, top, bottom, width, height } = this.nebulaElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.nebulaInstance.aspect = width / height;
            this.camera.nebulaInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.nebulaScene, this.camera.nebulaInstance )
        }else{
            this.nebulaElement = document.getElementById('nebula-experience')
        }
    }

    renderAngineScene(){
        this.angineElement = document.getElementById('angine-experience')

        if(this.angineElement){
            const { left, right, top, bottom, width, height } = this.angineElement.getBoundingClientRect()
    
            const isOffscreen =
            bottom < 0 ||
            top > this.instance.domElement.clientHeight ||
            right < 0 ||
            left > this.instance.domElement.clientWidth
    
            if ( isOffscreen ) {
    
                return
    
            }
    
            this.camera.angineInstance.aspect = width / height;
            this.camera.angineInstance.updateProjectionMatrix()
    
            const positiveYUpBottom = this.instance.domElement.clientHeight - bottom
            this.instance.setScissor( left, positiveYUpBottom, width, height )
            this.instance.setViewport( left, positiveYUpBottom, width, height )
    
            this.instance.render( this.angineScene, this.camera.angineInstance )
        }else{
            this.angineElement = document.getElementById('angine-experience')
        }
    }

    update(){
        this.homeCheck = document.getElementById('home-experience')
        this.aboutCheck = document.getElementById('about-experience')
        this.archivesCheck = document.getElementById('archives-experience')
        this.strayCheck = document.getElementById('stray-experience')
        this.hyperCheck = document.getElementById('hyper-experience')
        this.transitCheck = document.getElementById('transit-experience')
        this.arcaneCheck = document.getElementById('arcane-experience')
        this.nebulaCheck = document.getElementById('nebula-experience')
        this.angineCheck = document.getElementById('angine-experience')


        if(this.homeCheck){
            this.renderHomeScene()
        }

        if(this.aboutCheck){
            this.renderAboutScene()
        }
        if(this.archivesCheck){
            this.renderArchivesScene()
        }
        if(this.strayCheck){
            this.renderStrayScene()
        }
        if(this.hyperCheck){
            this.renderHyperScene()
        }
        if(this.transitCheck){
            this.renderTransitScene()
        }
        if(this.arcaneCheck){
            this.renderArcaneScene()
        }
        if(this.nebulaCheck){
            this.renderNebulaScene()
        }
        if(this.angineCheck){
            this.renderAngineScene()
        }
    }
}