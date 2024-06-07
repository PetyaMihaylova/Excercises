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

const arr = ['1', '2', '3', '4']
const arr1 = ['5', '6', '7', '8']
console.log(arr + arr1) //1,2,3,45,6,7,8 //if u just use the + sign, where the arrays meet, u are gonna have a concatenation instead
console.log(arr + ',' + arr1) //1,2,3,4,5,6,7,8 //this is a string
console.log(typeof(arr+arr1)) //string
console.log(arr.concat(arr1)) // (8) ['1', '2', '3', '4', '5', '6', '7', '8']

