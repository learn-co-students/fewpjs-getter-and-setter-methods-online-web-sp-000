// Add your Circle class here
class Circle{
  constructor(radius){
    this._radius = radius;
  }

  get radius(){
    return this._radius;
  }

  get diameter(){
    return this._radius * 2;
  }

  get circumference(){
    return this._radius * 2 * Math.PI;
  }

  get area(){
    return Math.PI * this._radius ** 2;
  }

  set radius(newRadius){
    this._radius = newRadius;
  }

  set diameter(newDiameter){
    this._radius = newDiameter / 2;
  }

  set circumference(newCircumference){
    this._radius = newCircumference / Math.PI / 2 ;
  }
}
