// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }



  get diameter() {
    return this.radius * 2
  }

  set diameter(newDiameter) {
    this.radius = newDiameter * 0.5
  }

  get circumference() {
    return Math.PI * (this.radius * 2)
  }

  set circumference(newCirc) {
    this.radius = newCirc / (2 * Math.PI)
  }

  get area() {
    return (this.radius * this.radius) * Math.PI
  }


}
