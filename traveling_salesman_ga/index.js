let cities = []
let defaultOrder = []
let pop
let numberCities = 15
let popSize = 100
let generation = 0
let genP

function setup() {
    createCanvas(400, 400)

    // Init values
    // cities = generateCities2()
    cities = generateCities(numberCities)
    defaultOrder = generateDefaultOrder(cities.length)

    // Init population
    pop = new Population(popSize, defaultOrder)

    genP = createP()
}

function draw() {
    background(51)

    pop.evaluate(cities)
    drawBestPath(cities, pop)
    pop.nextGeneration()

    genP.html("Generation: " + generation)
    generation++
}
