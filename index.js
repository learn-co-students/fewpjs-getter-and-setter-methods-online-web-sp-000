// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
        
    }
    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return (this.radius * 2) * 3.141
    }

    get area() {
        return (this.radius * this.radius) * 3.141
    }
    set diameter(dia) {
        this.radius = dia / 2
    }

    set circumference(cir) {
         this.radius = (cir / 3.141) / 2
    }

    set area(ar) {
         this.radius = (ar / 3.141) * .5
    }
    
}