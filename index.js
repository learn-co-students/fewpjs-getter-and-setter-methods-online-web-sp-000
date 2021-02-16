class Circle {
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return Math.PI * this.diameter
  }

  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(newRadius){
    this.radius = newRadius / 2;
  }

  set circumference(newCircumference){
    this.radius = (newCircumference) / (2 * Math.PI);
  }

  set area(newRadius){
    this.radius = Math.PI / (newRadius * newRadius);
  }
}
