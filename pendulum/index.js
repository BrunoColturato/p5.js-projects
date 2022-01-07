let p
let g = 1

function setup() {
    createCanvas(500, 400)
    angleMode(RADIANS)
    p = new Pendulum()
}

function draw() {
    background(51)
    translate(width/2, 0)
    p.update()
    p.show()
}
