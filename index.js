// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * Math.PI;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}