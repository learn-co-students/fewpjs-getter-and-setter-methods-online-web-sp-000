class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this._diameter = this.radius * 2
  }

  set diameter(diameter) {
    this._diameter = diameter
    this.radius = this._diameter / 2
  }

  get circumference() {
    return this._circumference = Math.PI * this.diameter
    console.log(pi * this.diameter)
  }

  set circumference(circumference) {
    this._circumference = circumference
    this.radius = (this._circumference / Math.PI) / 2
  }

  get area() {
    return this._area = Math.PI * (this.radius ** 2)
  }
}
