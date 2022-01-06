let ball
let g
let w

function setup() {
    createCanvas(400, 400)
    ball = new Ball(200, 200)
    g = createVector(0, 0.5)
    w = createVector(0.5, 0)

}

function draw() {
    background(51)
    
    if(mouseIsPressed) {
        ball.applyForce(w)
    }

    ball.applyForce(g)
    ball.update()
    ball.edgeCollision()
    ball.show()
}
