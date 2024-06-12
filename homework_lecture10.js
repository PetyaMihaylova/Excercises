// Task 1 :You have an array of fruits. 
// Remove "Banana" and "Orange" from the array and add "Kiwi" and "Mango" in their place.
// Array:
// ["Apple", "Banana", "Orange", "Cherry"]; 

arr = ["Apple", "Banana", "Orange", "Cherry"]
arr.splice(1, 2, "Kiwi", "Mango")
console.log(arr) //(4) ['Apple', 'Kiwi', 'Mango', 'Cherry']


// Task 2 :You have an array of student names. Sort the array in alphabetical order.
// Array:
//  ["John", "Anna", "Zoe", "Mark", "Beth"];

arr = ["John", "Anna", "Zoe", "Mark", "Beth"]
const AlphaBetOrd = arr.sort((a, b) => a.localeCompare(b))
console.log(AlphaBetOrd) //5) ['Anna', 'Beth', 'John', 'Mark', 'Zoe']

// Task 3 :You have an array of numbers. 
// Create a new array that contains only the first 5 numbers from the original array.
// Array:
//  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

 arr =  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 const first5 = arr.slice(0, 5)
 console.log(first5) //[10, 20, 30, 40, 50]