class Target {
    constructor(x, y, d) {
        this.x = x
        this.y = y
        this.d = d
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
        ellipse(this.x, this.y, this.d, this.d)
    }

    pressed = function(px, py) {
        if(dist(this.x, this.y, px, py) < this.d/2) {
            this.dragging = true
            this.offsetX = this.x - px
            this.offsetY = this.y - py
        }
    }

    notPressed = function() {
        this.dragging = false
    }
}