import Experience from './Experience.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.homeScene = this.experience.homeScene
        this.aboutScene = this.experience.aboutScene
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
    };

    // setControls(){
    //     this.controls = new OrbitControls(this.instance, this.canvas)
    //     this.controls.enableDamping = true
    // };

    resize(){
        this.homeInstance.aspect = this.sizes.width / this.sizes.height
        this.aboutInstance.aspect = this.sizes.width / this.sizes.height
        this.homeInstance.updateProjectionMatrix()
        this.aboutInstance.updateProjectionMatrix()
    };

    update(){
        // this.controls.update();
    }
};