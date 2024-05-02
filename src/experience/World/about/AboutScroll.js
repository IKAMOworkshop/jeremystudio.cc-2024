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

        this.setModel()
        this.update()
    }

    setModel(){
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial()
        )
        this.scene.add(this.mesh)
    }

    update(){
        this.mesh.rotation.y += .01
    }
}