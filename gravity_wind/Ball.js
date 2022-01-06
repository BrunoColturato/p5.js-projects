class Ball {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
    }

    applyForce(force) {
        this.acc.add(force)
    }

    edgeCollision() {
        // down border
        if(this.pos.y > height - 12) {
            this.pos.y = height - 12
            this.vel.y *= -1
        }

        // right border
        if(this.pos.x > width - 12) {
            this.pos.x = width - 12
            this.vel.x *= -1
        }
        // left border
        else if(this.pos.x < 0 + 12){
            this.pos.x = 0 + 12
            this.vel.x *= -1
        }
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)

        // one force only accelerates if is continuously applied
        this.acc.set(0, 0)
    }

    show() {
        ellipse(this.pos.x, this.pos.y, 12*2)
    }
}