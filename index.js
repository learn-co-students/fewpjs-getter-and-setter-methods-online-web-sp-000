// Add your Circle class here
let pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(x) {
        this.radius = x / 2;
    }

    get circumference() {
        return (this.radius * 2) * pi;
    }

    set circumference(x) {
        this.radius = x / (pi * 2);
    }

    get area() {
        return (this.radius * this.radius) * pi;
    }

    set area(x) {
        // this.radius = (x * x) * 2;
        this.radius = Math.sqrt(x / 2);
    }
}
