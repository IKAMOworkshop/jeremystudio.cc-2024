import Sizes from "./Utils/Sizes.js";
import Cursor from "./Utils/Cursor.js";
import Wheel from "./Utils/Wheel.js";
import Time from "./Utils/Time";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from './World/World.js';
import Resources from "./Utils/Resources.js";
import sources from './sources.js'
import Debug from './Utils/Debug.js';

import * as THREE from 'three';

let instance = null;

export default class Experience{
    constructor(){
        if(instance){
            return instance;
        }
        instance = this;

        // Global Access
        window.experience = this

        // Options
        this.canvas = document.getElementById('webgl')

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.cursor = new Cursor()
        this.wheel = new Wheel()
        this.time = new Time()
        this.resources = new Resources(sources)

        // Scene Setup
        this.homeScene = new THREE.Scene()
        this.aboutScene = new THREE.Scene()
        this.archivesScene = new THREE.Scene()
        this.strayScene = new THREE.Scene()
        this.hyperScene = new THREE.Scene()
        this.transitScene = new THREE.Scene()
        this.arcaneScene = new THREE.Scene()
        this.nebulaScene = new THREE.Scene()
        this.angineScene = new THREE.Scene()

        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Reize Event
        this.sizes.on('resize', () => {
            this.resize();
        });

        // Time Tick Event
        this.time.on('tick', () => {
            this.update();
        })

    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.camera.update()
        this.world.update()
        this.renderer.update()
        this.wheel.update()
    }
};