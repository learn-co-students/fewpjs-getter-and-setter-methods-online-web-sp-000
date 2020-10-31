// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    return (Math.PI * this.diameter);
  }

  get area(){
    return Math.PI * (this.radius ** 2);
  }

  set diameter(diam){
    this.radius = diam / 2;
  }

  set circumference(circ){
    this.radius = (circ / Math.PI) /2 ;
  }

  set area(iArea){
    this.radius = Math.sqrt(iArea / Math.PI);
  }
}