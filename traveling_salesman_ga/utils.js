function generateCities2() {
    let cities = [
        createVector(156.76209515398025, 378.71176084381915),
        createVector(154.06582279498627, 293.6496278199747),
        createVector(195.150714089027, 349.2487762115104),
        createVector(113.67621295381734, 224.18384228714388),
        createVector(50.63310787179105, 259.5030218657734),
        createVector(277.20495061700905, 346.83099729006693),
        createVector(372.7416779429894, 62.98850044223202),
        createVector(206.55349778983754, 10.868557493481795),
        createVector(72.58169406966812, 254.6402730288785),
        createVector(330.32816795806093, 101.77939856387205),
        createVector(179.1221084014381, 386.7925529610899),
        createVector(194.2714639214102, 90.52003774931842),
        createVector(379.7270495640349, 22.86097957328607),
        createVector(277.745330775904, 214.12553538389992),
        createVector(353.73318961546124, 42.57971571933521),
        createVector(101.89171886819625, 97.48721218691632),
        createVector(245.31572913526128, 363.1649338326651),
        createVector(203.03529242721876, 269.9829156573752),
        createVector(148.94387093751678, 122.9026798073282),
        createVector(157.39554053304073, 280.45529934887327)
    ]

    return cities 
}

function generateCities(numberCities) {
    let cities = []

    for (let i = 0; i < numberCities; i++) {
        let randomX = random(10, width - 10)
        let randomY = random(10, height - 10)
        
        cities[i] = createVector(randomX, randomY)
    }

    return cities 
}

function generateDefaultOrder(numberCities) {
    let defaultOrder = []

    for (let i = 0; i < numberCities; i++) {
        defaultOrder[i] = i
    }

    return defaultOrder
}

function drawBestPath(cities, pop) {
    // Get best order so far
    let bestOrder = pop.getBestOrder()
    
    // Draw the cities
    stroke(255, 255, 0)
    fill(255, 255, 0)
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 5 * 2)
    }

    // Draw the path
    stroke(255, 255, 0)
    strokeWeight(2)
    noFill()
    beginShape()
    for (let i = 0; i < cities.length; i++) {
        let k = bestOrder[i]
        vertex(cities[k].x, cities[k].y)
    }
    endShape()
}