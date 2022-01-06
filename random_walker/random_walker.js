class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.prev = this.pos.copy() // previous position
    }
    
    update() {
        this.prev.set(this.pos)
        
        // random step
        let step = p5.Vector.random2D()

        let r = random(100)
        
        // low probability of long steps
        if(r < 1) {
            step.setMag(random(25, 100))
        }
        else {
            step.setMag(2)
        }
        
        this.pos.add(step)
    }

    show() {
        stroke(255)
        strokeWeight(2)
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    }
}