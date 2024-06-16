// Task 1: Extracting Object Keys
// Description:Create a function that takes an object as an argument and returns an array of its keys.
// Instructions:
// Define a function  that  to extract the keys of the object.Return the array of keys.

let obj1 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

const extractObj =(obj1) =>  Object.keys(obj1)

console.log(extractObj(obj1)) //(3) ['name', 'age', 'city']

// Task: 2
// Description:Create a function that takes an object as an argument and returns an array of its values.
// Instructions:
// Define a function  that  to extract the values of the object.Return the array of values.

let obj2 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

const objectifyFunc = (obj2) => Object.values(obj2)


console.log(objectifyFunc(obj2)) //(3) ['Diana', 28, 'Miami']


// Task 3:
// Description:Create a function that takes an object as an argument and returns an array of its key-value pairs as arrays.
// Instructions:
// Define a function  that uses  to extract the key-value pairs of the object.Return the array of key-value pairs.
let obj3 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}

const keyValArrFunc = (obj3) => Object.entries(obj3)
console.log(keyValArrFunc(obj3)); //(3) [Array(2), Array(2), Array(2)]

// Bonus Task: Summarize Object Properties
// Description:Create a function that takes an object as an argument and returns a summary string that lists all its properties and values.
// Instructions:
// Define a function  to extract the key-value pairs of the object.Construct and return a string that summarizes the object's properties and values.
let obj4 = {'name': 'Diana', 'age': 28, 'city': 'Miami'}


const summaryStringListFunc1 = (obj4) => JSON.stringify(Object.entries(obj4))
console.log(summaryStringListFunc1(obj4)) //[["name","Diana"],["age",28],["city","Miami"]]
console.log(typeof summaryStringListFunc1(obj4)) //string