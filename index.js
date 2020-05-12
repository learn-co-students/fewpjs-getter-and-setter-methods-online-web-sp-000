// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this._diameter = (2 * this.radius)
    }
  
    get circumference() {
      return this._circumference = (2 * Math.PI * this.radius)
    }
  
    get area(){
      return this._area = (this.radius * this.radius * Math.PI)
    }
  
    set diameter(value) {
      this._diameter = value
      return this.radius = this._diameter / 2
    }
  
    set circumference(value) {
      this._circumference = value
      return this.radius = this._circumference / 2 / Math.PI
    }
  
  }