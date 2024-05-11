import router from '../../../plugins/router.js'

import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import gsap from 'gsap'

import Experience from "../../Experience"

import plateVertex from '../../shaders/thumbnail/vertex.glsl'
import plateFragment from '../../shaders/thumbnail/fragment.glsl'


export default class HomeThumbnail {
    constructor(){
        this.experience = new Experience()
        this.raycaster = new THREE.Raycaster()
        this.scene = this.experience.homeScene
        this.camera = this.experience.camera.homeInstance
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.wheel = this.experience.wheel
        this.index = this.experience.thumbnailIndex

        this.mouse = new THREE.Vector2()
        this.objectToTest = []
        this.currentIntersect = null

        this.customCursor = document.getElementById('cursor')

        this.setData()
        this.setModel()
        this.mouseClick()
        this.update()
    }

    setData() {
        this.thumbnailTextures = []

        this.strayImage = {
            texture: this.resources.items.stray, 
            title: '<STRAY           />', 
            descriptionOne: 'BULIDING A COLLECTION OF IMMERSIVE 3D WEB',
            descriptionTwo: 'EXPERIENCES WITH THREE.JS AND MORE.',
            name: 'stray'
        }

        this.hyperImage = {
            texture: this.resources.items.hyper,
            title: '<HYPER           />',
            descriptionOne: 'CONDUCTING A COLLECTION OF EXPERIMENTS',
            descriptionTwo: 'EXPLORING EMMERGING TECHNOLOGIES.',
            name: 'hyper'
        }

        this.transitImage = {
            texture: this.resources.items.transit,
            title: '<TRANSIT      />',
            descriptionOne: 'BUILDING A MIXED-REALITY EXPERIENCE EXPLORING THE',
            descriptionTwo: 'LINK BETWEEN THE PHYSICAL AND VIRTUAL.',
            name: 'transit'
        }

        this.arcaneImage = {texture: this.resources.items.arcane,
            title: '<ARCANE       />',
            descriptionOne: 'BUILDING AN IMMERSIVE 3D WEB EXPERIENCE',
            descriptionTwo: 'TO DISPLAY MY FRONT-END PROJECTS.',
            name: 'arcane'
        }

        this.nebulaImage = {
            texture: this.resources.items.nebula,
            title: '<NEBULA      />',
            descriptionOne: 'DESIGNING AN ADAPTIVE SLEEP TRAINER TO',
            descriptionTwo: 'CURATE A PERSONALIZED SLEEP ROUTINE.',
            name: 'nebula'
        }

        this.angineImage = {
            texture: this.resources.items.angine,
            title: '<ANGINE         />',
            descriptionOne: 'ORCHESTRATING A VIRTUAL AUDIO MIXER',
            descriptionTwo: 'FOR A COMPLEX AUDIO SYSTEM ON PC.',
            name: 'angine'
        }

        this.thumbnailTextures.push(this.transitImage, this.hyperImage, this.strayImage, this.angineImage, this.nebulaImage, this.arcaneImage)
    }

    setModel(){
        this.thumbnailMeshes = []        
        this.geometry = new THREE.PlaneGeometry(9.5, 5, 64, 64)
        this.textMaterial = new THREE.MeshBasicMaterial()
        this.group = new THREE.Group()
        this.moveHorGroup = new THREE.Group()
        this.meshGap = 6

        this.interBlack = this.resources.items.interBlack
        this.interReg = this.resources.items.interReg

        this.thumbnailTextures.forEach((index, i) => {
            this.titleTextGeometry = new TextGeometry(index.title, {
                font: this.interBlack,
                size: .8,
                depth: 0,
                curveSegments: 12,
            })
            this.descriptionOneTextGeometry = new TextGeometry(index.descriptionOne, {
                font: this.interBlack,
                size: .05,
                depth: 0,
                curveSegments: 12,
            })
            this.descriptionTwoTextGeometry = new TextGeometry(index.descriptionTwo, {
                font: this.interBlack,
                size: .05,
                depth: 0,
                curveSegments: 12,
            })

            this.titleText = new THREE.Mesh(this.titleTextGeometry, this.textMaterial)
            this.descriptionOneText = new THREE.Mesh(this.descriptionOneTextGeometry, this.textMaterial)
            this.descriptionTwoText = new THREE.Mesh(this.descriptionTwoTextGeometry, this.textMaterial)
            this.titleText.rotation.z = -.05
            this.descriptionOneText.rotation.z = -.05
            this.descriptionTwoText.rotation.z = -.05

            this.material = new THREE.ShaderMaterial({
                vertexShader: plateVertex,
                fragmentShader: plateFragment,
                uniforms: {
                    uTime: new THREE.Uniform(0),
                    uTexture: new THREE.Uniform(index.texture),
                    uTextureSize: new THREE.Uniform(new THREE.Vector2(1920, 1080)),
                    uPlaneSize: new THREE.Uniform(new THREE.Vector2(9.5, 5)),
                    uOpacity: new THREE.Uniform(.5)
                    
                },
                transparent: true,
            })
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.name = index.name
            this.objectToTest.push(this.mesh)

            if(window.innerWidth > 1280){
                this.mesh.scale.set(1, 1, 1)
                this.meshGap = 6
                this.group.position.x = 1
                this.titleText.position.set(-4.5, .5 , 4)
                this.descriptionOneText.position.set(-3.5, -1 , 4)
                this.descriptionTwoText.position.set(-3.5, -1.1 , 4)
            }

            if(window.innerWidth <= 1280){
                this.mesh.scale.set(.8, .8, .8)
                this.meshGap = 5
                this.group.position.x = .5
                this.titleText.scale.set(.8, .8 , .8)
                this.titleText.position.set(-3.5, .5 , 4)
                this.descriptionOneText.position.set(-2.5, -1 , 4)
                this.descriptionTwoText.position.set(-2.5, -1.1 , 4)
            }

            if(window.innerWidth <= 1024){
                this.mesh.scale.set(.5, .5, .5)
                this.meshGap = 3
                this.group.position.x = .5
                this.titleText.scale.set(.5, .5 , .5)
                this.titleText.position.set(-2.2, .5 , 2)
                this.descriptionOneText.position.set(-1.8, -.6 , 2)
                this.descriptionTwoText.position.set(-1.8, -.7 , 2)
            }

            
            if(window.innerWidth <= 768){
                this.mesh.scale.set(.4, .4, .4)
                this.meshGap = 2.5
                this.group.position.x = .5
                this.titleText.scale.set(.2, .2 , .2)
                this.titleText.position.set(-1, 0 , 2)
                this.descriptionOneText.position.set(-10, -.6 , 2)
                this.descriptionTwoText.position.set(-10, -.7 , 2)
            }

            this.meshGroup = new THREE.Group()
            this.meshGroup.add(this.titleText, this.descriptionOneText, this.descriptionTwoText, this.mesh)

            this.meshGroup.position.y = i * this.meshGap
            this.thumbnailMeshes.push(this.meshGroup)

            this.group.add(this.meshGroup)
        })

        this.group.rotation.z = Math.PI * .02
        this.group.position.y = -this.meshGap - 6
        this.moveHorGroup.add(this.group)
        this.scene.add(this.moveHorGroup)
    }

