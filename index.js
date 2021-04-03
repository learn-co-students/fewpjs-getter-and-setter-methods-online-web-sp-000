// Add your Circle class here

class Circle  {
    constructor(num){
      this.num = num
    }
    get radius(){
        return this.num 
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(num){
      return this.num = num / 2
    }

    set circumference(num){
       return this.diameter = Math.sqrt(num) * Math.PI
    }

}