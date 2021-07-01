// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  
  // calculate radius based on input value and 
    // set this.radius accordingly
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(circumference){
    this.radius = circumference / 2 / Math.PI;
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }

  set area(area){
    this.radius = sqrt(area / Math.PI);
  }
}