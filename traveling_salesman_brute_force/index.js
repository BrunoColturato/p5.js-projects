let cities = []
let citiesOrder = []
let numberCities = 7
let bestDist
let bestPath
let permutations = 0
let totalPermutations
let text

function setup() {
    createCanvas(400, 500)

    for (let i = 0; i < numberCities; i++) {
        cities[i] = createVector(
            random(10, width - 10),
            random(10, height / 2 - 10)
        )
        citiesOrder[i] = i
    }

    bestDist = calcDistance(cities, citiesOrder)
    bestPath = citiesOrder.slice()
    console.log(bestDist)

    text = createP().style('font-size', '30px')
    totalPermutations = factorial(numberCities)
}

function draw() {
    background(51)

    /**** Draw the best path ****/
    stroke(255, 255, 0)
    fill(255, 255, 0)
    // Draw the cities
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 5 * 2)
    }

    // Draw the best path so far
    stroke(255, 255, 0)
    strokeWeight(2)
    noFill()
    beginShape()
    for (let i = 0; i < citiesOrder.length; i++) {
        let k = bestPath[i]
        vertex(cities[k].x, cities[k].y)
    }
    endShape()

    /**** Draw the testing paths ****/
    translate(0, height / 2)

    fill(255)
    stroke(255)
    // Draw the cities
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 5 * 2)
    }

    // Draw path between cities
    noFill()
    stroke(255)
    strokeWeight(1)
    beginShape()
    for (let i = 0; i < citiesOrder.length; i++) {
        let k = citiesOrder[i]
        vertex(cities[k].x, cities[k].y)
    }
    endShape()

    /**** Percent text *****/
    let percent = ((permutations / totalPermutations) * 100).toFixed(2)
    text.html(percent + "% completed")

    citiesOrder = nextLexicographicOrder(citiesOrder)

    // Recalculate the best path
    let newDist = calcDistance(cities, citiesOrder)
    if (newDist < bestDist) {
        bestDist = newDist
        bestPath = citiesOrder.slice()
        console.log(bestDist)
    }

    // Finishing condition
    permutations++

    if (permutations > totalPermutations) {
        noLoop()
        console.log("Finished")
    }
}
