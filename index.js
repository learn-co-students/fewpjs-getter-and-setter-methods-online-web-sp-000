// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius; 
  }
  get diameter(){
    return 2 * this.radius; 
  }
  get circumference(){
    return (2 * this.radius * Math.PI); 
  }
  get area(){
    return (this.radius ** 2 * Math.PI);  
  }
  set diameter(newdiam){
    this.radius = (newdiam/2); 
  }
  set circumference(newcircum){
    this.radius = (newcircum/Math.PI)/2; 
  }
  set area(newarea){
    this.radius = Math.sqrt(newarea/Math.PI); 
  }
}