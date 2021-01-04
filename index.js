// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    set circumference(newCircumference) {
        this.diameter = newCircumference / Math.PI;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    set area(newArea) {
        this.radius = Math.sqrt((newArea / Math.PI));
    }
}