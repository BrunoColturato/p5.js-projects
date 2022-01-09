function swap(a, i, j) {
    let aux = a[i]
    a[i] = a[j]
    a[j] = aux
}

function calcDistance(cities, order) {
    let totalDist = 0

    for (let i = 0; i < cities.length - 1; i++) {
        let cityA = cities[order[i]]
        let cityB = cities[order[i + 1]]

        let d = dist(cityA.x, cityA.y, cityB.x, cityB.y)
        totalDist += d
    }

    return totalDist
}

function nextLexicographicOrder(permutation) {
    // Source: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

    // Copy current permutation (order)
    let P = permutation.slice()

    // Step 1: Find the largest x such that P[x]<P[x+1].
    //(If there is no such x, P is the last permutation.)
    let largestX = -1
    for (let x = 0; x < P.length - 1; x++) {
        if (P[x] < P[x + 1]) {
            largestX = x
        }
    }

    if (largestX === -1) {
        return P
    }

    // Step 2: Find the largest y such that P[x]<P[y].
    let largestY = 0
    for (let y = 0; y < P.length; y++) {
        if (P[largestX] < P[y]) {
            largestY = y
        }
    }

    // Step 3: Swap P[x] and P[y].
    swap(P, largestX, largestY)

    // Step 4: Reverse P[x+1 .. n].
    let lastElements = P.splice(largestX + 1)
    lastElements.reverse()
    P = P.concat(lastElements)

    return P
}

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1
}
