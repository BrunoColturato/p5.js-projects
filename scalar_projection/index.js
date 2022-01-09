let a
let b
let radius = 3
let originX = 100
let originY = 150

function vectorProjection(a, b) {
    // Calculating the scalar projection
    let dot = a.x * b.x + a.y * b.y // dot product
    let sp = dot / b.mag()

    // The projection must be in the same direction of b vector
    let projection = createVector(b.x, b.y)
    projection.setMag(sp)
    return projection
}

function mousePressed() {
    a.x = mouseX - originX
    a.y = mouseY - originY
}

function setup() {
    createCanvas(400, 400)
    a = createVector(100, -50)
    b = createVector(200, 50)
}

function draw() {
    background(51)
    translate(originX, originY)
    
    //Vectors
    strokeWeight(4)
    // Vector a
    stroke(255, 0, 0)
    line(0, 0, a.x, a.y)
    
    stroke(255, 0, 0)
    fill(255, 0, 0)
    ellipse(a.x, a.y, 2 * radius)
    
    // Vector b
    stroke(0, 0, 255)
    line(0, 0, b.x, b.y)
    
    stroke(0, 0, 255)
    fill(0, 0, 255)
    ellipse(b.x, b.y, 2 * radius)
    
    // Projection of a on b
    let p = vectorProjection(a, b)
    stroke(255, 255, 0)
    line(0, 0, p.x, p.y)
    
    stroke(255, 255, 0)
    fill(255, 255, 0)
    ellipse(p.x, p.y, 2 * radius)
    
    // Origin of vectors
    stroke(0, 255, 0)
    fill(0, 255, 0)
    ellipse(0, 0, 2 * radius)
    
    // Line from vector a to projection
    strokeWeight(1)
    stroke(255)
    line(a.x, a.y, p.x, p.y)
}
