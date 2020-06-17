// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius    
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newC) {
        this.radius = newC / (Math.PI * 2)
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}