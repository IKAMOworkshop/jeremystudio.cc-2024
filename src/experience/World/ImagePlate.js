import Experience from "../Experience";
import * as THREE from 'three'

import plateVertex from '../shaders/thumbnail/vertex.glsl'
import plateFragment from '../shaders/thumbnail/fragment.glsl'


export default class ImagePlate {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.index = this.experience.thumbnailIndex

        this.setTexture()
        this.setModel()
        this.update()
    }

    setTexture() {
        this.thumbnailTextures = []

        this.strayImage = this.resources.items.stray
        this.hyperImage = this.resources.items.hyper
        this.transitImage = this.resources.items.transit
        this.arcaneImage = this.resources.items.arcane
        this.nebulaImage = this.resources.items.nebula
        this.angineImage = this.resources.items.angine

        this.thumbnailTextures.push(this.strayImage, this.hyperImage, this.transitImage, this,this.arcaneImage, this.nebulaImage, this.angineImage)
    }

    setModel(){
        this.geometry = new THREE.PlaneGeometry(10, 5, 64, 64)
        this.material = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTime: new THREE.Uniform(0),
                uTexture: new THREE.Uniform(this.thumbnailTextures[0])
            },
            transparent: true,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.group = new THREE.Group()
        this.group.add(this.mesh)
        this.mesh.position.z = 10
        this.group.position.z = -20

        this.scene.add(this.group)
    }

    update(){
        
    }
}