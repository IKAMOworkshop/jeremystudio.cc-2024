import * as THREE from 'three'

import studio from '@theatre/studio'
import { getProject, types, val } from '@theatre/core'
studio.initialize()

import Experience from "../../Experience";

import plateVertex from '../../shaders/imagePlate/vertex.glsl'
import plateFragment from '../../shaders/imagePlate/fragment.glsl'

export default class AboutScroll{
    constructor(){
        // Theatre JS
        this.project = getProject('About Scroll')
        this.sheet = this.project.sheet('Room Animation')

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

        this.setData()
        this.setModel()
        this.setImagePlate()
        this.update()
    }
    
    setData(){
        // Horizontal Images
        this.horiTexture1 = this.resources.items.horiAbout1
        this.horiTexture2 = this.resources.items.horiAbout2
        this.horiTexture3 = this.resources.items.horiAbout3
        this.horiTexture4 = this.resources.items.horiAbout4
        this.horiTexture5 = this.resources.items.horiAbout5

        // Vertical Images
        this.vertTexture1 = this.resources.items.vertAbout1
        this.vertTexture2 = this.resources.items.vertAbout2
        this.vertTexture3 = this.resources.items.vertAbout3
        this.vertTexture4 = this.resources.items.vertAbout4
        this.vertTexture5 = this.resources.items.vertAbout5
    }

    setModel(){
        this.roomModel = this.roomModelRef.scene
        this.roomBaked = new THREE.MeshBasicMaterial({
            map: this.roomBakedTexture,
        })

        this.modelScale = .32

        this.roomModel.scale.set(this.modelScale, this.modelScale, this.modelScale)

        this.roomModel.children[0].material = this.roomBaked

        this.group = new THREE.Group()
        this.group.add(this.roomModel)

        this.scene.add(this.group)

        this.roomObject = this.sheet.object('Room', {
            rotation: types.compound({
                x: types.number(this.group.rotation.x, { range: [-2, 2] }),
                y: types.number(this.group.rotation.y, { range: [-2, 2] }),
                z: types.number(this.group.rotation.z, { range: [-2, 2] }), 
            }),
            position: types.compound({
                x: types.number(this.group.position.x, { range: [-10, 10] }),
                y: types.number(this.group.position.y, { range: [-10, 10] }),
                z: types.number(this.group.position.z, { range: [-10, 10] }),
            })
        }, {reconfigure: true})

        this.roomObject.onValuesChange((values) => {
            this.rotation = values.rotation
            this.position = values.position

            this.group.rotation.set(this.rotation.x * Math.PI, this.rotation.y * Math.PI, this.rotation.z * Math.PI)
            this.group.position.set(this.position.x, this.position.y, this.position.z)
        })

        // this.sequenceLength = val(this.sheet.sequence.pointer.length)
        // console.log(this.sequenceLength)
    }

    setImagePlate(){
        // Horizontal Plate
        this.horizontalGeometry = new THREE.PlaneGeometry(3.5, 2)
        this.horiMaterial1 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.horiTexture1),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1200, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3.5, 2))
            },
            transparent: true
        })
        this.horiMaterial2 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.horiTexture2),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1200, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3.5, 2))
            },
            transparent: true
        })
        this.horiMaterial3 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.horiTexture3),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1200, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3.5, 2))
            },
            transparent: true
        })
        this.horiMaterial4 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.horiTexture4),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1200, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3.5, 2))
            },
            transparent: true
        })
        this.horiMaterial5 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.horiTexture5),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1200, 640)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3.5, 2))
            },
            transparent: true
        })

        this.horiPlate1 = new THREE.Mesh(this.horizontalGeometry, this.horiMaterial1)
        this.horiPlate2 = new THREE.Mesh(this.horizontalGeometry, this.horiMaterial2)
        this.horiPlate3 = new THREE.Mesh(this.horizontalGeometry, this.horiMaterial3)
        this.horiPlate4 = new THREE.Mesh(this.horizontalGeometry, this.horiMaterial4)
        this.horiPlate5 = new THREE.Mesh(this.horizontalGeometry, this.horiMaterial5)

        this.scene.add(this.horiPlate1, this.horiPlate2, this.horiPlate3, this.horiPlate4, this.horiPlate5)

        // Vertical Plate
        this.verticalGeometry = new THREE.PlaneGeometry(3, 4)
        this.vertMaterial1 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.vertTexture1),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(800, 1000)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3, 4))
            },
            transparent: true
        })
        this.vertMaterial2 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.vertTexture2),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(800, 1000)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3, 4))
            },
            transparent: true
        })
        this.vertMaterial3 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.vertTexture3),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(800, 1000)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3, 4))
            },
            transparent: true
        })
        this.vertMaterial4 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.vertTexture4),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(800, 1000)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3, 4))
            },
            transparent: true
        })
        this.vertMaterial5 = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.vertTexture5),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(800, 1000)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(3, 4))
            },
            transparent: true
        })

        this.vertPlate1 = new THREE.Mesh(this.verticalGeometry, this.vertMaterial1)
        this.vertPlate2 = new THREE.Mesh(this.verticalGeometry, this.vertMaterial2)
        this.vertPlate3 = new THREE.Mesh(this.verticalGeometry, this.vertMaterial3)
        this.vertPlate4 = new THREE.Mesh(this.verticalGeometry, this.vertMaterial4)
        this.vertPlate5 = new THREE.Mesh(this.verticalGeometry, this.vertMaterial5)

        this.scene.add(this.vertPlate1, this.vertPlate2, this.vertPlate3, this.vertPlate4, this.vertPlate5)

    }

    update(){
        this.roomModel.position.y = Math.sin(this.time.elapsed * .001) * .15 - 1.75
    }
}