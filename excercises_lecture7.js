// ask: Password Strength Checker
// Objective:Create a program that checks the strength of a given password. The program will evaluate the password based on various criteria and assign a strength level to it.
// Criteria:
// The password length must be at least 8 characters.The password must contain at least one uppercase letter.
// The password must contain at least one lowercase letter.
// The password must contain at least one digit.
// The password must contain at least one special character (e.g., !, @, #, $, %, ^, &, *).

// Strength Levels:
// Weak: Meets 0 or 1 criteria.
// Moderate: Meets 2 or 3 criteria.
// Strong: Meets 4 or all 5 criteria.
// Instructions:
// Use a for loop to iterate through the characters of the password.
// Use string methods to check for the presence of uppercase letters, lowercase letters, digits, and special characters.
// Use if-else statements to evaluate which criteria the password meets.
// Based on the number of criteria met, print out the password strength.

// Example Output:
// Input: password123!
// Output: "Password Strength: Strong"
// Input: password
// Output: "Password Strength: Weak"

//Solution:

const a = 'a'
const A = 'A'
const x = 2
console.log(a >= 'a' && a <= 'z') //true //this is how we check if const a is a lowercase letter
console.log(A >= 'Z' && a <= 'Z') //false // //this is how we check if const A is an uppercase letter
console.log(A <= 'Z') //true
console.log(x >= 'a' && x <= 'z') //false