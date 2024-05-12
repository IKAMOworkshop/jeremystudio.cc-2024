import EventEmitter from "./EventEmitter.js";

export default class Wheel extends EventEmitter{
    constructor(){
        super()

        // Setup
        this.wheelDelta = 0
        this.scroll = 0
        this.hasScroll = false

        // Wheel Movement
        window.addEventListener('mousewheel', (e) => {
            this.wheelDelta = e.wheelDelta
        })

        
        window.addEventListener('touchmove', (e) => {        
            this.wheelDelta = e.changedTouches[0].screenY * .1
        })
    }
    update(){
        window.addEventListener('mousewheel', (e) => {
            console.log
            this.wheelDelta = e.wheelDelta
        })
    }
}