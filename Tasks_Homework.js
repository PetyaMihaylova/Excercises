// Task 1: Create a function to calculate the perimeter of a square
// Objective: To reinforce understanding of JavaScript functions by implementing
//  a function to calculate the perimeter of a square.
// Write a JavaScript function named calculateSquarePerimeter 
// that takes one parameter: sideLength (the length of a side of the square).

const sideLength = 5;

function calculateSquarePerimeter(sideLength) {

return 4*sideLength;
}

console.log(calculateSquarePerimeter(sideLength));


// ----------------------------------------------------

// Task 2: Create a function to convert temperature from Celsius to Fahrenheit
// Objective: To practice JavaScript function creation by implementing a function to convert 
// temperature from Celsius to Fahrenheit.
// Define a JavaScript function named celsiusToFahrenheit that takes one parameter: 
// celsius (the temperature in Celsius).

const celsius = 100;
function celsiusToFahrenheit(celsius) {
    
    return (celsius * 9/5) + 32;}
    
console.log(celsiusToFahrenheit(celsius));

// --------------------------------------------------------------

// Task 3: Create a function to calculate the area of a rectangle
// Objective: To practice implementing a JavaScript function for computing the area of a rectangle.
// Instructions:
// Define a JavaScript function named calculateRectangleArea that takes two parameters:
// length (the length of the rectangle) and width (the width of the rectangle).


const length = 20;
const width = 10;

function calculateRectangleArea(length, width) {

    return length*width;

}
console.log(calculateRectangleArea(length, width));