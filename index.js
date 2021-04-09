class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    set circumference(circ) {
        this.diameter = circ / Math.PI;
    }

    get area() {
        return (this.radius * this.radius) * Math.PI;
    }
}