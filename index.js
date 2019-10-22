// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get circumference() {
        return 2 * this.radius * pi
    }

    get area() {
        return this.radius * this.radius * pi
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea/pi)
    }

    set circumference(newCircumference) {
        this.radius = newCircumference/pi/2
    }

}