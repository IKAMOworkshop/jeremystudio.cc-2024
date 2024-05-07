import * as THREE from 'three'

import studio from '@theatre/studio'
import { getProject, types, val } from '@theatre/core'
studio.initialize()

import Experience from "../../Experience";
import roomScroll from '../../animations/roomScroll.json'

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

        this.setModel()
        this.update()
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

    update(){
        this.roomModel.position.y = Math.sin(this.time.elapsed * .001) * .15 - 1.75
    }
}