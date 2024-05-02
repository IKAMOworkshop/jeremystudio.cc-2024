import * as THREE from 'three'

import Experience from "../../Experience";

import plateVertex from '../../shaders/thumbnail/vertex.glsl'
import plateFragment from '../../shaders/thumbnail/fragment.glsl'


export default class ImagePlate {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.homeScene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.wheel = this.experience.wheel
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

        this.thumbnailTextures.push(this.transitImage, this.hyperImage, this.strayImage, this.angineImage, this.nebulaImage, this.arcaneImage)
    }

    setModel(){
        this.thumbnailMeshes = []        
        this.geometry = new THREE.PlaneGeometry(9.5, 5, 64, 64)
        this.group = new THREE.Group()
        this.moveHorGroup = new THREE.Group()
        this.meshGap = 6

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
            this.mesh.position.y = i * this.meshGap
            this.thumbnailMeshes.push(this.mesh)
            this.group.add(this.mesh)
        })

        this.group.rotation.z = Math.PI * .02
        this.group.position.x = 1
        this.group.position.y = -this.meshGap * 2
        this.moveHorGroup.add(this.group)
        this.scene.add(this.moveHorGroup)
    }

    calcPos(scr, pos){
        let temp = ((scr + pos + (this.thumbnailMeshes.length * this.meshGap)) % (this.thumbnailMeshes.length * this.meshGap))

        return temp
    }

    update(){
        this.wheel.scroll -= (this.wheel.scroll - (this.wheel.wheelDelta * .01)) * .1
        this.thumbnailMeshes.forEach((mesh) => {
            mesh.position.y = this.calcPos(-this.wheel.scroll, mesh.position.y)

            this.rounded = 0

            if (mesh.position.y%this.meshGap < (this.meshGap/2)) {
                this.rounded = Math.floor(mesh.position.y/this.meshGap) * this.meshGap
            } else if (mesh.position.y%this.meshGap > (this.meshGap/2)) {
                this.rounded = Math.ceil(mesh.position.y/this.meshGap) * this.meshGap
            }
    
            this.diff = (this.rounded - mesh.position.y)
            mesh.position.y += (this.diff * .05) * 1.5

        })
        this.wheel.wheelDelta = 0
        if(this.homePost){
            this.homePost.update()
        }

        this.moveHorGroup.position.x = (this.moveHorGroup.position.x + ((this.cursor.cursorX / this.sizes.width - .5) - this.moveHorGroup.position.x) * .02)
        this.moveHorGroup.position.y = (this.moveHorGroup.position.y - ((this.cursor.cursorY / this.sizes.height - .5) + this.moveHorGroup.position.y) * .02)
    }
}