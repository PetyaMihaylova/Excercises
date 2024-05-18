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
//     if(score >=80) {
//         return 'Grade B';
//     }
//     if(score >=70) {
//         return 'Grade C';
//     }
//     if(score >=60) {
//         return 'Grade D';
//     }
//     if(score <60) {
//         return 'Grade F';
//     }
// }

// console.log(testGrade(98))
// console.log(testGrade(88))
// console.log(testGrade(18))

// 2. Task for ternary operator: Write a program that determines if a given number is even or odd and prints
// the result accordingly.

function evenOrOdd(number){
    const result = number % 2 === 0 ? 'Number is even':'Number is odd';
    return result;
}

console.log(evenOrOdd(50))
console.log(evenOrOdd(237))
console.log(evenOrOdd(0))


// 3. Task for switch-case: Write a program that takes a month number (1 for January, 2 for February, etc.)
// as input and prints the number of days in that month. Consider leap years for February.