// function solve(condition) {
//     if (condition) {
//  return ('Hello')
//     }

// }

// console.log (solve(true)) //Hello

// -----------------------------------------------------------

// function solve(condition) {
//     if (condition) {
//  return ('Hello')
//     }

// }

// console.log (solve(false)) //undefined

// -----------------------------------------------------------

// function solve(number) {
    
//     if (number>0) {
// return 'Greater than 0'
//     }
// else if(number<0) {
//     return 'Less than 0'}
// else if (number===0) {
//     return 'Number equal to 0'
// }

//     else {return 'Not a valid number'}

// }

// console.log (solve(0))

//---------------------------------------------------------

// function solve(number) {
//     let msg;
//     if (number>0) {
// msg= 'Greater than 0'
//     }
//  if(number<0) {
//     msg= 'Less than 0'}
// else if (number===0) {
//     msg= 'Number equal to 0'
// }

//     else {msg= 'Not a valid number'}
// return msg
// }

// console.log (solve(1))

// console.log(2==='2')
// console.log(2+2==='2'+2)
// console.log(2=='2')
// console.log(2===2)
// console.log(2!==2)
// console.log('str'==='str')
// console.log('str1'==='str')
// console.log('str1'!=='str')
// console.log(true!==true)
// console.log(true===true)


//check if number is between 10 and 20
// function solve(number) {
// if(number > 10) {
//     if(number < 20) {
//         return 'Inside the block of the if';}
//         else {
//             return 'Is bigger than 10 but not less than 20';}


// }
// else {
//     return 'Less than or equal to10';}
// }

// console.log(solve(10))

function solve(num) {
if(num > 10 && num < 20){
return 'is between 10 and 20';
}
else {
    return 'is not';
}
}
console.log(solve())

// console.log(15 > 10 && 15 < 20)  //true
// console.log(15 > 10 && 22 < 20)     //false