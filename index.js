// Add your Circle class here

class Circle {
    
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.radius * 2 * 3.14
    }

    get area() {
        return this.radius ** 2 * 3.14
    }

    set diameter(d) {
        this.radius = d / 2
    }

    set circumference(c) {
        this.radius = c / 6.28
    }
}