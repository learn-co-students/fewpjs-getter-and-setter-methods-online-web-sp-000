class Circle {
  constructor(radius) {
    this.radius = radius;
    this.pi = Math.PI;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return (this.radius * 2) * this.pi;
  }

  get area() {
    return (this.radius ** 2) * this.pi;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  set circumference(value) {
    this.radius = (value / this.pi) / 2;
  }

  set area(value) {
    this.radius = Math.sqrt(value / this.pi);
  }
}