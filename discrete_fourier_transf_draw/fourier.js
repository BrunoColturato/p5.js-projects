// Dicrete Fourier Transform
function dft(x) {
    let X = []
    let N = x.length

    let sum = new Complex(0, 0)
    for (let k = 0; k < N; k++) {
        for (let n = 0; n < N; n++) {
            let theta = (2 * PI * k * n) / N

            let c = new Complex(cos(theta), -1*sin(theta))
            sum.add(x[n].mult(c))
        }

        sum.re /= N
        sum.im /= N

        let re = sum.re
        let im = sum.im
        let freq = k
        let amp = sum.amplitude()
        let phase = sum.phase()

        X[k] = { re, im, freq, amp, phase }
    }

    return X
}

// Fourier serie is the "inverse" of DFT
function fourierSerie(x, y, rotate, dft) {
    for (let i = 0; i < dft.length; i++) {
        let prevX = x
        let prevY = y

        let r = dft[i].amp
        let freq = dft[i].freq
        let phase = dft[i].phase

        x += r * cos(freq * time + phase + rotate)
        y += r * sin(freq * time + phase + rotate)

        noFill()
        stroke(255)
        ellipse(prevX, prevY, 2 * r)

        fill(255)
        line(prevX, prevY, x, y)
        ellipse(x, y, 5)
    }

    return createVector(x, y)
}
