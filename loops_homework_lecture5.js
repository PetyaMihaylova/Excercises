// 1.Description: Write a program that prints all the numbers from 1 to 100. 
// If the number is a multiple of 3, print "Fizz" instead of the number. 
// If the number is a multiple of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// 2.Description: Write a program that iterates through an array of numbers and adds them to a total sum until a negative number is encountered. Finally, print the total sum of the entered numbers.
// const numbers = [1, 2, 3, 4, 5, 6]; // Sample array with a negative number

// 3.Description: Write a program that iterates through an array of passwords and stops when the correct password ("12345") is found. After the correct password is found, print a welcome message.
// const passwords = ["password1", "password2", "12345", "password3"];




function numbersTo100(arr) {
    arr = Array.from(Array(100).keys())
    debugger
for (let i = 1; i <= 100 && i % 3 !==0 && i % 5 !==0; i++) {
    { console.log(arr)}}}
        



//    if(n % 3 === 0){
//    console.log('Fizz');
   
//    }
   

//    else if(n % 5 === 0) {
//     console.log('Buzz');
    
//    }
   

//    else if(n % 3 === 0 && n % 5 === 0) {
//     console.log('FizzBuzz');
    
//    }
   
   
//    else {return `${n}`}

//    }
// }
//  }

console.log(numbersTo100(27))