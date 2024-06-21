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


const car = {
    brand: 'Toyota',
    model: 'Avensis',
    year: 2021,
    getCarInfo: function (){
        return `${this.brand}, ${this.model}, ${this.year}`
    }
}

const car2 = new Object({
    brand: 'Toyota',
    model: 'Avensis',
    year: 2021,
    getCarInfo: function (){
        return `${this.brand}, ${this.model}, ${this.year}`
    }
})

// //in the moment when we create something, we call a special function called COnstructor
// console.log(car.getCarInfo()); //Toyota, Avensis, 2021

// new Object{}

class Car {
    constructor(brand, model, year){
        this.brand = brand; //here, we are constructing key-value pairs with this. HOwever, here, the key-value relationship is represented by an equal = sign, not by :
        this.model = model;
        this.year = year;
    }

checkPrice() {

}
}

//a function, which is either in the class or the object, is called a method

const myCar = new Car('Volkswagen', 'Polo', 2018)
console.log(myCar);// Car {brand: 'Volkswagen', model: 'Polo', year: 2018}