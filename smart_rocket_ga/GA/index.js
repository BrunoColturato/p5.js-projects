let lifespan = 400 // Amout of frames one rocket will live
let fr = 60 // Frame rate
let population
let count = 0
let generation = 0
let countP
let maxfitP
let genP
let target
let obstacle
let maxforce = 0.2
let bestRocketIndex = 0
let maxfit = 0

let obsx = 100
let obsy = 150
let obsw = 200
let obsh = 10

function setup() {
	let cnv = createCanvas(400, 300)
    cnv.position(window.screen.width/2 - width/2, 100)
    frameRate(fr)
    population = new Population()
    target = new Target(width/2, 50, 16)
    obstacle = new Obstacle(obsx, obsy, obsw, obsh)
    countP = createP()
    maxfitP = createP()
    genP = createP()
}

function draw() {
	background(0)
    population.run()
    countP.html(`Frame count: ${count}`)
    maxfitP.html(`Maxfit: ${maxfit}`)
    genP.html(`Generation: ${generation}`)

    count++

    if(count === lifespan) {
        population.evaluate()
        population.selection()
        generation++
        count = 0 
    }
    
    obstacle.show(mouseX, mouseY)
    target.show(mouseX, mouseY)
}

function mousePressed() {
    obstacle.pressed(mouseX, mouseY)
    target.pressed(mouseX, mouseY)
}

function mouseReleased() {
    obstacle.notPressed()
    target.notPressed()
}
