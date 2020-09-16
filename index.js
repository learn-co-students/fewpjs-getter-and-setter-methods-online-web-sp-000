class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(d) {
    this.radius = d / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(circ) {
    this.radius = circ / (Math.PI * 2);
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}
