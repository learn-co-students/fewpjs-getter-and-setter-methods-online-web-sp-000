class Circle {
  constructor(radius) {
    this.radius = radius
  }
  set diameter(d) {
    this.radius = d/2
  }
  set circumference(cir) {
    this.radius = cir/(Math.PI * 2)
  } 
  set  area(a) {
    this.radius = Math.sqrt(a/pi)
  }
  
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.diameter * Math.PI; 
  } 
  get area() {
    return Math.PI * this.radius**2
  }
}