import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import Experience from "../../Experience"

import plateVertex from '../../shaders/thumbnail/vertex.glsl'
import plateFragment from '../../shaders/thumbnail/fragment.glsl'


export default class ArchiveScroll {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.archivesScene
        this.camera = this.experience.camera.archivesInstance
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor
        this.wheel = this.experience.wheel

        this.setData()
        this.setModel()
        this.update()
    }

    setData() {
        this.archivesTexture = []

        this.image1 = {
            texture: this.resources.items.fracture,
            title: '<FRACTURE  />', 
            name: 'fracture',
            type: 'INFORMATION DESIGN',
            time:'SPRING 2020',
        }

        this.image2 = {
            texture: this.resources.items.icons, 
            title: '<ICONS  />', 
            name: 'icons',
            type: 'ICONOGRAPHY',
            time:'WINTER 2020',
        }

        this.image3 = {
            texture: this.resources.items.c103Aida, 
            title: '<C103 AIDA  />', 
            name: 'c103Aida',
            type: 'PRINT DESIGN',
            time:'WINTER 2023',
        }

        this.image4 = {
            texture: this.resources.items.c103Kyaroru, 
            title: '<C103 KYARORU  />', 
            name: 'c103Kyaroru',
            type: 'PRINT DESIGN',
            time:'WINTER 2023',
        }

        this.image5 = {
            texture: this.resources.items.ff42Lift, 
            title: '<FF42 LIFT  />', 
            name: 'ff42Lift',
            type: 'PRINT DESIGN',
            time:'SPRING 2024',
        }

        this.image6 = {
            texture: this.resources.items.c102Aida, 
            title: '<C102 AIDA  />', 
            name: 'c102Aida',
            type: 'PRINT DESIGN',
            time:'SUMMER 2023',
        }

        this.image7 = {
            texture: this.resources.items.c102Kyaroru, 
            title: '<C102 KYARORU  />', 
            name: 'c102Kyaroru',
            type: 'PRINT DESIGN',
            time:'SUMMER 2023',
        }

        this.image8 = {
            texture: this.resources.items.ff41Lift, 
            title: '<FF41 LIFT  />', 
            name: 'ff41Lift',
            type: 'PRINT DESIGN',
            time:'SUMMER 2023',
        }

        this.image9 = {
            texture: this.resources.items.ff40Kyaroru, 
            title: '<FF40 KYARORU  />', 
            name: 'ff40Kyaroru',
            type: 'PRINT DESIGN',
            time:'SPRING 2023',
        }

        this.image10 = {
            texture: this.resources.items.prisma, 
            title: '<PRISMA  />', 
            name: 'prisma',
            type: 'POSTER DESIGN',
            time:'FALL 2019',
        }

        this.image11 = {
            texture: this.resources.items.polygon, 
            title: '<POLYGON  />', 
            name: 'polygon',
            type: 'PRINT DESIGN',
            time:'FALL 2018',
        }

        this.image12 = {
            texture: this.resources.items.twitch, 
            title: '<TWITCH REBRAND  />', 
            name: 'twitch',
            type: 'BRAND DESIGN',
            time:'FALL 2022',
        }

        this.image13 = {
            texture: this.resources.items.cup, 
            title: '<TEACUP  />', 
            name: 'cup',
            type: '3D MODELING',
            time:'SPRING 2021',
        }

        this.image14 = {
            texture: this.resources.items.vesal, 
            title: '<VESAL  />', 
            name: 'vesal',
            type: 'UIUX DESIGN',
            time:'FALL 2019',
        }
        
        this.image15 = {
            texture: this.resources.items.modz, 
            title: '<MODZ  />', 
            name: 'modz',
            type: 'UIUX DESIGN',
            time:'SPRING 2020',
        }

        
        this.image16 = {
            texture: this.resources.items.v, 
            title: '<V  />', 
            name: 'v',
            type: 'MOTION DESIGN',
            time:'SPRING 2020',
        }

        this.archivesTexture.push(this.image1, this.image2, this.image3, this.image4, this.image5, this.image6, this.image7, this.image8, this.image9, this.image10, this.image11, this.image12, this.image13, this.image14, this.image15, this.image16)
    }

    setModel(){
        this.thumbnailMeshes = []        
        this.geometry = new THREE.PlaneGeometry(7, 4, 64, 64)
        this.textMaterial = new THREE.MeshBasicMaterial()
        this.group = new THREE.Group()
        this.moveHorGroup = new THREE.Group()
        this.meshGap = 5

        this.interBlack = this.resources.items.interBlack
        this.interReg = this.resources.items.interReg

        this.archivesTexture.forEach((index, i) => {
            this.titleTextGeometry = new TextGeometry(index.title, {
                font: this.interBlack,
                size: .1,
                depth: 0,
                curveSegments: 12,
            })
            this.typeTextGeometry = new TextGeometry(index.type, {
                font: this.interReg,
                size: .05,
                depth: 0,
                curveSegments: 12,
            })

            this.timeTextGeometry = new TextGeometry(index.time, {
                font: this.interBlack,
                size: .05,
                depth: 0,
                curveSegments: 12,
            })

            this.titleText = new THREE.Mesh(this.titleTextGeometry, this.textMaterial)
            this.titleText.position.set(-4.5, .2 , 4)
            this.titleText.rotation.z = -.05

            this.typeText = new THREE.Mesh(this.typeTextGeometry, this.textMaterial)
            this.typeText.position.set(-4.5, .05 , 4)
            this.typeText.rotation.z = -.05

            this.timeText = new THREE.Mesh(this.timeTextGeometry, this.textMaterial)
            this.timeText.position.set(3, -.3 , 4)
            this.timeText.rotation.z = -.05

            this.material = new THREE.ShaderMaterial({
                vertexShader: plateVertex,
                fragmentShader: plateFragment,
                uniforms: {
                    uTime: new THREE.Uniform(0),
                    uTexture: new THREE.Uniform(index.texture),
                    uOffsetY: new THREE.Uniform(0),
                    uTextureSize: new THREE.Uniform(new THREE.Vector2(1920, 1080)),
                    uPlaneSize: new THREE.Uniform(new THREE.Vector2(7, 4))
                },
                transparent: true,
            })
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.name = index.name

            this.meshGroup = new THREE.Group()
            this.meshGroup.add(this.titleText, this.typeText, this.timeText, this.mesh)

            this.meshGroup.position.y = i * this.meshGap
            this.thumbnailMeshes.push(this.meshGroup)

            this.group.add(this.meshGroup)
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
    }
}