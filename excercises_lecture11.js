// const user = {
//     name: 'Mitko',
//     email: 'mitko@abv.bg',
//     age: 24,
//     city: 'Sofia',
//     level: 4
// }  //written in this way, the keys are always from type string

// user = {} //This gives us an error, because we cannot rewrite something to a constant
// user.street = 'Ivan Vazov' //we can rewrite an object similarly to rewriting an array

// console.log(user.name) //Mitko
// console.log(user.age) //24
// console.log(user.street) //Ivan Vazov

// user.name = 'Shishman'
// console.log(user.name) //Shishman
// console.log(user['name']) //Shishman // this is another way of reaching inside the object by giving the key as an index

// const user = {
//     name_first: 'Mitko',
//     email: 'mitko@abv.bg',
//     age: 24,
//     city: 'Sofia',
//     level: 4,
//     family: [{name: 'Polya', role: 'mother'}, {name: 'Dancho', role: 'father'}],
//     salary: 2000,
//     }

// let user2 = {
//         name_first: 'Mitko',
//         email: 'mitko@abv.bg',
//         age: 24,
//         city: 'Sofia',
//         level: 4,
//         family: [{name: 'Polya', role: 'mother'}, {name: 'Dancho', role: 'father'}],
//         }


// const extraInfo = {
//     profession: 'dancer',
//     salary: 1800,

// }




// extraInfo.salary = 2000
// console.log(extraInfo.salary)// 2000

// const result = Object.assign(user, extraInfo) //in arrays, to join two arrays, we use the .concat()
//method. In objects,  to join two objects, we use the Object.assign(object1, object2)
// console.log(result) //{name_first: 'Mitko', email: 'mitko@abv.bg', age: 24, city: 'Sofia', level: 4, …}
// console.log(result.salary) //1800
// console.log(result.salary) //2000
// newUserName = 'Grisho'
// const newUserObject = {...user, ...extraInfo, name_first: newUserName}
// const newUserObject = JSON.parse(JSON.stringify(user))// this is how we break the original reference relationship between user and newUserObject

// user.family[0].name = 'Violeta'
// console.log(user.family[0].name, newUserObject.family[0].name)
// user.age = 34
// console.log(user.age, newUserObject.age) //34 24
// console.log(newUserObject.name_first) //Grisho

//console.log(user === user2) //false - even though both objects have identical content, they are not
//equivalent to each other, because with objects, the same principle as arrays apply: they are 
//stored in the computer memory in a way that is different from how strings and numbers are stored.
//objects are stored with their reference, so user has ref1 and user2 has ref2, which are two different references.
//In this case, user2 is a shallow copy of user, because only the content is equivalent, but not the references
// user.asd = 'asd'
// console.log(user2.asd)// asd

// user2 = user
// console.log(user === user2) //true , after we declare both objects to be eqivalent to each other by
//rewriting the variable, user2 is now a deep copy of user



// console.log(user.family) //(2) [{…}, {…}] //for a value in a key, we can have an array of objects
// console.log(user.family.find((member) => member.role === 'mother'))// {name: 'Polya', role: 'mother'}

// const key = 'name_first'
// console.log(user.name_first) //Mitko
// console.log(user['key']) //undefined
// console.log(user[key])  ///Mitko Here we can dynamically take a value from the outside, like key
// user[key] = 'Ivan'
// console.log(user[key])


// for (property in user){
//     console.log(property

//     )
// }
// name_first
// email
// age
// city
// level
// family

// for(key in object_name){
//     console.log(key)
// }

// for (let property of user.family){
//     console.log(property

//     )} //{name: 'Polya', role: 'mother'}
    // {name: 'Dancho', role: 'father'} //this is the for of loop in arrays

    //in arrays, we have for of loop
    //in objects, we have for in loop

// for(property in user){
//     console.log(user[property])
// } //
// Mitko
// mitko@abv.bg
// 24
// Sofia
// 4
// (2) [{…}, {…}]

// for(property in user){
//     console.log(property === 'name_first', property)
// } // true name_first
// false email
// false age
// false city
// false level
// false family

// const result = Object.hasOwn(user, 'level') //to check, whether an object has a certain property/key, 
// //we can use a method on the global Object, namely Object.hasOwn(arr_name, 'property_name')
// console.log(result) //true
// const result1 = Object.hasOwn(user, 'level12')
// console.log(result1) //false

