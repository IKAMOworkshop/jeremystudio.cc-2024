import Experience from "../Experience.js"
import HomeThumbnail from "./home/HomeThumbnail.js"
import AboutScroll from './about/AboutScroll.js'
import ArchivesScroll from './archives/ArchivesScroll.js'
import MissingExperience from './missing/Missing.js'

export default class World{
    constructor(){
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.customCursor = document.getElementById('cursor')

        this.resources.on('ready', () => {
            // Setup
            this.homeThumbnails = new HomeThumbnail()
            this.aboutScroll = new AboutScroll()
            this.archivesScroll = new ArchivesScroll()
            this.missingExperience = new MissingExperience()
        })
    }

    resize(){
        this.homeThumbnails.resize()
        this.archivesScroll.resize()
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
        this.notFoundCheck = document.getElementById('missing-experience')
        
        if(this.homeCheck && this.homeThumbnails){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
            this.homeThumbnails.update()
        }
        if(this.aboutCheck && this.aboutScroll){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
            this.aboutScroll.update()
        }
        if(this.archivesCheck && this.archivesScroll){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
            this.archivesScroll.update()
        }
        if(this.strayCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.hyperCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.transitCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.arcaneCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.nebulaCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.angineCheck){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
        }
        if(this.notFoundCheck && this.missingExperience){
            this.homeThumbnails.currentIntersect = null
            if(this.customCursor){
                this.customCursor.style.transform = 'scale(1)'
                document.body.style.cursor = 'default'
            }
            this.missingExperience.update()
        }
    }
}