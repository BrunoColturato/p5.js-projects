let inc = 0.01
let start = 0

let walker

function setup() {
    createCanvas(400, 400)
    background(51)
    walker = new Walker(200, 200)
}

function draw() {
    walker.update()
    walker.show()
}
