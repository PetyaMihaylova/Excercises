//the below is an infinite loop, because the condition is always true

// ------------------------------------------

//task: print 10x 'Hello world!'

let n = 0;
while (n < 10) {
   
    console.log('Hello world!'); //10x 'Hello world!'
    
    // n = n+1; // n++
    n = n+2 //if we want to jump over 1 turn at every turn // 5x 'Hello world!'
}