// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return Math.PI * (this.radius * 2);
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  get area() {
    return Math.PI * (this.radius ** 2);
  }
}
