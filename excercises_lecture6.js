//checking if a string is palindrome

// function solve(string) {
//     const stringL = string.length
//     let stringToCheck = '';
   
//     for(let index = stringL - 1; index >=0; index--) {
        
//         stringToCheck = stringToCheck + string[index]
//     }
    
//     if(string === stringToCheck){
//         return 'String is palindrome'
//     }
//     else {
//         return 'String is not a palindrome'
    
//     }
// }

// console.log(solve('otto'))

//-----------------------------------------

//[1,2,3,4,5,6,6,5,4,3,2,1]

// function solve(arr) {
    
//     const arrL = arr.length
//     const firstHalfIndexStart = 0
    
//     const firstHalfIndexEnd = (arrL/2)-1  
//     const secondHalfIndexEnd =  firstHalfIndexEnd+1 //we will start in reverse order, that is, we start backwards
//     const secondHalfIndexStart = arrL-1 //we will start in reverse order, that is, we start backwards

//    // console.log(firstHalfIndexStart, 'firstHalfIndexStart', firstHalfIndexEnd, 'firstHalfIndexEnd', secondHalfIndexStart, 'secondHalfIndexStart', secondHalfIndexEnd, 'secondHalfIndexEnd')

//     let firstHalfString = ''
//     let secondHalfString = ''

//     for(let index = firstHalfIndexStart; index <= firstHalfIndexEnd; index++) {
//         firstHalfString = firstHalfString + arr[index]
        
//     }
//     console.log(firstHalfString, 'firstHalfString')

//     for(let index = secondHalfIndexStart; index >= secondHalfIndexEnd; index--) {
//         secondHalfString = secondHalfString + arr[index]
        
//     }
//     if(firstHalfString === secondHalfString){
//     console.log('The array is a mirror array')
// }
// else {
//     console.log('The array is not a mirror array')
// }
// }

// console.log(solve([0,1,2,3,4,5,6,7,7,6,5,4,3,2,1,0]))

//-----------------------------------------
// const random = ["tree", 795, [0, 1, 2]];
// console.log(random[2][2]);
//---------------------------------------


//make a loop to go through the whole array and return 
//how many times you have encountered number, boolean, and string.

// function check(element, type) {

//     return typeof element === type ? true : false
// }


// function solve (array) {
//     let numbers = 0;
//     let strings = 0;
//     let booleans = 0;

//     for (let element of array) {
//         if (check(element, 'number')) { //instead of if(typeof element === 'number')
//             numbers = numbers+1;
//         }
//         else if (check(element, 'string')) { //instead of else if (typeof element === 'string')
//             strings = strings+1;
//         }
//         else if (check(element, 'boolean')) { //instead of else if (typeof element === 'boolean')
//             booleans = booleans+1;
//         }
//     }
//     return(`We have ${numbers} numbers ${strings} strings and ${booleans} booleans`)
// }

// console.log(solve([1, 2, 3, true, 'b', 12]))

//--------------------------------------------

// console.log([1, 2, 3, true, 'b', check]) // (6) [1, 2, 3, true, 'b', ƒ]
// const f = check
// console.log(f(1, 'number'))

// console.log(check(1, 'number')) //we can console.log a function that has been defined with the name function
// before it has been defined, unlike a variable before initialization, which cannot be console.logged before initialization

// console.log(check1(1, 'number')) //here, JS does not treat the arrow function as a function that has been declared with 
//the function keyword, but rather treat it as an ordinary variable to which our function has been attached, hence will give us
// a reference error, because acc. to JS we are trying to console log a variable, whoch has not been defined yet

// function check(element, type) {

//     return typeof element === type ? true : false
// }

// const check1 = (element, type) => {     //this function is also completely anonymous, it has no name
//     return typeof element === type ? true : false
// }


// const greet = function (name) { //this is called an anonymois function, because it does not have a function name; 
//     //the word name here is used as a name of the parameter alone. In order to use anonymous functions in Node.js, 
//     //we need to attach them to a variable
//     return 'Hello ' + name
// }
// console.log(greet('Pesho')) // Hello Pesho

//---------------------------------------------

//IIFE (immediately invoked function expression)
//here, we surround the function with round brackets, so it takes the position of the name of the function and we add 
//another set of () after the expression

// (function () {
//     console.log('This runs immediately! - IIFE') 
// }) (
     
// )

// function solve(name = 'User'){
//     console.log('Hello ' + name);
// }

// solve('Grigor') //Hello undefined/ Hello User/ Hello Grigor //here, 'User' is a default parameter. 
// //if no argument is given when calling the function, we get Hello undefined. If default name = 'User' or name = 'X' is given
// //in the function parameters, when calling the function with no argument defined, we get Hello User or Hello X.

//The values that are declared within a function when the function is called are known as an argument. 
//The variables that are defined when the function is declared are known as parameters


//            'Petya', 35, 'Sofia'
// function solve(name, age, city) {
// console.log(name, age, city)
// }

// solve('Petya', 35, 'Sofia', 'Solutions Architect')


// function solve(...arr) { //here we put all possible arguments later on when 
// //the function will be called as an array parameter and write ...arr. This is called doing a spread or using a spread operator
//     console.log(...arr)
//     }
    
//     solve('Petya', 35, 'Sofia', 'Solutions Architect') //Petya 35 Sofia Solutions Architect

// function show(msg){
//     console.log(msg);
// }

// function solve(callbackfunction){
// callbackfunction('I am called as a callback function')
// }

// solve (show)

// solve((msg) => {console.log(msg)}) //an anonymous arrow function will arrive as a callback function

// const show = (msg) => {console.log(msg)} // a regular arrow function will arrive as a callback function

// solve(show) //I am called as a callback function

const arr = [1, 2, 3, 4]

// for(let element of arr) { //if we wanted to go through all elements of the array and console.log them, until now, we used to do this
//     console.log(element);
// }

// arr.forEach((value, index, array)=> {console.log(value)}) // 1 2 3 4 
// arr.forEach((value, index, array) => {console.log(value, index)}) // 1 0
//                                                                   //2 1
//                                                                  //3 2
//                                                                  //4 3

//insted of for(element of arr){}, use arr.forEach((value, index, array) => {}), 
//that is the forEach method on arrays and a callback function

// console.log(arr.filter((value, index, array) => {return value !=2})) //returns [1, 3, 4] instead of arr.forEach, we can use arr.filter and give 
// //a predicate, a condition(filter) for each element of the array to fulfill, as a result, we get a new filtered array as per the filter
// console.log(arr.filter((value, index, array) => {return index !=2}))// returns [1, 2, 4], that is, values, which index !=2

//arr.forEach and arr.filter both return the result in the form of an array
// console.log(arr.sort((a, b) => {return a - b})) //1, 2, 3, 4
// console.log(arr.sort((a, b) => {return b - a})) // [4, 3, 2, 1]
