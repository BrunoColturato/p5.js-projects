let inc = 0.01
let start = 0

let seek

function setup() {
    createCanvas(400, 400)
    walker = new Seek(200, 200)
}

function draw() {
    background(51)
    seek.update()
    seek.show()
}
