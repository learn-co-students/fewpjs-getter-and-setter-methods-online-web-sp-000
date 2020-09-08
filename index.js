// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  get diameter() {
    return this.radius * 2
  }
  
  get circumference() {
    return 2 * 3.14 * this.radius
  }
  
  get area() {
    return 3.14 * Math.pow(this.radius,2)
  }
  
  set diameter(dia) {
    this.radius = dia/2
  }
  
  set circumference(num) {
    this.radius = (num/3.14)/2
  }
}