// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
      }
    
      get diameter(){
        return this.radius * 2
      }
    
      set diameter(newdiameter){
        this.radius = newdiameter/2
      }
      get circumference(){
        return Math.PI * this.diameter
      }
    
      set circumference(newcirc){
        this.diameter = newcirc/Math.PI
      }
    
      get area(){
        return Math.PI * this.radius**2
      }
    
      set area(newarea){
        this.radius = Math.sqrt(newarea/Math.PI)
      }

}
