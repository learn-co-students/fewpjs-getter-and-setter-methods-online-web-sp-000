// Add your Circle class here
const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius; 
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(x) {
        this.radius = x/2;
    }
    get circumference() {
        return pi * (this.radius * 2);
    }
    set circumference(x) {
        this.radius = (x / pi) / 2;
    }
    get area() {
        return pi * (this.radius ** 2);
    }
    set area(x) {
        
    }
}