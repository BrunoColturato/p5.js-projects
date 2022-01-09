class Complex {
    constructor(re, im) {
        this.re = re
        this.im = im
    }

    add(c) {
        this.re += c.re
        this.im += c.im
    }

    mult(c) {
        const re = this.re * c.re - this.im * c.im
        const im = this.re * c.im + this.im * c.re
        return new Complex(re, im)
    }

    amplitude() {
        return sqrt(this.re * this.re + this.im * this.im)
    }

    phase() {
        return atan2(this.im, this.re)
    }
}