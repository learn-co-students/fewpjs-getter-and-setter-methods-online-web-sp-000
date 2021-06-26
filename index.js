class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    set diameter (value) {
        this.radius = value/2;
    }

    set circumference (value) {
        this.radius = (value/Math.PI) / 2;
    }

}