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