//With deconstruction, e.g. {...user, ...extraInfo}, we make shallow copies of the objects
//user.family also has a reference, and when we deoncstruct user into a new object NewUserObject,
//we pour its content into the new object. Part of this content is the array family, which gets copied
//together with its original reference into the NewUserObject. In this case, when we change
//a property value into the original object user's family array, the property value of
//NewUserObject's family array will also be changed (because we are dealing with changing one 
 //and the same reference, not two separate references).

//  const arr = [1, 2, 3]
//  const arr2 = [4, 5, 6]
//  console.log(arr.concat(arr2)) //(6) [1, 2, 3, 4, 5, 6]
//  console.log([...arr, ...arr2]) //6) [1, 2, 3, 4, 5, 6]
//  console.log([...arr, ...arr2, 7]) //(7) [1, 2, 3, 4, 5, 6, 7]

 //this method transforms the object into an array of strings
//  console.log(Object.(user)) //(7) ['name_first', 'email', 'age', 'city', 'level', 'family', 'salary']

 //this method, in turn, transforms an object into an array of values
//  console.log(Object.values(user)) //['Mitko', 'mitko@abv.bg', 24, 'Sofia', 4, Array(2), 2000]


 //this method transforms an object into an array of sub-arrays. Each sub-array consists of key at index 0 and value at index1.
//  console.log(Object.entries(user))//(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

//  const arr = ['a', 'b']
//  const a = arr[0]
//  const b = arr[1]
 //console.log(a, b) //a b
//  const [a, b, c] = ['a', 'b', 'c']
//  
//  const [first, second, third] = ['a', 'b', 'c']
//  console.log(third)

// const {first, second, third,} = { a: 'a', b: 'b', c:'c'}// here, we declare 3 separate objects
// console.log(first, second, third)// undefined undefined undefined
// arr=[1,2,3]
// console.log(arr);

// for(property in user){
//     console.log(`${property} : ${user[property]}`);
// } //name_first : Mitko
// email : mitko@abv.bg
// age : 24
// city : Sofia
// level : 4
// family : [object Object],[object Object]
// salary : 2000

// for(property in user){
//     console.log(`${property} : ${user.property}`);
// } //name_first : Mitko
// email : mitko@abv.bg
// age : 24
// city : Sofia
// level : 4
// family : [object Object],[object Object]
// salary : 2000

// for(property in user.family){
//     console.log(Object.entries(user));
// }

// for(currentArray of Object.entries(user)){
//     console.log(currentArray) //(2) ['name_first', 'Mitko']
    // (2) ['email', 'mitko@abv.bg']
    // (2) ['age', 24]
    // (2) ['city', 'Sofia']
    // (2) ['level', 4]
    // (2) ['family', Array(2)]
    // (2) ['salary', 2000]
// }

// for(currentArray of Object.entries(user)) {
//     console.log(`${currentArray[0]} : ${currentArray[1]}`)
//} //email : mitko@abv.bg
// age : 24
// city : Sofia
// level : 4
// family : [object Object],[object Object]
// salary : 2000

// for(const[key, value] of Object.entries(user)){
//     console.log(`${key}, ${value}`)
//} //email : mitko@abv.bg
// age : 24
// city : Sofia
// level : 4
// family : [object Object],[object Object]
// salary : 2000

// const arrayOfArrays = Object.entries(user)
// console.log(arrayOfArrays); //(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// const entriesArray = [['name_first', 'Grigor'], ['age', 24], ['city', 'Sofia'], ['street', 'Nishava']]
// console.log(Object.fromEntries(entriesArray)) //{name_first: 'Grigor', age: 24, city: 'Sofia', street: 'Nishava'}
// const arrayOfArrays = Object.entries(user)
// console.log(Object.fromEntries(arrayOfArrays)); //{name_first: 'Mitko', email: 'mitko@abv.bg', age: 24, city: 'Sofia', level: 4, …}

//with the method ObjectfromEntries(arrayOfArrays) we turn the array again into an object

// const name = 'Grigor'
// const age = 24
// const profession = 'Dancer'

// const obj = {
//     name: name,
//     age: age,
//     profession: profession
//} //here the variable name is the same as the key name. if we have such overlap, that is, the variable
//name being the same as the key name, we can leave only one name as follows:)

// const obj = {
//     name,
//    old: age,
//     profession
// } 

// console.log(obj) //{name: 'Grigor', age: 24, profession: 'Dancer'} 

