// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter(){
    return this.radius * 2;
  }
  get circumference(){
    return this.diameter * Math.PI;
  }

  get area(){
    return Math.PI * (this.radius ** 2);
  }

  set diameter(x){
    this.radius = x / 2;
  }

  set circumference(x){
    this.radius = (x / Math.PI) / 2;
  }

  set area(x){
    this.radius = Math.sqrt(x / Math.PI);
  }
}
