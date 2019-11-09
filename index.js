// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get circumference() {
    return Math.PI * 2 * this.radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get area() {
    return Math.PI * this.radius**2
  }
  set circumference(n) {
    this.radius = n / (2 * Math.PI);
  }
  set area(n) {
    this.radius = Math.sqrt(n) / Math.PI;
  }
  set diameter(n) {
    this.radius = n / 2
  }
}
