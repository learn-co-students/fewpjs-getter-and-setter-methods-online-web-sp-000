// Add your Circle class here
const pi = Math.PI

class Circle {

  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return 2*pi*this.radius
  }

  get area(){
    return pi*(Math.pow(this.radius,2))
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  set circumference(circumference){
    this.radius = circumference / (2*pi)
  }
}
