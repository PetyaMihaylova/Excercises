//the below is an infinite loop, because the condition is always true

// ------------------------------------------

//task: print 10x 'Hello world!'

// let n = 0;

// while (n<10) {
   
//     console.log('Hello world!'); //10x 'Hello world!'
    
//     // n = n+1; // n++
//     n = n+2 //if we want to jump over 1 turn at every turn // 5x 'Hello world!'
// }

//-----------------------------------------
// let n = 0;
// let flag = true;

// while (flag) {
//     console.log('Hello world!');
//     if (n===10) {
//     console.log('spacial');
//     flag = false//While flag is true, print Hello World. Do so until you print Hello World 10 times, then stop. 
//     }
//     n++
// }

//------------------------------------

// let n = 0
// flag = true

// while(flag) {
//     console.log(n);
   
//     if (n===10){
//     return}
//     n++
// }

//----------------------------------------

// let n = 0;
// while(n < 10) {

//     n++
//     console.log(n);
// }

// function solve(condition){
// let n = 0;

// while (n < condition) {
   
//     n++
//     console.log(n);
// }
// }

// solve(10)

//------------------------------------------
//create a while cyle which prints each and every letter of a particular string

// function solve(string){
//     let n = 0;
    
//     while (n < string.length) {
       
//         console.log(string.charAt(n++));
//     }
//     }
    
//     solve('Hello world')

//------------------------------------------

// function solve(string){
//     let n = 0;
    
//     while (n <= string.length-1) {
       
//         console.log(string[n]);
//         n++
//     }
//     }
    
//     solve('Hello world')

//-----------------------------------------
//do{} while() is a version of while(){} loop, however here, after running the code, 
//it will check if it needs to finish.

// function solve(string){
//         let n = 0;
        
//        do {console.log(string[n])
//         n++
//        }
       
//        while(n <= string.length-1)

//        }
        
//         solve('Hello world') 

//---------------------------------------
                //    let i = 0;    i <= string.length-1;        i++;
//for loop// for(initialization; condition; increment of initialization value)
     //i stands for index

// function solve(str) {

//     for (let index = 0; index < str.length; index++) {    //this is an abstraction that allows us to write everything on one row, instead of on separate rows


//         console.log(str[index])};

// }

// solve('Hello world')

//interesting about the for loop is that it can work without some of the three parts inside the round brackers (). Important is that the 
//latest ; is present -- otherwise, the for loop will not work.

// function solve(str) {

//     for (let index = 0; index < str.length;) {      
//         console.log(str[index]);
//         index++};

// }
// solve('Hello world')

//------------------------------------------
// this means that even this is a valid for loop

// for(;;) {  //this loop is going to turn in perpetuum; there is not much point of such a loop; hoewever, it is technically possible to write it

// }

//-----------------------------------------

// function solve(str) {
    
//     for (let index = 0; index < str.length; index++) {      
        
//         if (str[index] === ' ') {
//            break;
//         }
//         console.log(str[index]);
        
//       }
//       console.log('finish')

// }
// solve('Hello world')

//-------------------------------------

// function solve(str) {
    
//     for (let index = str.length-1; index >= 0; index--) {      
        
//         if (str[index] === ' ') {
           
//         }
//         console.log(str[index]);
        
//       }
//       console.log('finish')

// }
// solve('Hello world') // decrementing by 1// printing the string in reverse order

//----------------------------------

//this is a way to print the string from back to forth, skipping every 2nd letter.  

// function solve(str) {
    
//         for (let index = str.length-1; index >= 0; index = index-2) {      
            
//             if (str[index] === ' ') {
               
//             }
//             console.log(str[index]);
            
//           }
//           console.log('finish')
    
//     }
//     solve('Hello world')

//---------------------------------
//for Of for loop

// function solve(str) {
// for (char of str) {
//     console.log(char)
// }

// }
// solve('Hello world')

//-------------------------------

//In JavaScript, numbers are not iterable. String, Array, Map and Set are iterable. 
//You cannot reach the index of a number, you have to convert it to string or array or something else.

// function solve(str) {
// for (abv of str) {
//     console.log(char)
// }

// }
// solve('Hello world')

//---------------------------------
//nested for loops. In this case, the inside for loop will be run at every turn of the outside loop

// for( i = 0; i < 3; i++) {
//     for( j = 0; j < 3; j++) {
//         console.log(`i =${i}, j = ${j}`)

//     }
// }

//-------------------------------

const arrNum = [1,2,3,4,5,6,7,8] //spaces don't matter //this is an array with type number
const arrStr = ['Petya', 'Donal', 'Michael', 'Conall'] //when hoverin above the array name, we see it's type, in this case, type string