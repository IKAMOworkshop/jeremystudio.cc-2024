import * as THREE from 'three'

import studio from '@theatre/studio'
import { getProject, types, val } from '@theatre/core'
studio.initialize()

import Experience from "../../Experience";

import aboutThree from '../../animations/aboutThree.json'

import plateVertex from '../../shaders/imagePlate/vertex.glsl'
import plateFragment from '../../shaders/imagePlate/fragment.glsl'

export default class AboutScroll{
    constructor(){
        this.experience = new Experience()
        this.raycaster = new THREE.Raycaster()

        this.scene = this.experience.aboutScene
        this.camera = this.experience.camera.aboutInstance
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.wheel = this.experience.wheel

        // Raycaster
        this.mouse = new THREE.Vector2()
        this.objectToTest = []
        this.currentIntersect = null

        // Setup
        this.roomModelRef = this.resources.items.roomModel
        this.roomBakedTexture = this.resources.items.roomBaked
        this.roomBakedTexture.flipY = false
        this.roomBakedTexture.colorSpace = THREE.SRGBColorSpace

        // Theatre JS
        this.project = getProject('About Scroll')
        this.sheet = this.project.sheet('Room Animation')

        this.scrollPercentage = (this.currentDistance / (this.totalHeight - this.windowHeight))
        this.sheet.sequence.position = this.scrollPercentage * this.sequenceLength

        this.setData()
        this.setModel()
        this.setImagePlate()
        this.setAnimation()
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

        // Contact Cat
        this.catTexture1 = this.resources.items.catPop1
        this.catTexture2 = this.resources.items.catPop2
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

        // Contact Cat
        this.catGeometry = new THREE.PlaneGeometry(4, 5)
        this.catMaterial = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTexture: new THREE.Uniform(this.catTexture1),
                uTextureSize: new THREE.Uniform(new THREE.Vector2(1000, 1120)),
                uPlaneSize: new THREE.Uniform(new THREE.Vector2(4, 5))
            },
            transparent: true
        })
        this.catMesh = new THREE.Mesh(this.catGeometry, this.catMaterial)
        this.contactGroup = new THREE.Group()
        this.objectToTest.push(this.catMesh)
        this.contactGroup.add(this.catMesh)

        this.scene.add(this.vertPlate1, this.vertPlate2, this.vertPlate3, this.vertPlate4, this.vertPlate5, this.contactGroup)
        

    }

    setAnimation(){
        // Room Animation
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
            this.group.rotation.set(values.rotation.x * Math.PI, values.rotation.y * Math.PI, values.rotation.z * Math.PI)
            this.group.position.set(values.position.x, values.position.y, values.position.z)
        })

        // Plate Animations
        this.horiPlateObject1 = this.sheet.object('Hori Plate 1', {
            position: types.compound({
                x: types.number(this.horiPlate1.position.x, { range: [-10, 10] }),
                y: types.number(this.horiPlate1.position.y, { range: [-10, 10] }),
                z: types.number(this.horiPlate1.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.horiPlate1.scale.x, { range: [0, 1] }),
                y: types.number(this.horiPlate1.scale.y, { range: [0, 1] }),
                z: types.number(this.horiPlate1.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.horiPlateObject1.onValuesChange((values) => {
            this.horiPlate1.position.set(values.position.x, values.position.y, values.position.z)
            this.horiPlate1.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.horiPlateObject2 = this.sheet.object('Hori Plate 2', {
            position: types.compound({
                x: types.number(this.horiPlate2.position.x, { range: [-10, 10] }),
                y: types.number(this.horiPlate2.position.y, { range: [-10, 10] }),
                z: types.number(this.horiPlate2.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.horiPlate2.scale.x, { range: [0, 1] }),
                y: types.number(this.horiPlate2.scale.y, { range: [0, 1] }),
                z: types.number(this.horiPlate2.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.horiPlateObject2.onValuesChange((values) => {
            this.horiPlate2.position.set(values.position.x, values.position.y, values.position.z)
            this.horiPlate2.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.horiPlateObject3 = this.sheet.object('Hori Plate 3', {
            position: types.compound({
                x: types.number(this.horiPlate3.position.x, { range: [-10, 10] }),
                y: types.number(this.horiPlate3.position.y, { range: [-10, 10] }),
                z: types.number(this.horiPlate3.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.horiPlate3.scale.x, { range: [0, 1] }),
                y: types.number(this.horiPlate3.scale.y, { range: [0, 1] }),
                z: types.number(this.horiPlate3.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.horiPlateObject3.onValuesChange((values) => {
            this.horiPlate3.position.set(values.position.x, values.position.y, values.position.z)
            this.horiPlate3.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.horiPlateObject4 = this.sheet.object('Hori Plate 4', {
            position: types.compound({
                x: types.number(this.horiPlate4.position.x, { range: [-10, 10] }),
                y: types.number(this.horiPlate4.position.y, { range: [-10, 10] }),
                z: types.number(this.horiPlate4.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.horiPlate4.scale.x, { range: [0, 1] }),
                y: types.number(this.horiPlate4.scale.y, { range: [0, 1] }),
                z: types.number(this.horiPlate4.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.horiPlateObject4.onValuesChange((values) => {
            this.horiPlate4.position.set(values.position.x, values.position.y, values.position.z)
            this.horiPlate4.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.horiPlateObject5 = this.sheet.object('Hori Plate 5', {
            position: types.compound({
                x: types.number(this.horiPlate5.position.x, { range: [-10, 10] }),
                y: types.number(this.horiPlate5.position.y, { range: [-10, 10] }),
                z: types.number(this.horiPlate5.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.horiPlate5.scale.x, { range: [0, 1] }),
                y: types.number(this.horiPlate5.scale.y, { range: [0, 1] }),
                z: types.number(this.horiPlate5.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.horiPlateObject5.onValuesChange((values) => {
            this.horiPlate5.position.set(values.position.x, values.position.y, values.position.z)
            this.horiPlate5.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.vertPlateObject1 = this.sheet.object('Vert Plate 1', {
            position: types.compound({
                x: types.number(this.vertPlate1.position.x, { range: [-10, 10] }),
                y: types.number(this.vertPlate1.position.y, { range: [-10, 10] }),
                z: types.number(this.vertPlate1.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.vertPlate1.scale.x, { range: [0, 1] }),
                y: types.number(this.vertPlate1.scale.y, { range: [0, 1] }),
                z: types.number(this.vertPlate1.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.vertPlateObject1.onValuesChange((values) => {
            this.vertPlate1.position.set(values.position.x, values.position.y, values.position.z)
            this.vertPlate1.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.vertPlateObject2 = this.sheet.object('Vert Plate 2', {
            position: types.compound({
                x: types.number(this.vertPlate2.position.x, { range: [-10, 10] }),
                y: types.number(this.vertPlate2.position.y, { range: [-10, 10] }),
                z: types.number(this.vertPlate2.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.vertPlate2.scale.x, { range: [0, 1] }),
                y: types.number(this.vertPlate2.scale.y, { range: [0, 1] }),
                z: types.number(this.vertPlate2.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.vertPlateObject2.onValuesChange((values) => {
            this.vertPlate2.position.set(values.position.x, values.position.y, values.position.z)
            this.vertPlate2.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.vertPlateObject3 = this.sheet.object('Vert Plate 3', {
            position: types.compound({
                x: types.number(this.vertPlate3.position.x, { range: [-10, 10] }),
                y: types.number(this.vertPlate3.position.y, { range: [-10, 10] }),
                z: types.number(this.vertPlate3.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.vertPlate3.scale.x, { range: [0, 1] }),
                y: types.number(this.vertPlate3.scale.y, { range: [0, 1] }),
                z: types.number(this.vertPlate3.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.vertPlateObject3.onValuesChange((values) => {
            this.vertPlate3.position.set(values.position.x, values.position.y, values.position.z)
            this.vertPlate3.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.vertPlateObject4 = this.sheet.object('Vert Plate 4', {
            position: types.compound({
                x: types.number(this.vertPlate4.position.x, { range: [-10, 10] }),
                y: types.number(this.vertPlate4.position.y, { range: [-10, 10] }),
                z: types.number(this.vertPlate4.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.vertPlate4.scale.x, { range: [0, 1] }),
                y: types.number(this.vertPlate4.scale.y, { range: [0, 1] }),
                z: types.number(this.vertPlate4.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.vertPlateObject4.onValuesChange((values) => {
            this.vertPlate4.position.set(values.position.x, values.position.y, values.position.z)
            this.vertPlate4.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.vertPlateObject5 = this.sheet.object('Vert Plate 5', {
            position: types.compound({
                x: types.number(this.vertPlate5.position.x, { range: [-10, 10] }),
                y: types.number(this.vertPlate5.position.y, { range: [-10, 10] }),
                z: types.number(this.vertPlate5.position.z, { range: [-10, 10] }),
            }),
            scale: types.compound({
                x: types.number(this.vertPlate5.scale.x, { range: [0, 1] }),
                y: types.number(this.vertPlate5.scale.y, { range: [0, 1] }),
                z: types.number(this.vertPlate5.scale.z, { range: [0, 1] }),
            })
        }, {reconfigure: true})
        this.vertPlateObject5.onValuesChange((values) => {
            this.vertPlate5.position.set(values.position.x, values.position.y, values.position.z)
            this.vertPlate5.scale.set(values.scale.x, values.scale.y, values.scale.z)
        })

        this.catPlate = this.sheet.object('Cat Plate', {
            position: types.compound({
                x: types.number(this.contactGroup.position.x, { range: [-10, 10] }),
                y: types.number(this.contactGroup.position.y, { range: [-10, 10] }),
                z: types.number(this.contactGroup.position.z, { range: [-10, 10] }),
            }),
            rotation: types.compound({
                x: types.number(this.contactGroup.rotation.x, { range: [-2, 2] }),
                y: types.number(this.contactGroup.rotation.y, { range: [-2, 2] }),
                z: types.number(this.contactGroup.rotation.z, { range: [-2, 2] }), 
            }),
        }, {reconfigure: true})
        this.catPlate.onValuesChange((values) => {
            this.contactGroup.position.set(values.position.x, values.position.y, values.position.z)
            this.contactGroup.rotation.set(values.rotation.x * Math.PI, values.rotation.y * Math.PI, values.rotation.z * Math.PI)
        })

        this.sequenceLength = val(this.sheet.sequence.pointer.length)

        this.sheet.sequence.position = 0
        this.totalHeight = document.body.scrollHeight
        this.currentDistance = document.documentElement.scrollTop
        this.windowHeight = document.documentElement.clientHeight

        document.addEventListener('scroll', () => {
            this.totalHeight = document.body.scrollHeight
            this.currentDistance = document.documentElement.scrollTop
            this.windowHeight = document.documentElement.clientHeight

            this.scrollPercentage = (this.currentDistance / (this.totalHeight - this.windowHeight))
            this.sheet.sequence.position = this.scrollPercentage * this.sequenceLength
        })
    }

    update(){
        // Raycaster
        this.mouse.x = (this.cursor.cursorX / this.sizes.width) * 2 - 1
        this.mouse.y = -(this.cursor.cursorY / this.sizes.height) * 2 + 1

        this.raycaster.setFromCamera(this.mouse, this.camera)
        this.intersects = this.raycaster.intersectObjects(this.objectToTest)

        if(this.intersects.length){
            if(!this.currentIntersect){
                this.catMaterial.uniforms.uTexture.value = this.catTexture2
            }
            this.catMaterial.uniforms.uTexture.value = this.catTexture2
            this.currentIntersect = this.intersects[0]

        }else{
            if(this.currentIntersect){
                this.catMaterial.uniforms.uTexture.value = this.catTexture1
            }
            this.currentIntersect = null
        }

        // Model Animations
        this.roomModel.position.y = Math.sin(this.time.elapsed * .0015) * .15 - 1.75
    }
}