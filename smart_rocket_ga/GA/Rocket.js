class Rocket {
	constructor(dna, fitness = 0) {
		this.pos = createVector(width / 2, height)
		this.vel = createVector()
		this.acc = createVector()
		this.fitness = fitness
		this.completed = false
		this.crashed = false

		if (dna) {
			this.dna = dna
		} else {
			this.dna = new DNA()
		}
	}

	applyForce = function (force) {
		this.acc.add(force)
	}

	calculateFitness = function () {
		let d = dist(this.pos.x, this.pos.y, target.x, target.y)
		// this.fitness = 1 / d
		this.fitness = map(d, 0, width, width, 0)

		if (this.crashed && this.fitness !== maxfit) {
			this.fitness /= 10
		}
	}

	update = function () {
		let d = dist(this.pos.x, this.pos.y, target.x, target.y)
		if (d < 10) {
			this.completed = true
			this.pos.x = target.x
			this.pos.y = target.y
		}

		if (
			this.pos.x > obstacle.x &&
			this.pos.x < obstacle.x + obstacle.w &&
			this.pos.y > obstacle.y &&
			this.pos.y < obstacle.y + obstacle.h
		) {
			this.crashed = true
		}

		if (
			this.pos.x > width ||
			this.pos.x < 0 ||
			this.pos.y > height ||
			this.pos.y < 0
		) {
			this.crashed = true
		}

		if (!this.completed && !this.crashed) {
			this.applyForce(this.dna.genes[count])
			this.vel.add(this.acc)
			this.pos.add(this.vel)
			this.acc.mult(0)
			this.vel.limit(4)
		}
	}

	show = function () {
		push()
		noStroke()
		if (this.fitness === maxfit) {
			fill(255, 204, 0)
		} else {
			fill(255, 150)
		}
		translate(this.pos.x, this.pos.y)
		rotate(this.vel.heading())
		rectMode(CENTER)
		rect(0, 0, 25, 5)
		pop()
	}
}
