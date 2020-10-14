class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(diam) {
    this.radius = diam / 2;
  }
  
  get circumference() {
    return Math.PI * this.diameter;
  }
  
  set circumference(circum) {
    this.radius = (circum / Math.PI) / 2;
  }
  
  get area() {
    return (this.radius * this.radius) * Math.PI;
  }
  
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}
