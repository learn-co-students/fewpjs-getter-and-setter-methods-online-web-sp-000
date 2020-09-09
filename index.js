// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;

    }

    get diameter() {
        return this.radius * 2 
    }
    
    get circumference() {
        return this.radius * Math.PI * 2
    }

    get area() {
       return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(value) {
        this.radius = value / 2
    }
    set circumference(value) {
        this.radius = (value / 2) / Math.PI
    }
    set area(value) {
        this.radius = Math.sqrt(value / Math.PI)
    }
}