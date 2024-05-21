// 1.Description: Write a program that prints all the numbers from 1 to 100. 
// If the number is a multiple of 3, print "Fizz" instead of the number. 
// If the number is a multiple of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".


function numbersTo100(n) {

    
    let arr = Array.from(Array(100).keys())
    debugger

    for (n = 1; n <= 100; n++) {
        if (n % 15 === 0)
            {console.log('Fizzbuzz');}

        else if (n % 3 === 0)
            {console.log('Fizz');
                
            }
        
        else if (n % 5 === 0)
            {console.log('Buzz');
                    
            }

        else console.log()
    }}

    numbersTo100()
    

