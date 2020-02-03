// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  /*get radius(){
    return this.radius;
  }
  set radius(radius){
    this.radius = radius;
  }*/
  
  get diameter(){
    return this.radius * 2;
  }
  
  set diameter(diameter){
    if (diameter > 0)
      this.radius = diameter/2;
  }
  
  get circumference(){
    return this.diameter * Math.PI;
  }
  
  set circumference(circumference){
    this.radius = circumference/(Math.PI * 2);
  }
  get area(){
    return this.radius * this.radius * Math.PI;
  }
  /*get radius(){
    return this.radius;
  }
  set radius(radius){
    this.radius = radius;
  }*/
}