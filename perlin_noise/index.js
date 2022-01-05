let inc = 0.01
let start = 0

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(51)
    noiseDetail(10, 0,5)

    /* 1D perlin noise
    let xoff = start
    noFill()
    beginShape()
    for(let x = 0; x < width; x++) {
        stroke(255)
        let y = noise(xoff) * height
        vertex(x, y)
        xoff += inc
    }

    start += inc
    endShape()
    */
    
    // 2D perlin noise
    loadPixels()
    let yoff = start
    for(let y = 0; y < height; y++) {
        let xoff = start
        for(let x = 0; x < width; x++) {
            let index = (x + y * width) * 4 //p5 pixels() stuff
            let n = noise(xoff, yoff) * 255
            pixels[index + 0] = n
            pixels[index + 1] = n
            pixels[index + 2] = n
            pixels[index + 3] = 255
            xoff += inc
        }
        yoff += inc
    }
    updatePixels()
}
