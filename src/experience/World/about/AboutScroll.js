import * as THREE from 'three'
import Experience from "../../Experience";

export default class AboutScroll{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.aboutScene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.wheel = this.experience.wheel

        // Setup
        this.roomModelRef = this.resources.items.roomModel
        this.roomBakedTexture = this.resources.items.roomBaked
        this.roomBakedTexture.flipY = false
        this.roomBakedTexture.colorSpace = THREE.SRGBColorSpace

        this.setModel()
        this.update()
    }

    setModel(){
        this.roomModel = this.roomModelRef.scene
        this.roomBaked = new THREE.MeshBasicMaterial({
            map: this.roomBakedTexture,
        })

        this.modelScale = .3

        this.roomModel.scale.set(this.modelScale, this.modelScale, this.modelScale)
        this.roomModel.position.y = -1.6
        this.roomModel.rotation.y = -Math.PI * .25
        this.roomModel.rotation.x = Math.PI * .1

        this.roomModel.children[0].material = this.roomBaked

        this.scene.add(this.roomModel)
    }

    update(){
        
    }
}