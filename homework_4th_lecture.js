// 1.Task for if-else if-else: Write a program that takes a user's score as input and outputs their grade
// based on the following criteria:
// Score >= 90: Grade A
// Score >= 80: Grade B
// Score >= 70: Grade C
// Score >= 60: Grade D
// Score < 60: Grade F


// function testGrade(score) {
//     if(score >=90) {
//         return 'Grade A';
//     }
//     else if(score >=80) {
//         return 'Grade B';
//     }
//    else if(score >=70) {
//         return 'Grade C';
//     }
//     else if(score >=60) {
//         return 'Grade D';
//     }
//    else if(score <60) {
//         return 'Grade F';
//     }
// }

// console.log(testGrade(98))
// console.log(testGrade(88))
// console.log(testGrade(18))

// 2. Task for ternary operator: Write a program that determines if a given number is even or odd and prints
// the result accordingly.

// function evenOrOdd(number){
//     const result = (number % 2 === 0) ? 'Number is even':'Number is odd';
//     return result;
// }

// console.log(evenOrOdd(50))
// console.log(evenOrOdd(237))
// console.log(evenOrOdd(0))


// 3. Task for switch-case: Write a program that takes a month number (1 for January, 2 for February, etc.)
// as input and prints the number of days in that month. Consider leap years for February. //poslednata zadacha ne mi se poluchi, nyamah vreme da ya tursya da reshavam tolkova



// function numberOfDays(month, year){
//     const mstring = month.toString(); 
// switch (month.toString()) {
//     case "1":
//         return(`${month} has 31 days in ${year}.`);
//     case "3":
//         return(`${month} has 31 days in ${year}.`);
//     case "5":
//         return(`${month} has 31 days in ${year}.`);
//     case "7":
//         return(`${month} has 31 days in ${year}.`);
//     case "8":
//         return(`${month} has 31 days in ${year}.`);
//     case "10":
//         return(`${month} has 31 days in ${year}.`);
//     case "12":
//       return(`${month} has 31 days in ${year}.`);
      
//     case "4":
//         return(`${month} has 30 days in ${year}.`);
//     case "6":
//         return(`${month} has 30 days in ${year}.`);
//     case "9":
//         return(`${month} has 30 days in ${year}.`);
//     case "11":
//       return(`${month} has 30 days in ${year}.`);
      
//     case "2":
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {   
//         return(`${month} has 29 days in ${year}.`);
        
//       } else {
//         return(`${month} has 28 days in ${year}.`);
    
//       }
//     default:
//       return'Not a valid month name!';
//     }}

// console.log(numberOfDays(2, 1998))  
// console.log(numberOfDays(2, 2028))
// console.log(numberOfDays(2, 2032))
// console.log(numberOfDays(-18, 7896)) 

function numberOfDays(month, year){
 
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    return(`${month} has 31 days in ${year}.`);
    
  case 4:
  case 6:
  case 9:
  case 11:
    return(`${month} has 30 days in ${year}.`);
    
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {   
      return(`${month} has 29 days in ${year}.`);
      
    } else {
      return(`${month} has 28 days in ${year}.`);
  
    }
  default:
    return'Not a valid month name!';
  }}

console.log(numberOfDays(2, 1998))  
console.log(numberOfDays(2, 2028))
console.log(numberOfDays(2, 2032))
console.log(numberOfDays(-18, 7896)) 