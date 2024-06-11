// const array = [5, 12, 8, 130, 44]
// let result;

// array.forEach((element) => {
    
    // if (element >10 && haveHit) {
    // result = element
   
    // }
    // })

    // console.log(result) //44 // gives us the last element of the array, fulfilling the condition

    //------------------------------------
// const array = [5, 12, 8, 130, 44]
// let result;
// let haveHit = true
// array.forEach((element) => {
    
//     if (element >10 && haveHit) {
//     result = element
//     haveHit = false
//     }
//     })

//     console.log(result) //12 gives us the first element which fulfills the condition

// const array = [5, 12, 8, 130, 44]
// const result = array.find((element) => element > 10)
// console.log(result); //12, array.find() method returns us the first element abiding by the predicate. and undefined if no element abides

//with arr.forEach(), we find the last element fulfilling the condition
//with arr.find(), we find the first element fulfilling the condition

// let result = []
// const array = [5, 12, 8, 130, 44]
// array.forEach((element) => {
    
//     if (element >10 ) {
//     result.push(element)
   
//     }
//     })

//     console.log(result) //[12, 130, 44] If we want to get all elements fulfilling the condition
    //with .forEach, we create an empty array result = [], and then we push the elements which comply with the condition to it

    //arr = ref1
    // arr = [1, 2, 3, 4]
    // const arr2 = arr
    //arr2 = ref1
    // arr2[4] = 5
    // console.log(arr2) //(5) [1, 2, 3, 4, 5]
    // console.log(arr) //(5) [1, 2, 3, 4, 5]

    //In JavaScript, the objects and arrays are saved in a specific way,
    //which is different from the way everything else is saved.

//     arr = [1, 2, 3, 4]
//     // const arr2 = [...arr]
//     // const arr2 = JSON.parse(JSON.stringify(arr))
//     //arr2 = ref1
//     // arr2[4] = 5
//     // console.log(arr2) //(5) [1, 2, 3, 4, 5]
//     // console.log(arr) //(5) [1, 2, 3, 4]

//     //with const2 = [...arr] or JSON.parse(JSON.stringify(arr)) we break the relationship with the reference 

//     let isTrue = []
//     const arr2 = arr.every(element => {if (element > 5)
//         {isTrue.push(true)
//         }else {isTrue.push(false)}}

        
// )
// console.log(arr2)

// const arr = [1, 2, 3, 4]
// const index = arr.findIndex((element, index, arr) => (element < 4))
// console.log(index) // 0 //arr.findIndex - finds the first index that corresponds to the predicate/condition, given with a callback function
// const index1 = arr.findIndex((element, index, arr) => (element < 0))
// console.log(index1) //-1
// const index2 = arr.findIndex((element, index, arr) => (element > 2))
// console.log(index2) //2
// console.log(arr[index2]) //3
// console.log(arr[index]) //1
// console.log(arr[index1]) //undefined
// console.log(arr[-1]) //undefined

// const arr = [1, 2, 3, 4]
// const2= arr.findLastIndex(element => element>1)
// console.log(const2) //3
// const3= arr.findLastIndex(element => element<5)
// console.log(const3) //3

//arr.findLastIndex() method finds the last index that complies with the predicate
//arr.findLast() method finds the last element that complies with the predicate
// const2 = arr.findLastIndex(element => element <3)
// console.log(const2)//1
// arr[1] = 8
// console.log(arr) //[1, 8, 3, 4]

//If you have to change an element in an array, find its index first.
//By knowing its index, you can then change its element.

//We have the task to sum all elements in the array.
const arr = [1, 2, 3, 4]
let result = 0
arr.forEach(element => result += element)
console.log(result) //10