
//Problem(1): You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

let person = {
  name : "Ismail Hossain",
  age : 16,
}

let {name,age} = person;

console.log(name);
console.log(age);


//Problem(2): Create a module that exports a function to calculate the area of a circle and import it into another file.

function circlearea(radius){
  return Math.PI * radius*radius
}

module.exports = circlearea;

// Problem(3): Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle{
  constructor(width,height){
    this.width = width;
    this.height = height;
  }
  calculate(){
    return this.width * this.height
  }
}

let area = new Rectangle(12,42);

console.log(area.calculate());

//Problem(4): Create a class Person with a getter and setter for the fullName property.

class Person{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(name){
    let [firstName,lastName] = name
    this.firstName = firstName
    this.lastName = lastName
  }
}

let fullName = new Person ("Ismail","Hossain")

console.log(fullName.fullName);


//Problem(5): Create a class expression for a Circle with a method to calculate the circumference.

let Circle = class{
  constructor(radius){
    this.radius = radius
  }
  calculate (){
    return 2 * Math.PI * this.radius
  }
};

let circle = new Circle(185);

console.log(`the circumference of circle is ${circle.calculate()}`);



// Problem(6): Create an object with computed property names based on variables.

let property = "username";

let info = {
    [property] : "anis",
    firstName : "Ismail",
    lastName : "Hossain"
};

console.log(info);

//Problem(7): Create a base class Animal and a derived class Dog that inherits from Animal.

class Animal {
  constructor(thing){
    this.thing = thing;
  }

  love(){
    return `i love ${this.thing} very much`
  }
}


class Dog extends Animal{
  constructor(thing,pet){
    super(thing);
    this.pet = pet;
  }
  fav(){
    return `i love ${this.thing} very much and my favourite animal is ${this.pet}`
  }
};

let myFav = new Dog("animals","cat");

console.log(myFav.fav());


//Problem(8): Use new.target to create an abstract class Shape that cannot be instantiated directly.
 
class Shape  {
  constructor(a) {
    this.a = a
  }
}

class equilateral extends Shape {
   constructor(a,b){
    super(a)
    this.b = b
   }
   calculate(){
    return 1/2 *this.a * this.b
   }
}

let total = new equilateral(2,5);

console.log(total.calculate());

//Problem(9): Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil{
  static square(number){
    return number*number
  }
};

let calculate = MathUtil.square(10);

console.log(calculate);


//Problem(10): Create an object with a symbol as a property key and demonstrate accessing it.

let mySym = Symbol();

let obj = {
  [mySym] :"This is a symbol property"
};

console.log(obj[mySym]);