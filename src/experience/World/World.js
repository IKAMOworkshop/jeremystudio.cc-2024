import Experience from "../Experience.js"
import HomeThumbnail from "./home/HomeThumbnail.js"
import AboutScroll from './about/AboutScroll.js'

export default class World{
    constructor(){
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            // Setup
            this.homeThumbnails = new HomeThumbnail()
            this.aboutScroll = new AboutScroll()
        })
    }

    update(){
        if(this.homeThumbnails){
            this.homeThumbnails.update();
        }
        if(this.aboutScroll){
            this.aboutScroll.update();
        }
    };
}