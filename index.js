// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius*2
    }
    get circumference() {
        return Math.PI*this.diameter
    }
    get area() {
        return Math.PI*(this.radius*this.radius)
    }
    set diameter(arg) {
        this.radius = arg / 2
    }
    set circumference(arg) {
        this.radius = arg / (Math.PI * 2)
    }
    set area(arg) {
        this.radius = Math.sqrt(arg / Math.PI) 
    }
}