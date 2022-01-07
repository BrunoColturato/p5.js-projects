class Pendulum {
    constructor() {
        this.len = 200
        this.bob = createVector()
        this.angle = PI/4
        this.angleV = 0
        this.angleA = 0
    }

    update() {
        // calculating the angular acceleration of the pendulum
        let force = -1 * sin(this.angle) * g
        this.angleA = force / this.len
        this.angleV += this.angleA
        this.angle += this.angleV
        
        // friction
        this.angleV *= 0.99
        
        // calculating the position based on the angle relative to the y axis
        this.bob.x = sin(this.angle) * this.len
        this.bob.y = cos(this.angle) * this.len
    }

    show() {
        stroke(255)
        strokeWeight(5)
        line(0, 0, this.bob.x, this.bob.y)
        fill(120)
        circle(this.bob.x, this.bob.y, 20*2)
    }
}
