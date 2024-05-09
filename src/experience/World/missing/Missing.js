import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import Experience from "../../Experience.js"

import plateVertex from '../../shaders/thumbnail/vertex.glsl'
import plateFragment from '../../shaders/thumbnail/fragment.glsl'


export default class NotFound {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.notFoundScene
        this.camera = this.experience.camera.notFoundInstance
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor

        this.setData()
        this.setModel()
        this.update()
    }

    setData() {
        this.thumbnailTextures = []

        this.missingImage = {
            texture: this.resources.items.missing, 
            lineOne: '<   OH NO!',
            lineTwo: '       PAGE NOT',
            lineThree: 'FOUND    />',
            name: 'stray'
        }
    }

    setModel(){
        this.geometry = new THREE.PlaneGeometry(7, 4.5, 64, 64)
        this.textMaterial = new THREE.MeshBasicMaterial()
        this.interBlack = this.resources.items.interBlack

        this.lineOneGeo = new TextGeometry(this.missingImage.lineOne, {
            font: this.interBlack,
            size: .4,
            depth: 0,
            curveSegments: 12,
        })
        this.lineTwoGeo = new TextGeometry(this.missingImage.lineTwo, {
            font: this.interBlack,
            size: .4,
            depth: 0,
            curveSegments: 12,
        })
        this.lineThreeGeo = new TextGeometry(this.missingImage.lineThree, {
            font: this.interBlack,
            size: .4,
            depth: 0,
            curveSegments: 12,
        })

        this.lineOne = new THREE.Mesh(this.lineOneGeo, this.textMaterial)
        this.lineTwo = new THREE.Mesh(this.lineTwoGeo, this.textMaterial)
        this.lineThree = new THREE.Mesh(this.lineThreeGeo, this.textMaterial)

        this.lineOne.position.set(-4, .5 , 4)
        this.lineTwo.position.set(-4, -.1 , 4)
        this.lineThree.position.set(.8, -.8 , 4)

        this.material = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTime: new THREE.Uniform(0),
                uTexture: new THREE.Uniform(this.missingImage.texture),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1000, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(7, 4.5))
                
            },
            transparent: true,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.z = Math.PI * .02

        this.group = new THREE.Group()

        this.group.add(this.mesh, this.lineOne, this.lineTwo, this.lineThree)
        this.scene.add(this.group)
    }

    update(){
        this.group.position.x = (this.group.position.x + ((this.cursor.cursorX / this.sizes.width - .5) - this.group.position.x) * .02)

        this.group.position.y = (this.group.position.y - ((this.cursor.cursorY / this.sizes.height - .5) + this.group.position.y) * .02)
    }

}