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
            console.log
            this.wheelDelta = e.wheelDelta
        })
    }
    update(){
        window.addEventListener('mousewheel', (e) => {
            console.log
            this.wheelDelta = e.wheelDelta
        })
    }
}