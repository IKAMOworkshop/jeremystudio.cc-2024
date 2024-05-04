import Experience from "../Experience.js"
import HomeThumbnail from "./home/HomeThumbnail.js"
import AboutScroll from './about/AboutScroll.js'
import ArchivesScroll from './archives/ArchivesScroll.js'

export default class World{
    constructor(){
        this.experience = new Experience();
        this.resources = this.experience.resources;


        this.resources.on('ready', () => {
            // Setup
            this.homeThumbnails = new HomeThumbnail()
            this.aboutScroll = new AboutScroll()
            this.archivesScroll = new ArchivesScroll()
        })
    }

    update(){
        this.homeCheck = document.getElementById('home-experience')
        this.aboutCheck = document.getElementById('about-experience')
        this.archivesCheck = document.getElementById('archives-experience')
        this.strayCheck = document.getElementById('stray-experience')
        this.hyperCheck = document.getElementById('hyper-experience')
        this.transitCheck = document.getElementById('transit-experience')
        this.arcaneCheck = document.getElementById('arcane-experience')
        this.nebulaCheck = document.getElementById('nebula-experience')
        this.angineCheck = document.getElementById('angine-experience')
        
        if(this.homeCheck){
            this.homeThumbnails.update()
        }
        if(this.aboutCheck){
            this.aboutScroll.update();
        }
        if(this.archivesCheck){
            this.archivesScroll.update();
        }
    }
}