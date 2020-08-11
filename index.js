// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area() {
    return Math.PI * (this.radius * this.radius);
  }

  set diameter(newDiameter) {
    return this.radius = (newDiameter/2)
  }

  set circumference(newCircumference) {
    return this.radius = (newCircumference/(2*Math.PI))
  }

  set area(newArea) {
    return this.radius = Math.sqrt(newArea/Math.pi)
  }

}
