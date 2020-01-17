// Add your Circle class here
class Circle {
  constructor(radius) {
    this._radius = radius;
  }


  get radius() {
    return this._radius;
  }

  set radius(radius) {
   return this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  get circumference() {
    return Math.PI * 2 * this._radius;
  }

  get area() {
    return (this._radius * this._radius) * Math.PI;
  }

  set diameter(input) {
    return this._radius = input / 2;
  }

  set circumference(input) {
    return this._radius = input/(2*Math.PI);
  }


}