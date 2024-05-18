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

//---------------------------------------------------
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

//------------------------------------------------------------

// function solve(num) {
// if(num > 10 && num < 20){
// return 'is between 10 and 20';
// }
// else {
//     return 'is not';
// }
// }
// console.log(solve(22))

//------------------------------------------------------------

// console.log(15 > 10 && 15 < 20)  //true
// console.log(15 > 10 && 22 < 20)     //false

//---------------------------------------------------------------

//logical and operator is &&
//logical or operator is ||
//check if number is 10 or 20 else return bad number

// function solve (num) {
//     if(num === 10 || num === 20) {
//         return 'number is 10 or 20';
//     }
//     else {
//         return 'bad number';
//     }
// }

// console.log(solve(-9)) //bad number

//----------------------------------------------------------------

// function solve(condition) {
//     let msg;
// if(condition) {
// msg = 'it is a girl';
// }
// else {msg = 'it is a boy'}

// return msg
// }

// console.log((solve(true)))  //it is a girl
// console.log((solve(false)))    //it is a boy

//with ternary operator
// condition ? 'return value if it is true':'return value if it is false'

// function solve(condition) {
// const msg = (10 < 20 && 20 > 15) ? 'it is a girl':'it is a boy'
// const msg = (10 < 20 && 30 < 15) ? 'it is a girl':'it is a boy'
// 
// const msg = condition ? 'it is a girl': 'it is a boy'

// return msg 
// }
// console.log(solve())

// function solve(dayOfTheWeek) {

// if(dayOfTheWeek==='Monday'){
//     return 1;
// }
// else if(dayOfTheWeek==='Tuesday'){
//     return 2;
// }
// else if(dayOfTheWeek==='Wednesday'){
//     return 3;
// }
// else if(dayOfTheWeek==='Thursday'){
//     return 4;
// }
// else if(dayOfTheWeek==='Friday'){
//     return 5;
// }
// else if(dayOfTheWeek==='Saturday'){
//     return 6;
// }
// else if(dayOfTheWeek==='Sunday'){
//     return 7;
// }
// else {return 'Not a valid day'}
// }

// console.log(solve('Sunday'))

function solve(dayOfTheWeek){
    switch(dayOfTheWeek){
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default: 
            return 'Wrong day';
    }
}

console.log(solve('Monday'))
console.log(solve('Thursday'))
console.log(solve('asd'))
console.log(solve('-1000'))
console.log(solve('February'))