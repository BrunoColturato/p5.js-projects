class Obstacle {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.offsetX = 0
        this.offsetY = 0
        this.dragging = false
        this.rollover = false
    }

    show = function(px, py) {
        if(this.dragging) {
            this.x = px + this.offsetX
            this.y = py + this.offsetY
        }
        rect(this.x, this.y, this.w, this.h)
    }

    pressed = function(px, py) {
        if(px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
            this.dragging = true
            this.offsetX = this.x - px
            this.offsetY = this.y - py
        }
    }

    notPressed = function() {
        this.dragging = false
    }
}