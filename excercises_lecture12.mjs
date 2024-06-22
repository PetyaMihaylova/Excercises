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
    #id = '1234'
    constructor(brand, model, year){
        this.brand = brand; //here, we are constructing key-value pairs with this. HOwever, here, the key-value relationship is represented by an equal = sign, not by :
        this.model = model;
        this.year = year;
    }

checkPrice() {

if(this.brand === 'Toyota'){
    return 1000
} else if(this.brand === 'VW') {return 2000}
else if(this.brand === 'BMW') {return 3000}
else {return 0}
}

get info() {  //Getters are like any other method. However, they give us the opportunity to receive info from the object
    return `${this.brand}, ${this.model}, ${this.year}`

}
get id() {
    return this.#id
}
set id(x) {
    if(typeof x === 'string' && x.length === 4){

    
    this.#id = x} //The Setter allows us to set a new id. Also, the Setter allows us to create conditional logic for setting of certain things inside the object we created
else {console.error('Id must be a string and be exactly 4 symbols')}

}
}


const myCar = new Car('VW', 'Polo', 2018) //2000
const yourCar = new Car('Toyota', 'Master', 2018)//1000
yourCar.id = 1234 //We get thrown the following error: "Id must be a string and be exactly 4 symbols"
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
