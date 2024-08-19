import EventEmitter from "./EventEmitter.js"
import VirtualScroll from 'virtual-scroll'

export default class Wheel extends EventEmitter{
    constructor(){
        super()

        this.scroller = new VirtualScroll()

        // Setup
        this.wheelDelta = 0
        this.scroll = 0
        this.hasScroll = false

        // Wheel Movement
        this.scroller.on(event => {
            this.wheelDelta = event.deltaY
        })
        // window.addEventListener('mousewheel', (e) => {
        //     this.wheelDelta = e.wheelDelta
        // })
        
        // window.addEventListener('touchmove', (e) => {        
        //     this.wheelDelta = e.changedTouches[0].screenY * -.1
        // })
    }
    update(){
        // window.addEventListener('mousewheel', (e) => {
        //     this.wheelDelta = e.wheelDelta
        // })
        this.scroller.on(event => {
            this.wheelDelta = event.deltaY
        })
    }
}