class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2 
    }
    get circumference() {
        return 3.14 * this.diameter
    }
    get area() {
        return 3.14 * (this.radius * this.radius)
    }

    set diameter(num) {
        this.diameter = num 
    }

    set circumference(num) {
        this.circumference = num
    }

    set area(num) {
        this.area = num
    }
}