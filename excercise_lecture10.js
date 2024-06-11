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

    arr = [1, 2, 3, 4]
    // const arr2 = [...arr]
    const arr2 = JSON.parse(JSON.stringify(arr))
    //arr2 = ref1
    arr2[4] = 5
    console.log(arr2) //(5) [1, 2, 3, 4, 5]
    console.log(arr) //(5) [1, 2, 3, 4]