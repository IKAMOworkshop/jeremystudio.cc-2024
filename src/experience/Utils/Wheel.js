import EventEmitter from "./EventEmitter.js";

export default class Whell extends EventEmitter{
    constructor(){
        super()

        // Setup
        this.wheelDelta = 0
        this.scroll = 0
        this.hasScroll = false

        // Cursor Movement
        window.addEventListener('mousewheel', (e) => {
            console.log
            this.wheelDelta = e.wheelDelta
        })
    }
}