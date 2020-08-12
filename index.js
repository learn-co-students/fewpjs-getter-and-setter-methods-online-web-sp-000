// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    set circumference(value) {
        this.diameter = value / Math.PI;
    }

    set area(value) {
        this.radius = Math.sqrt(value / Math.PI)
    }
}