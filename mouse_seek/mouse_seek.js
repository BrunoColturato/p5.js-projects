class Seek {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
    }
    
    update() {
        let mouse = createVector(mouseX, mouseY)
        this.acc = p5.Vector.sub(mouse, this.pos)
        this.acc.setMag(2)

        this.vel.add(this.acc)
        this.vel.limit(4)

        this.pos.add(this.vel)
    }

    show() {
        stroke(255)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, 20, 20)
    }
}