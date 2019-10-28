// Add your Circle class here
class Circle {
    constructor(radius){
      this.radius = radius
    }
    
    set diameter(diameter){
        this.radius = diameter/2
    }
    get diameter(){
      return this.radius * 2
    }
    set circumference(circumference){
        this.diameter = circumference/Math.PI
    }
    get circumference(){
      return Math.PI * this.diameter
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
    get area(){
      return Math.PI * this.radius**2
    }
  }