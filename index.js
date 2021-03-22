class Circle {
    constructor (radius) {
        this.radius = radius
    }

    get diameter () {
        return this.radius * 2
    }

    get circumference () {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set diameter (dia) {
        this.radius = dia/2
    }

    set circumference (circumfr) {
        this.radius = (circumfr/Math.PI)/2
    }

    set area(radius) {
        return Math.PI * (radius * radius)
    }
}