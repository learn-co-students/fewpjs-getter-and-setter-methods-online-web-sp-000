// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius*2
  }

  set diameter(d){
    this.radius = d/2
  }

  get circumference(){
    return 2*this.radius*Math.PI
  }

  set circumference(c){
    this.radius = c/(2*Math.PI)
  }

  get area(){
    return Math.PI*this.radius**2
  }
}
