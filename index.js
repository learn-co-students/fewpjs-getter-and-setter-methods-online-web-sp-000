// - First, let's create a `class` of `Circle`
// - `Circle` will accept 1 parameter, `radius`, and use `this.radius` to store the
//   value
// - Use `Math.PI` to get an accurate measurement of [pi][pi] (&pi;)
// - Define getter methods for `diameter`, `circumference`, and `area` which
//   will calculate each value using `this.radius` and pi
// - Define setter methods for `diameter`, `circumference`, and `area` which
//   will accept values for each calculation, calculate the _radius_ based on the
//   input value and _set_ `this.radius` accordingly


class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }

    get circumference(){
        return Math.PI * (this.radius + this.radius);
    }

    set circumference(newCircumference){
        this.radius = (newCircumference/Math.PI)/2;
    }

    get area(){
        return Math.PI * (this.radius ** 2);
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI);
    }
}

// For reference, here are the formulas for calculating diameter, circumference and
// area:

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2

// > Don't forget about [PEMDAS](https://en.wikipedia.org/wiki/Order_of_operations)!

// All instances of `Circle` should be able to calculate the `diameter`,
// `circumference`, and `area` based on the given `radius`. All instances should
// also be able to set `this.radius` by setting a value to `diameter`,
// `circumference`, or `area`.