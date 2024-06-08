//solve()
// function solve() {
//     return('hello')
// }

// const mySolve = solve
// console.log(mySolve())
// const arrowFunction = () => {console.log ('hello')}
// arrowFunction()

// function solve(text) {
//     return(text)
// }

// console.log(solve('hello 1'))

// const arrowFunction = (text) => {console.log(text)}
// arrowFunction('hello 2')

// const arrowFunction = text => console.log(text) //if we have just one line of text in the body part, 
// //we can remove {} and return. Similarly, if we have just 1 parameter in the (), we can remove the ()
// arrowFunction('hello 2')

// const arr = ['Hello', 'World', 'Good', 'Bad']

// const arrowFunction = (text, index) => console.log(text, index) 
// // arr.forEach(arrowFunction)
// arr.forEach((text, index) => console.log(text, index))

// function solve(arr){
//     let count = 0
//     arr.forEach((element) => {
//         console.log(element)
//     count++})
//         console.log(count)
    
// // }
// // solve(arr)

// function solve(arr){
//     const newArr = []
//     arr.forEach(element => newArr.push(element + '!')) //Because forEach does not return a result, 
//     //there is a new method, which returns a new array, that is, it returns a result. it is called map
//     console.log(newArr)
// }
// solve(arr)

// const newArray = arr.forEach(element => {return(element + '!')})
// console.log(newArray) //we get undefined, because forEach()method does not have a return
//We use an anonymous function when we do not have to re-use the logic

// const newArr = arr.map(element => element+ '!')

// console.log(newArr) //the map() method will run the callback function for each element of the array and create an array of new elements
//(4) ['Hello!', 'World!', 'Good!', 'Bad!']


// const newArr1 = arr.map(element => `<p>${element} +'!'</p>`) 
// console.log(newArr1) // (4) ["<p>Hello+ '!'</p>", "<p>World+ '!'</p>", "<p>Good+ '!'</p>", "<p>Bad+ '!'</p>"]

// arr = ['1', '2', '3', '4']
// const doubArr1 = arr.map(element => element*2) 
// console.log(doubArr1) 

// const arr = ['1', '2', '3', '4']

// function solve (arr){
//     arr = arr.map(Number) //the map()method, together with the Number callback function is going to be run on every element in the array //(4) [3, 4, 5, 6]
//     const newArr = arr.map(element => element +2)
//     console.log(newArr);
// }


// solve(arr)

// const arr = ['1', '2', '3', '4']
// const arr1 = ['5', '6', '7', '8']
// console.log(arr + arr1) //1,2,3,45,6,7,8 //if u just use the + sign, where the arrays meet, u are gonna have a concatenation instead
// console.log(arr + ',' + arr1) //1,2,3,4,5,6,7,8 //this is a string
// console.log(typeof(arr+arr1)) //string
// console.log(arr.concat(arr1)) // (8) ['1', '2', '3', '4', '5', '6', '7', '8']
//the arr.concat() method returns an array
// const arr2 = arr.concat(arr1)
// const arr3 = ['9', '10', '11', '12']
// const arr4 = arr.concat('!', arr1, arr2)
// console.log(arr4)

// const arr = [1, 2, 3, 4]
// let result = false
// arr.forEach((element) => {
//     if(element < 5) {
//         result = true
//     } else{
//         result = false
//         return;
//     }
// })
// console.log(result)   //true - however, the result is wrong. Luckily, there
//is a way out if this with a method on the array - ar.every()

// let result = false
// arr.every((element) => {
//     if(element < 5) {
//         result = true
//     } else{
//         result = false
//         return;
//     }
// })

// console.log(result) //false

// const result1 = arr.every((number, index, array) => {number < 5})

// const arr = [1, 2, 3, 4]
// let result = arr.every(number => number < 5) 
// console.log(result) //true
// let result = arr.every(number => typeof number === 'number' && number <5) 
// console.log(result) //true 
// let result = arr.some(element => typeof element === 'number')
// console.log(result) //true
// let result = arr.some(element => element > 1)
// console.log(result) //true

// const result = arr.fill('!', 0, 2)
// console.log(result) //(4) ['!', '!', 3, 4]
// const result = arr.fill('!')
// console.log(result) //(4) ['!', '!', '!', '!']
// const result = arr.fill('!', 2)
// console.log(result) //(4) [1, 2, '!', '!']

// const arr = ['spray', 'elite', 'exuberant', 'cat', 'beer', 'dog', 'coffee']
// const result = arr.filter() //arr.filter works like all other methods with a callback function, which will be run for each and every one of the elements
// const result = arr.filter((element, index, array) => element.length > 6) 
// console.log(result) //(1) ['exuberant']
// const result = arr.filter((element, index, array) => element.length < 6) 
// console.log(result) //(5) ['spray', 'elite', 'cat', 'beer', 'dog']


// let resultArray = []
// const forEachResult = arr.forEach((element) => {
//     if(element.length > 6){
//         resultArray.push(element)
//     }
// })

// console.log(resultArray) //(1) ['exuberant']

// 1: Write a function areAllPositive that accepts an array of numbers 
// and returns true if every number in the array is positive, and false otherwise.

// arr = [-1, 2, 3, 4 -3]
// arr = [0, 0, 0, 3]
arr = [1, 9, 34]

 
   let areAllPositive = arr.every(element => element > 0)


console.log(areAllPositive) // false for [-1, 2, 3, 4 -3]
console.log(areAllPositive) //false for [0, 0, 0, 3]
console.log(areAllPositive) //true for arr = [1, 9, 34]