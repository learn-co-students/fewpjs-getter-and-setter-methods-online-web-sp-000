// Building on this concept, we're going to build our own shape calculator!

// First, let's create a class of Circle
// Circle will accept 1 parameter, radiusius, and use this.radiusius to store the value
// Use Math.PI to get an accurate measurement of pi (π)
// Define getter methods for diameter, circumference, and area which will calculate each value using this.radiusius and pi
// Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radiusius based on the input value and set this.radiusius accordingly
// For reference, here are the formulas for calculating diameter, circumference and area:

// Diameter = radiusius • 2
// Circumference = π • diameter
// Area = π • radiusius2
// Don't forget about PEMDAS!

// All instances of Circle should be able to calculate the diameter, circumference, and area based on the given radiusius. All instances should also be able to set this.radiusius by setting a value to diameter, circumference, or area.

class Circle {
	constructor(radius) {
		this.radius = radius
	}

	get diameter() {
		return this.radius * 2;
	}

	get circumference() {
		return (this.radius * 2) * Math.PI;
	}

	get area() {
		return Math.PI * (this.radius * this.radius)
	}

	set diameter(d) {
		this.radius = d / 2
	}

	set circumference(c) {
		this.radius =  (c / Math.PI) / 2;
	}

	set area(area) {
		this.radius = Math.sqrt(area / Math.PI)
	}
}