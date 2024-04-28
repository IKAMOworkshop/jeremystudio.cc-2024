import EventEmitter from "./EventEmitter.js";

export default class Whell extends EventEmitter{
    constructor(){
        super()

        // Setup
        this.wheelDelta = 0
        this.scroll = 0
        this.hasScroll = false

        // Cursor Movement
        window.addEventListener('wheel', (e) => {
            console.log
            this.wheelDelta = e.wheelDelta
            setTimeout(() => {
                this.hasScroll = true
            }, 1000)
        })
    }
}