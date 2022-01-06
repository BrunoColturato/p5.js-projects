class Population {
    constructor() {
        this.rockets = []
        this.popsize = 25
        this.matingpool = []
    
        for(let i = 0; i < this.popsize; i++) {
            this.rockets[i] = new Rocket()
        }
    }

    evaluate = function() {        
        for(let i = 0; i < this.popsize; i++) {
            this.rockets[i].calculateFitness()
            
            if(this.rockets[i].fitness > maxfit) {
                maxfit = this.rockets[i].fitness
                bestRocketIndex = i
            }
        }

        let normfit = []
        
        for(let i = 0; i < this.popsize; i++) {
            normfit[i] = this.rockets[i].fitness / maxfit
        }
        
        this.matingpool = []
        
        // Making the individuals with best fitness to be more likely to be selected to have sex
        for(let i = 0; i < this.popsize; i++) {
            let n = normfit[i] * 100
            for(let j = 0; j < n; j++) {
                this.matingpool.push(this.rockets[i])
            }
        }
    }

    selection = function() {
        let newRockets = []

        for(let i = 0; i < this.popsize; i++) {
            // Not kill the best of all!
            if(i === bestRocketIndex) { 
                newRockets[i] = new Rocket(this.rockets[i].dna, this.rockets[i].fitness)
            }
            else {
                // Selecting dna of one element of matingpoll[] array
                let parentA = random(this.matingpool).dna
                let parentB = random(this.matingpool).dna
                let child = parentA.crossover(parentB)
                child.mutation()
    
                newRockets[i] = new Rocket(child)
            }
        }

        this.rockets = newRockets
    }
    
    run = function() {
        for(let i = 0; i < this.popsize; i++) {
            this.rockets[i].update()
            this.rockets[i].show()
        }
    }
}