//console.log(user);
// Object.freeze(user)
// Object.preventExtensions(user) //with Object.preventExtensions() method we just forbid the adding of properties, but the deletion is allowed
// delete user.age    //{name_first: 'Mitko', email: 'mitko@abv.bg', age: 24, city: 'Sofia', level: 4, …}
// user.age = 33
// console.log(Object.isFrozen(user)) //here we can check if an object is frozen with the method Object.isFrozen(user)//true
// console.log(Object.isExtensible(user)) //false //this is a method to check if we have applied the Object.preventExtensions() method
//Object. seal() allows modifications, but prevents additions and deletions of properties.

// const inventory = [
//     {name: 'asparagus', type: 'vegetables', quantity: 5},
//     {name: 'bananas', type: 'fruits', quantity: 0},
//     {name: 'goat', type: 'meat', quantity: 23},
//     {name: 'cherries', type: 'fruits', quantity: 5},
//     {name: 'fish', type: 'meat', quantity: 22},
// ]

// const result = Object.groupBy(inventory, ({type}) => {type})
// console.log(result) //{vegetables: Array(1), fruits: Array(2), meat: Array(2)}fruits: Array(2)0: {name: 'bananas', type: 'fruits', quantity: 0}1: {name: 'cherries', type: 'fruits', quantity: 5}length: 2[[Prototype]]: Array(0)meat: Array(2)0: {name: 'goat', type: 'meat', quantity: 23}1: {name: 'fish', type: 'meat', quantity: 22}length: 2[[Prototype]]: Array(0)vegetables: [{…}]


// const vegetables = inventory.filter((item) => item.type === 'vegetables')
// const meat = inventory.filter((item) => item.type === 'meat')
// const fruits = inventory.filter((item) => item.type === 'fruits')
// console.log(vegetables) // (1) [{…}]
// console.log(meat) //(2) [{…}, {…}]
// console.log(fruits)// (2) [{…}, {…}]

// const result = {
//     vegetables: vegetables,
//     meat: meat,
//     fruits: fruits
// }

// const results = {
//     vegetables: [{name: 'asparagus', type: 'vegetables', quantity: 5}],
//     fruits: [{name: 'bananas', type: 'fruits', quantity: 0}, {name: 'cherries', type: 'fruits', quantity: 5}],
//     meats: [{name: 'goat', type: 'meat', quantity: 23}, {name: 'fish', type: 'meat', quantity: 22}],
// }
// Task 1: Extracting Object Keys
// Description:Create a function that takes an object as an argument and returns an array of its keys.
// Instructions:
// Define a function  that  to extract the keys of the object.Return the array of keys.

// let obj1 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

// function extractObj(obj1) {
//     return result = Object.keys(obj1)
// }

// console.log(extractObj(obj1)) //(3) ['name', 'age', 'city']

// Task: 2
// Description:Create a function that takes an object as an argument and returns an array of its values.
// Instructions:
// Define a function  that  to extract the values of the object.Return the array of values.

// let obj2 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

// function objectifyFunc(obj2) {
//     return result = Object.values(obj2)
// }

// console.log(objectifyFunc(obj2)) //(3) ['Diana', 28, 'Miami']

//---2nd way of solving it-----
// const objFunc = (obj2) => Object.values(obj2)
// console.log(objFunc(obj2)) // ['Diana', 28, 'Miami']

// Task 3:
// Description:Create a function that takes an object as an argument and returns an array of its key-value pairs as arrays.
// Instructions:
// Define a function  that uses  to extract the key-value pairs of the object.Return the array of key-value pairs.
// let obj3 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

// const keyValArrFunc = (obj3) => Object.entries(obj3)
// console.log(keyValArrFunc(obj3)); //(3) [Array(2), Array(2), Array(2)]

// Bonus Task: Summarize Object Properties
// Description:Create a function that takes an object as an argument and returns a summary string that lists all its properties and values.
// Instructions:
// Define a function  to extract the key-value pairs of the object.Construct and return a string that summarizes the object's properties and values.
let obj4 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}
// const summaryStringListFunc = (obj4) => return `${object.property: object}`


// function summaryStringListFunc(obj4) {
// for(property in obj4){
//     console.log (`${property} : ${obj4[property]}`)};
// }

// summaryStringListFunc(obj4)// name : Diana
// age : 28
// city : Miami

const summaryStringListFunc1 = (obj4) => JSON.stringify(Object.entries(obj4))
console.log(typeof summaryStringListFunc1(obj4)) //string