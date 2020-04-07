// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI

    }

    get area() {
        return (this.radius ** 2) * Math.PI

    }

    set diameter(input) {
        this.radius = input / 2
    }

    set circumference(input) {
        this.radius = (input / Math.PI) / 2

    }



}