// task 1

// function solve() {
// var number = 4;

// }


// console.log(number);
// solve()

// -----------------------------

// task2

// const number=4;
// function solve() {
    
//     function solve2() {
//         console.log(number);
//     }
//     solve2();
// }

// solve()

// -------------------------------

// task3

// function solve(a,b) {
// //    const result = a + b;
//     return a+b;
    
// }

// const result = solve(2,8);
// console.log(solve(2,8));

// ------------------------------

// task4

// function solve(a,b) {
// return a + b;
// }
// const firstNumber =9.23;
// const secondNumber =9.425;

// // console.log(solve(Number(firstNumber), Number(secondNumber)));

// console.log(Number(solve(firstNumber, secondNumber)).toFixed(0));

// -----------------------------------------------

// task5

const jacket = 445.45
const pants = 130.25

function calcDiscount(product, discountPercent) {
const discountValue = product*discountPercent/100
return product-discountValue
}

console.log(typeof calcDiscount(jacket, 10))
console.log(typeof calcDiscount(pants, 15).toFixed(2))