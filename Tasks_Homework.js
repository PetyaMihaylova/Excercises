// Task 1: Create a function to calculate the perimeter of a square
// Objective: To reinforce understanding of JavaScript functions by implementing
//  a function to calculate the perimeter of a square.
// Write a JavaScript function named calculateSquarePerimeter 
// that takes one parameter: sideLength (the length of a side of the square).

const sideLength = 5

function calculateSquarePerimeter(sideLength) {

return 4*sideLength;
}

console.log(calculateSquarePerimeter(sideLength))


// ----------------------------------------------------

// Task 2: Create a function to convert temperature from Celsius to Fahrenheit
// Objective: To practice JavaScript function creation by implementing a function to convert 
// temperature from Celsius to Fahrenheit.
// Define a JavaScript function named celsiusToFahrenheit that takes one parameter: 
// celsius (the temperature in Celsius).


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;}
    
console.log(celsiusToFahrenheit(100))
