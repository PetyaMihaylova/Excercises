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

function solve(arr) {
    
    const arrL = arr.length
    const firstHalfIndexStart = 0
    
    const firstHalfIndexEnd = (arrL/2)-1  
    const secondHalfIndexEnd =  firstHalfIndexEnd+1 //we will start in reverse order, that is, we start backwards
    const secondHalfIndexStart = arrL-1 //we will start in reverse order, that is, we start backwards

   // console.log(firstHalfIndexStart, 'firstHalfIndexStart', firstHalfIndexEnd, 'firstHalfIndexEnd', secondHalfIndexStart, 'secondHalfIndexStart', secondHalfIndexEnd, 'secondHalfIndexEnd')

    let firstHalfString = ''
    let secondHalfString = ''

    for(let index = firstHalfIndexStart; index <= firstHalfIndexEnd; index++) {
        firstHalfString = firstHalfString + arr[index]
        
    }
    console.log(firstHalfString, 'firstHalfString')

    for(let index = secondHalfIndexStart; index >= secondHalfIndexEnd; index--) {
        secondHalfString = secondHalfString + arr[index]
        
    }
    if(firstHalfString === secondHalfString){
    console.log('The array is a mirror array')
}
else {
    console.log('The array is not a mirror array')
}
}

console.log(solve([0,1,2,3,4,5,6,7,7,6,5,4,3,2,1,0]))