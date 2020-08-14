class Circle {
    constructor(radius){
    this.radius = radius;
  }


  get area(){
return Math.PI * this.radius * this.radius;
  }


  get diameter(){
      return 2 * this.radius;
  }

  set diameter(diametre){
    this.radius = diametre/ 2
  }


  get circumference(){
      return this.radius * 2 * Math.PI;
  }

  set circumference(circumference){
      this.radius = circumference / (Math.PI * 2);
  }


}

