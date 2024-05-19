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

// function solve(dayOfTheWeek){
//     switch(dayOfTheWeek){
//         case 'Monday':
//             return 1;
//         case 'Tuesday':
//             return 2;
//         case 'Wednesday':
//             return 3;
//         case 'Thursday':
//             return 4;
//         case 'Friday':
//             return 5;
//         case 'Saturday':
//             return 6;
//         case 'Sunday':
//             return 7;
//         default: 
//             return 'Wrong day';
//     }
// }

// console.log(solve('Monday'))
// console.log(solve('Thursday'))
// console.log(solve('asd'))
// console.log(solve('-1000'))
// console.log(solve('February'))

// --------------------------------------------------------------------------

//with switch case and variable to hold the result, we need break to break the logic 
//within the switch case, otherwise all results after the right result are
// considered right as well.

// function solve(dayOfTheWeek){
//     let result;
//     switch(dayOfTheWeek){
//         case 'Monday':
//             {result = 1}; //here we can open a new block scope with {} if we want to encapsulate some logic
//             break;
//         case 'Tuesday':
//             result = 2;
//             break; //or instead of break, we can write return result
//         case 'Wednesday':
//             result = 3;
//             break;
//         case 'Thursday':
//             result = 4;
//             break;
//         case 'Friday':
//             result = 5;
//             break;
//         case 'Saturday':
//             result = 6;
//             break;
//         case 'Sunday':
//             result = 7;
//             break;
//         default: 
//             result = 'Wrong day';
           
//     }
//     return result;
// }

// console.log(solve('Monday'))
// console.log(solve('Thursday'))
// console.log(solve('asd'))
// console.log(solve('-1000'))
// console.log(solve('February'))

// ------------------------------------------------------------

// true / false
// truthy/ falsy

//   //nothing happens, because 0
    //is the same as saying that the condition is false, then nothing will happen

//     if (0) {
//         console.log('truthy')}
//     else {console.log('falsy')} //falsy

// console.log(Boolean(0)); //false


// if (-1) {
//     console.log('truthy')} //truthy
// else {console.log('falsy')} 

// //we can turn falsy or truthy values into real true/false with the help of Boolean()

// console.log(Boolean(-1)); //true

// const (number) = 0
// if (!number) {
//     console.log('truthy')} //truthy
// else {console.log('falsy')} 

//the ! in front of Boolean() turns the sign of the Boolean value around
console.log(!Boolean(0)); //true