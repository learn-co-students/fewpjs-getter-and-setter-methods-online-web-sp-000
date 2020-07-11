// Add your Circle class here


class Circle {
    constructor(radius){
        this.radius = radius;
      
    }

    get pi(){
     return Math.PI
    }
        
    get diameter(){
        return (this.radius * 2)
    }

    get circumference(){
        return (this.pi * this.diameter)
    }

    get area(){
        return (this.pi * (this.radius * this.radius))
    }

    set diameter(value){
        return this.radius = value / 2
    }
    set circumference(value){
        this.radius = (value / (this.pi *2))
    }

    set area(value){
        this.radius = (this.pi * (this.radius / this.radius))
    }
}
