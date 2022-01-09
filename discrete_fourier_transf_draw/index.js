const USER = 0
const FOURIER = 1

let drawOffset = 400

let time = 0
let wave = []
let drawing = []
let STATE = -1

// fourier values
let fx = []
let fX = []

let text

function setup() {
    createCanvas(1000, 500)
    text = createP()
}

function draw() {
    background(0)
    text.html("Draw something on the screen to see what happens!")

    if (STATE === USER) {
        let mousePos = createVector(mouseX - width / 2, mouseY - height / 2)
        drawing.push(mousePos)

        beginShape()
        noFill()
        stroke(255, 204, 100)
        for (let i = 0; i < drawing.length; i++) {
            vertex(drawing[i].x + width / 2, drawing[i].y + height / 2)
        }
        endShape()
    } else if (STATE === FOURIER) {
        // Draw circles and lines to them
        let serie = fourierSerie(150, height / 2, 0, fX)
        wave.unshift(serie)

        // resulting wave
        line(serie.x, serie.y, wave[0].x + drawOffset, wave[0].y)

        beginShape()
        noFill()
        stroke(255, 204, 100)
        for (let i = 0; i < wave.length; i++) {
            vertex(wave[i].x + drawOffset, wave[i].y)
        }
        endShape()

        // limit the size of wave
        if (wave.length > 1000) {
            wave.pop()
        }

        // time step is proportional to the amount of samples we have of our signal
        time += (2 * PI) / fX.length
    }
}

function mousePressed() {
    STATE = USER
    drawing = []
    fx = []
    fX = []
    time = 0
    wave = []
}

function mouseReleased() {
    STATE = FOURIER

    for (let i = 0; i < drawing.length; i++) {
        let c = new Complex(drawing[i].x, drawing[i].y)
        fx.push(c)
    }

    fX = dft(fx)

    fX.sort((a, b) => b.amp - a.amp)
}
