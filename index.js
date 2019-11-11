class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(input) {
    this.radius = input / 2;
  }

  set circumference(input) {
    this.diameter = input / Math.PI;
  }

  set area(input) {
    this.radius = Math.sqrt(input / Math.PI);
  }


}
