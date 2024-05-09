import Experience from './Experience.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes

        // Import Scene
        this.homeScene = this.experience.homeScene
        this.aboutScene = this.experience.aboutScene
        this.archivesScene = this.experience.archivesScene
        this.strayScene = this.experience.strayScene
        this.hyperScene = this.experience.hyperScene
        this.transitScene = this.experience.transitScene
        this.arcaneScene = this.experience.arcaneScene
        this.nebulaScene = this.experience.nebulaScene
        this.angineScene = this.experience.angineScene
        this.notFoundScene = this.experience.notFoundScene
        
        this.canvas = this.experience.canvas

        this.setInstance();
        // this.setControls()
    };

    setInstance(){
        this.homeInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.homeInstance.position.set(0, 0, 12)
        this.homeScene.add(this.homeInstance)

        this.aboutInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.aboutInstance.position.set(0, 0, 12)
        this.aboutScene.add(this.aboutInstance)

        this.archivesInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.archivesInstance.position.set(0, 0, 12)
        this.archivesScene.add(this.archivesInstance)

        this.strayInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.strayInstance.position.set(0, 0, 12)
        this.strayScene.add(this.strayInstance)

        this.hyperInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.hyperInstance.position.set(0, 0, 12)
        this.hyperScene.add(this.hyperInstance)

        this.transitInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.transitInstance.position.set(0, 0, 12)
        this.transitScene.add(this.transitInstance)

        this.arcaneInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.arcaneInstance.position.set(0, 0, 12)
        this.arcaneScene.add(this.arcaneInstance)

        this.nebulaInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.nebulaInstance.position.set(0, 0, 12)
        this.nebulaScene.add(this.nebulaInstance)

        this.angineInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.angineInstance.position.set(0, 0, 12)
        this.angineScene.add(this.angineInstance)

        this.notFoundInstance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.notFoundInstance.position.set(0, 0, 12)
        this.notFoundScene.add(this.notFoundInstance)
    };

    // setControls(){
    //     this.controls = new OrbitControls(this.instance, this.canvas)
    //     this.controls.enableDamping = true
    // };

    resize(){
        this.homeInstance.aspect = this.sizes.width / this.sizes.height
        this.aboutInstance.aspect = this.sizes.width / this.sizes.height
        this.archivesInstance.aspect = this.sizes.width / this.sizes.height
        this.strayInstance.aspect = this.sizes.width / this.sizes.height
        this.hyperInstance.aspect = this.sizes.width / this.sizes.height
        this.transitInstance.aspect = this.sizes.width / this.sizes.height
        this.arcaneInstance.aspect = this.sizes.width / this.sizes.height
        this.nebulaInstance.aspect = this.sizes.width / this.sizes.height
        this.angineInstance.aspect = this.sizes.width / this.sizes.height
        this.notFoundInstance.aspect = this.sizes.width / this.sizes.height

        this.homeInstance.updateProjectionMatrix()
        this.aboutInstance.updateProjectionMatrix()
        this.archivesInstance.updateProjectionMatrix()
        this.strayInstance.updateProjectionMatrix()
        this.hyperInstance.updateProjectionMatrix()
        this.transitInstance.updateProjectionMatrix()
        this.arcaneInstance.updateProjectionMatrix()
        this.nebulaInstance.updateProjectionMatrix()
        this.angineInstance.updateProjectionMatrix()
        this.notFoundInstance.updateProjectionMatrix()
    };

    update(){
        // this.controls.update();
    }
};