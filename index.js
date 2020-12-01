// Add your Circle class here
// First, let's create a class of Circle
// Circle will accept 1 parameter, radius, and use this.radius to store the value
// Use Math.PI to get an accurate measurement of pi (π)
// Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
// Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the
// radius based on the input value and set this.radius accordingly

const pi = Math.PI

class Circle {
  constructor( radius ) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter( diameter ) {
    this.radius = diameter / 2
  }

  get circumference() {
    return ( this.radius * 2 ) * pi
  }

  set circumference( circumference ) {
    this.radius = circumference / ( pi * 2 )
  }

  get area() {
    return pi * ( this.radius * this.radius )
  }

  set area( area ) {
    this.radius = Math.sqrt( area / pi )
  }
}
