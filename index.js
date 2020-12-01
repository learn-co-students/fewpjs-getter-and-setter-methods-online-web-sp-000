// Add your Circle class here
// First, let's create a class of Circle
// Circle will accept 1 parameter, radius, and use this.radius to store the value
// Use Math.PI to get an accurate measurement of pi (π)
// Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
// Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the
// radius based on the input value and set this.radius accordingly

class Circle {
  constructor(radius) {
  this.radius = radius;
}

get diameter(diameter){
  this.diameter = 2*radius;
}

get circumference(circumference){
  this.circumference = 2*diameter;
}

get area(area){
  this.area = Math.Pi * radius**2;
}
}