    mouseClick(){
        window.addEventListener('click', () => {
            if(this.currentIntersect){
                switch(this.currentIntersect.object.name){
                    case'stray':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/stray')
                        break

                    case 'hyper':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/hyper')
                        break

                    case 'transit':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/transit')
                        break

                    case 'arcane':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/arcane')
                        break

                    case 'nebula':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/nebula')
                        break

                    case 'angine':
                        this.currentIntersect = null
                        if(this.customCursor){
                            this.customCursor.style.transform = 'scale(1)'
                            document.body.style.cursor = 'default'
                        }
                        router.push('/angine')
                        break
                }
            }
        })
    }

    resize() {
        if(window.innerWidth > 1280){

            this.thumbnailMeshes.forEach((mesh) => {
                mesh.children[3].scale.set(1, 1, 1)
                this.meshGap = 6
                mesh.children[0].scale.set(1, 1 , 1)
                mesh.children[0].position.set(-4.5, .5 , 4)
                mesh.children[1].position.set(-3.5, -1 , 4)
                mesh.children[2].position.set(-3.5, -1.1 , 4)
            })
        }

        if(window.innerWidth <= 1280){

            this.thumbnailMeshes.forEach((mesh) => {
                mesh.children[3].scale.set(.8, .8, .8)
                this.meshGap = 5
                mesh.children[0].scale.set(.8, .8 , .8)
                mesh.children[0].position.set(-3.5, .5 , 4)
                mesh.children[1].position.set(-2.5, -1 , 4)
                mesh.children[2].position.set(-2.5, -1.1 , 4)
            })
        }

        if(window.innerWidth <= 1024){

            this.thumbnailMeshes.forEach((mesh) => {
                mesh.children[3].scale.set(.5, .5, .5)
                this.meshGap = 3
                mesh.children[0].scale.set(.5, .5 , .5)
                mesh.children[0].position.set(-2.2, .5 , 2)
                mesh.children[1].position.set(-2.3, -.6 , 2)
                mesh.children[2].position.set(-2.3, -.7 , 2)
            })
        }

        if(window.innerWidth <= 768){

            this.thumbnailMeshes.forEach((mesh) => {
                mesh.children[3].scale.set(.4, .4, .4)
                this.meshGap = 2.5
                mesh.children[0].scale.set(.2, .2 , .2)
                mesh.children[0].position.set(-1, 0 , 2)
                mesh.children[1].position.set(-10, -.6 , 2)
                mesh.children[2].position.set(-10, -.7 , 2)
            })
        }
    }

    calcPos(scr, pos){
        let temp = ((scr + pos + (this.thumbnailMeshes.length * this.meshGap)) % (this.thumbnailMeshes.length * this.meshGap))

        return temp
    }

    update(){
        if(!this.customCursor){
            this.customCursor = document.getElementById('cursor')
        }
        // Raycaster
        this.mouse.x = (this.cursor.cursorX / this.sizes.width) * 2 - 1
        this.mouse.y = -(this.cursor.cursorY / this.sizes.height) * 2 + 1

        this.raycaster.setFromCamera(this.mouse, this.camera)
        this.intersects = this.raycaster.intersectObjects(this.objectToTest)

        // Home Experience
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

            mesh.position.y += (this.diff * .015) * 1.5
        })

        this.wheel.wheelDelta = 0

        this.moveHorGroup.position.x = (this.moveHorGroup.position.x + ((this.cursor.cursorX / this.sizes.width - .5) - this.moveHorGroup.position.x) * .02)

        this.moveHorGroup.position.y = (this.moveHorGroup.position.y - ((this.cursor.cursorY / this.sizes.height - .5) + this.moveHorGroup.position.y) * .02)
        
        if(this.intersects.length){
            if(!this.currentIntersect){
                if(this.customCursor){
                    this.customCursor.style.transform = 'scale(.2)'
                    document.body.style.cursor = 'pointer'
                }
            }
            this.currentIntersect = this.intersects[0]

        }else{
            if(this.currentIntersect){
                
            }
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
            this.currentIntersect = null
        }
    }

}