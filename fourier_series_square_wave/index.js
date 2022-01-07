/*
    Fourier series for square wave:
        sum from n=1 to n=inf of [sin((2*n-1)*x) / (2*n-1)] 
*/

let time = 0
let wave = []
let slider
let printN

function setup() {
    createCanvas(600, 400)
    slider = createSlider(1, 10, 1)
    printN = createP()
}

function draw() {
    background(0)
    translate(150, 200)

    // Draw circles and lines to them
    let x = 0
    let y = 0
    let prevX = x
    let prevY = y
    
    for(let i = 1; i < slider.value() + 1; i++) {
        prevX = x
        prevY = y
        
        let n = 2 * i - 1
        let r = 240 * (1 / (n * PI))
        x += r * cos(n * time)
        y += r * sin(n * time)
        
        noFill()
        stroke(255)
        ellipse(prevX, prevY, 2*r)
        
        fill(255)
        line(prevX, prevY, x, y)
        ellipse(x, y, 5)
    }
    
    // resulting wave
    wave.unshift(y)
    line(x, y, 0+200, wave[0]) //0+200 because of the following translate()
    
    translate(200, 0)
    beginShape()
    noFill()
    stroke(255)
    for(let i = 0; i < wave.length; i++) {
       vertex(i, wave[i]) 
    }
    endShape()

    // limit the size of wave
    if(wave.length > 250) {
        wave.pop()
    }

    // print value of n
    printN.html(`n = ${slider.value()}`)

    time += 0.03
}
