class Population {
    constructor(size, defaultOrder) {
        this.pop = []
        this.fitness = []
        this.normFitness = []
        this.bestFit = 0
        this.bestIndex = 0

        for (let i = 0; i < size; i++) {
            this.pop[i] = shuffle(defaultOrder)
            this.fitness[i] = 0
            this.normFitness[i] = 0
        }
    }

    evaluate(cities) {
        // Calculate the distance for each order (individual in population)
        for (let i = 0; i < this.pop.length; i++) {
            // Calculate total distance for the pop[i] order
            let totalDist = 0
            let order = this.pop[i]
            for (let j = 0; j < cities.length - 1; j++) {
                // Calculate distance between two cities
                let cityA = cities[order[j]]
                let cityB = cities[order[j + 1]]

                let d = dist(cityA.x, cityA.y, cityB.x, cityB.y)
                totalDist += d
            }

            // Calculate fitness
            this.fitness[i] = (1000 * 1) / (totalDist + 1)

            // Check if it is better than the current best
            if (this.fitness[i] > this.bestFit) {
                this.bestFit = this.fitness[i]
                this.bestIndex = i

                console.log(this.bestFit)
            }
        }
    }

    getBestOrder() {
        return this.pop[this.bestIndex]
    }

    updateNormFitness() {
        // Get total fitness
        let total = 0
        for (let i = 0; i < this.fitness.length; i++) {
            total += this.fitness[i]
        }

        // Normalize
        for (let i = 0; i < this.fitness.length; i++) {
            this.normFitness[i] = this.fitness[i] / total
        }
    }

    // Pick one path. The greater the fitness, the greater the probability fo been chosen
    pickOne() {
        let index = 0
        let r = random(1)

        while (r > 0) {
            r -= this.normFitness[index]
            index++
        }
        index--

        // Return a copy of the order
        return this.pop[index].slice()
    }

    // Generates new population
    nextGeneration() {
        this.updateNormFitness()

        let newPop = []

        for (let i = 0; i < this.pop.length; i++) {
            if (i === this.bestIndex) {
                newPop[i] = this.pop[i]
                continue
            }

            let orderA = this.pickOne()
            let orderB = this.pickOne()
            let order = this.crossover(orderA, orderB)
            this.mutate(order)
            newPop[i] = order
        }

        this.pop = newPop
    }

    // Mutate an order by swapping elements
    mutate(order) {
        // The number of swaps is random
        let nSwaps = floor(random(order.length / 2))

        for (let k = 0; k < nSwaps; k++) {
            let i = floor(random(order.length))
            let j = floor(random(order.length))

            // swap
            let aux = order[i]
            order[i] = order[j]
            order[j] = aux
        }
    }

    crossover(orderA, orderB) {
        // Pick a subarray of orderA
        let start = floor(random(orderA.length))
        let end = floor(random(start + 1, orderA.length))
        
        let order = orderA.slice(start, end)

        // Fill the rest with orderB
        for(let i = 0; i < orderB.length; i++) {
            let city = orderB[i]
            if(!order.includes(city)) {
                order.push(city)
            }
        }

        return order
    }
}
