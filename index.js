// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return this.radius * 2 * Math.PI
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(input){
        this.radius = input / 2
    }

    set circumference(input){
        this.radius = (input / Math.PI / 2)
    }

    set area(input){
        input = input / Math.PI
        this.radius = Math.sqrt(input)
    }


}