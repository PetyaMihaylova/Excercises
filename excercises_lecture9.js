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

const arr = ['Hello', 'World', 'Good', 'Bad']

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

const newArr = arr.map(element => element+ '!')

console.log(newArr) //the map() method will run the callback function for each element of the array//(4) ['Hello!', 'World!', 'Good!', 'Bad!']