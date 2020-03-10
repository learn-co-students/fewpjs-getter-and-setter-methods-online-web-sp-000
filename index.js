class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
       return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
     }

    get area() {
        return Math.PI * (this.radius)**2;
     }

    set diameter(newDiameter) {
         this.radius = newDiameter / 2;
     }

    set circumference(newCircum) {
        this.radius = (newCircum / Math.PI) / 2;
    }

    set area(newArea) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}