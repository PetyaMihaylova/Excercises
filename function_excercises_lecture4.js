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

function solve(number) {
    let msg;
    if (number>0) {
msg= 'Greater than 0'
    }
 if(number<0) {
    msg= 'Less than 0'}
else if (number===0) {
    msg= 'Number equal to 0'
}

    else {msg= 'Not a valid number'}
return msg
}

console.log (solve(1))

console.log(2==='2')