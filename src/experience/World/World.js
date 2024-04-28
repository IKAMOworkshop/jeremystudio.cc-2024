import Experience from "../Experience.js";
import HomeThumbnail from ".//home/HomeThumbnail.js";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            // Setup
            this.homeThumbnails = new HomeThumbnail();
        })
    }

    update(){
        if(this.homeThumbnails){
            this.homeThumbnails.update();
        }
    };
}