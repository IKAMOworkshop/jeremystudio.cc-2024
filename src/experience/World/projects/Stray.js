import * as THREE from 'three'

import Experience from "../../Experience"

export default class Stray {
    constructor(){
        this.experience = new Experience
        this.scene = this.experience.strayScene
        this.time = this.experience.time
        this.cursor = this.experience.cursor

        this.setModel()
        this.update()
    }

    setModel(){
        this.strayVideo = document.getElementById("stray")

        this.geometry = new THREE.PlaneGeometry(11, 5.5)
        this.placeholderMaterial = new THREE.MeshBasicMaterial({
            visible: false
        })

        this.testMesh = new THREE.Mesh(this.geometry, this.placeholderMaterial)
        this.scene.add(this.testMesh)
    }

    update(){

    }
}