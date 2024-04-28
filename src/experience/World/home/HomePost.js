import * as THREE from 'three'
import Experience from "../../Experience";

// Postprocessing
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js'

export default class HomePost{
    constructor(){
        // Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.renderer = this.experience.renderer

        this.initPost()
        this.update()
    }

    initPost(){
        this.composer = new EffectComposer(this.renderer.instance)
        this.composer.addPass(new RenderPass(this.scene, this.camera.instance))

        const rgbShifter = new ShaderPass(RGBShiftShader)
        rgbShifter.uniforms['amount'].value = 0.015
        this.composer.addPass(rgbShifter)
    }

    update(){
        this.composer.render()
    }
}