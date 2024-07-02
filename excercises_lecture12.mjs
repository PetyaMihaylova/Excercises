const person = {
'firstName':'John',
'lastName': 'Doe',
'age': 30,
'fullName': function(){
    return `${this.firstName} ${this.lastName}`
}
}

console.log(person.firstName); //John
console.log(person.fullName()); //John Doe

//functions given inside of objects are called methods
//Currently, we have an object called person and a method called fullName. The method has access to the information
//inside and can use it in some way and do something for us

// const person1 ={
//     firstName: 'Petya',
//     lastName: 'Mihaylova',
//     age: 30,
//     fullName: function(){return `${this.firstName} ${this.lastName}`
// }}

// console.log(person1.fullName());

//we use the keyword function in the method, rather than an arrow function ()=>{}, because
//this does not exist in the arrow function

//this gives us a reference to the object, within which it is contained
// console.log(this) 
// console.log(person1.globalThis) // here we get a reference to the global object

// const count = {
//     number: 0,
//     timeIncreased: 0,
//     numberUsed: [],
//     update: function(number){
//         this.number = this.number + number
//         this.timeIncreased++;
//         this.numberUsed.push(number)
//     }
// }

// count.update(4)
// count.update(5)
// count.update(12)
// count.update(9)

// console.log(count.number, count.timeIncreased, count.numberUsed);//30 4 (4) [4, 5, 12, 9]


// const car = {
//     brand: 'Toyota',
//     model: 'Avensis',
//     year: 2021,
//     getCarInfo: function (){
//         return `${this.brand}, ${this.model}, ${this.year}`
//     }
// }

// const car2 = new Object({
//     brand: 'Toyota',
//     model: 'Avensis',
//     year: 2021,
//     getCarInfo: function (){
//         return `${this.brand}, ${this.model}, ${this.year}`
//     }
// })

// // //in the moment when we create something, we call a special function called COnstructor
// // console.log(car.getCarInfo()); //Toyota, Avensis, 2021

// // new Object{}

// class Car {
//     #id = '1234'
//     fuel = ['diesel', 'electric', 'gasoline', 'natural gas']
//     constructor(brand, model, year, fuel){
//         this.brand = brand; //here, we are constructing key-value pairs with this. HOwever, here, the key-value relationship is represented by an equal = sign, not by :
//         this.model = model;
//         this.year = year;
//         if(this.fuel.includes(fuel)) {
//           this.fuel = fuel
//         } else {console.error ('bad fuel type')} //bad fuel type
//     }

// checkPrice() {

// if(this.brand === 'Toyota'){
//     return 1000
// } else if(this.brand === 'VW') {return 2000}
// else if(this.brand === 'BMW') {return 3000}
// else {return 0}
// }

// get info() {  //Getters are like any other method. However, they give us the opportunity to receive info from the object
//     return `${this.brand}, ${this.model}, ${this.year}`

// }
// get id() {
//     return this.#id
// }
// set id(x) {
//     if(typeof x === 'string' && x.length === 4){

    
//     this.#id = x} //The Setter allows us to set a new id. Also, the Setter allows us to create conditional logic for setting of certain things inside the object we created
// else {console.error('Id must be a string and be exactly 4 symbols')}

// }
// }



// const myCar = new Car('VW', 'Polo', 2018, 'diesel') //2000
// delete myCar.brand //in this way we can delete the values we have used for the constructor
// myCar.__proto__.run = function (){
//     console.log('You are running' + ' ' +this.brand)
// }

// myCar.run() //You are running VW

// const array = [1, 2, 3, 4]
// array.__proto__.map = () => {console.log('nyama map veche')}//nyama map veche
// array.map();



// console.log(myCar); //Car {#id: '1234', model: 'Polo', year: 2018}// Here we managed to delete the brand

// myCar.info = 'foo' //Uncaught TypeError TypeError: Cannot set property info of #<Car> which has only a getter

// const yourCar = new Car('Toyota', 'Master', 2018)//1000
// yourCar.id = 1234 //We get thrown the following error: "Id must be a string and be exactly 4 symbols"
// myCar.info = 2 //"ncaught TypeError TypeError: Cannot set property info of #<Car> which has only a getter." Here, we cannot set a property to the object by calling the object and its method with a dot,
//the same way we change key-value pairs in an object, because, with teh Get methods, we only get
//information, we cannot set it. In that sense, the Getter is not exactly key: value pair in an object

// console.log(myCar.checkPrice());
// console.log(yourCar.checkPrice())
// console.log(myCar.info); //VWPolo2018
// yourCar.id = '4321'
// console.log(yourCar.id);
// console.log(myCar.id);

// console.log(myCar.id)//1234

//a function, which is either in the class or the object, is called a method


// console.log(myCar);// Car {brand: 'Volkswagen', model: 'Polo', year: 2018}

// class Button {
// constructor (text, onClick, color){
//     this.text = text;
//     this.color = color;
    
// }
// onClick(){
        
// }
// }

// const obj{id: '1234'}
// obj.id = 4321

//Getters can also have conditions. E.g., upon the fulfillment of a certain condition, we can get particular information

class Vehicle {
    constructor (brand, model){
        this.brand = brand;
        this.model = model;
    }

    getInfo(){
        `${this.brand} ${this.model}`
    }
    static getType() {
        return 'Vehicle'
    }  //static methods are defined directly in a class and not in an instance of class
}

// console.log(Vehicle.getType());// Vehicle

// const Vehicle1 = new Vehicle('Toyota', 'Yaris')
// console.log(Vehicle1.getType());//Here we will get an error, because Vehicle1 is an instance of the class Vehicle, 
//and the static method static getType() will only work with the class Vehicle, not with its instance Vehicle1

// console.log(Vehicle.info);

// class CalculatorFactory {
//     static Add(a, b){
//         return a+b
//     }
//     static Multiply(a,b){
//         return a*b
//     }

// }
// console.log
// function myConstructor(result){
// const myObj = {
//     result: result,
//     Add: (a, b) => a+b,
//     Multiply: (a, b) => a * b,
// }

// return myObj}

// const myObj = myConstructor(0)
// myObj.Add(2, 4)
// console.log(myObj.result);

class Truck extends Vehicle { //with extends we extend the class Vehicle and everything we have in class Vehicle, except for the static method, we can have in class Truck
    constructor(brand, model, capacity){
        super(brand, model)
        this.capacity = capacity
    }
    getInfo(){
        return `${super.getInfo()} with a capacity of ${this.capacity} tons.` //here super points to Vehicle class, so we can re-use the getInfo() method from Vehicle into Truck
    }
    static getType() {
        return 'Truck'
    } 
}

class Car extends Vehicle{
   constructor (brand, model, type){
    super(brand, model)
    this.type = type
   }

   getInfo() {
    return `${super.getInfo()} with a type of ${this.type}.`
   }
   static getType() {
    return 'Car'
} 
}

const myTruck = new Truck('Ford', 'F-150', 3)
console.log(myTruck); //Truck {brand: 'Ford', model: 'F-150', capacity: 3}

const myCar = new Car('Ford', 'Focus', 'combi')
console.log(myCar); //Car {brand: 'Ford', model: 'Focus', type: 'combi'}
console.log(myCar.getInfo());