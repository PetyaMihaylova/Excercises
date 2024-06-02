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


// function checkPass(pass){

// let criteria = 0;
// let length = pass.length >= 8;
// let upperCase = false;
// let lowerCase = false;
// let digit = false;
// let specialChar = false;

// if(length) {
//     crieria = criteria + 1;
// }

// else if(criteria === 0 || criteria === 1){
//     console.log('Password is weak', criteria);}

// else if(criteria === 2 || criteria === 3){
//     console.log('Password is moderate', criteria);}

// else if(critera === 4 || criteria ===5){
//     console.log('Password is strong', criteria);}
// }

// checkPass('123abv!@#yu7')

// ------------------------------the below is wrong, fix it

function checkPass(pass){

const lengthCheck = pass.length >= 8;
const upperCase = (str) => /A-Z/.test(str);
const lowerCase = (str) => /a-z/.test(str);
const digit = (str) => /\d/.test(str);
const specialChar = (str) => /`!@#$%^&*()_+-\=\[\]{};':"\\|,.<>\/?~]/.test(str);

const lowerCheck = lowerCase(pass);
const upperCheck = upperCase(pass);
const digitCheck = digit(pass);
const specialCharCheck = specialChar(pass);

let criteriaMet = 0;
if(lengthCheck){criteriaMet++;}
if(lowerCheck){criteriaMet++;}
if(digitCheck){criteriaMet++;}
if(specialCharCheck){criteriaMet++;}
if(upperCheck){criteriaMet++}

if(criteriaMet >=4){console.log('Strong Password');}
else if(criteriaMet === 2 || criteriaMet === 3){console.log ('Medium strong Password');}
else {console.log ('Weak Password')}
}

checkPass('p123456!78MO@$W%')

//-----------------------------

// function printStrongNess(input_string) { 
//     const n = input_string.length; 
//     // Checking lower alphabet in string 
//     let hasLower = false; 
//     let hasUpper = false; 
//     let hasDigit = false; 
//     let specialChar = false; 
//     const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 "; 
    
//     for (let i = 0; i < n; i++) { 
//       if (input_string[i] >= "a" && input_string[i] <= "z") { 
//         hasLower = true; 
//       } 
//       if (input_string[i] >= "A" && input_string[i] <= "Z") { 
//         hasUpper = true; 
//       } 
//       if (input_string[i] >= "0" && input_string[i] <= "9") { 
//         hasDigit = true; 
//       } 
//       if (!normalChars.includes(input_string[i])) { 
//         specialChar = true; 
//       } 
//     } 
    
//     // Strength of password 
//     let strength = "Weak"; 
//     if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) { 
//       strength = "Strong"; 
//     } else if ((hasLower || hasUpper) && specialChar && n >= 6) { 
//       strength = "Moderate"; 
//     } 
    
//     console.log(`Strength of password: ${strength}`); 
//   } 
    
//   // Driver code 
//   const input_string = "GeeksforGeeks!@12"; 
//   printStrongNess(input_string); 
