import * as THREE from 'three'

import Experience from "../../Experience";
import HomePost from './HomePost.js'

import plateVertex from '../../shaders/thumbnail/vertex.glsl'
import plateFragment from '../../shaders/thumbnail/fragment.glsl'


export default class ImagePlate {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.wheel = this.experience.wheel
        this.index = this.experience.thumbnailIndex
        this.homePost = new HomePost()
        this.HomePost = this.homePost

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

        this.thumbnailTextures.push(this.hyperImage, this.strayImage, this.angineImage, this.nebulaImage, this.arcaneImage, this.transitImage)
    }

    setModel(){
        this.thumbnailMeshes = []        
        this.geometry = new THREE.PlaneGeometry(10, 5, 64, 64)
        this.group = new THREE.Group()

        this.thumbnailTextures.forEach((index, i) => {
            this.material = new THREE.ShaderMaterial({
                vertexShader: plateVertex,
                fragmentShader: plateFragment,
                uniforms: {
                    uTime: new THREE.Uniform(0),
                    uTexture: new THREE.Uniform(index)
                },
                transparent: true,
            })
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.y = i * 7
            this.thumbnailMeshes.push(this.mesh)
            this.group.add(this.mesh)
        })

        this.group.rotation.z = Math.PI * .02
        this.group.position.x = .5
        this.group.position.y = -7
        this.scene.add(this.group)
    }

    calcPos(scr, pos){
        let temp = ((scr + pos + (this.thumbnailMeshes.length * 7)) % (this.thumbnailMeshes.length * 7))

        return temp
    }

    update(){
        this.wheel.scroll -= (this.wheel.scroll - (this.wheel.wheelDelta * .01)) * .1
        this.thumbnailMeshes.forEach((mesh) => {
            mesh.position.y = this.calcPos(-this.wheel.scroll, mesh.position.y)

            let rounded = 0

            if (mesh.position.y%7 < (7/2)) {
                rounded = Math.floor(mesh.position.y/7) * 7
            } else if (mesh.position.y%7 > (7/2)) {
                rounded = Math.ceil(mesh.position.y/7) * 7
            }
    
            let diff = (rounded - mesh.position.y)
            mesh.position.y += (diff * .05) * 1.5

        })
        this.wheel.wheelDelta = 0
        if(this.homePost){
            this.homePost.update()
        }
    }
}