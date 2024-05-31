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

console.log(check(1, 'number')) //we can console.log a function that has been defined with the name function
// before it has been defined, unlike a variable before initialization, which cannot be console.logged before initialization

console.log(check1(1, 'number')) //here, JS does not treat the arrow function as a function that has been declared with 
//the function keyword, but rather treat it as an ordinary variable to which our function has been attached, hence will give us
// a reference error, because acc. to JS we are trying to console log a variable, whoch has not been defined yet

function check(element, type) {

    return typeof element === type ? true : false
}

const check1 = (element, type) => {
    return typeof element === type ? true : false
}