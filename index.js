// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius 
    }

    get diameter(){
        return this.radius * 2 
    }

    set diameter(val){
        this.radius = val / 2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    set circumference(val){
        this.diameter = val / Math.PI 
    }

    get area(){
        return Math.PI * (this.radius ** 2)  
    }
}