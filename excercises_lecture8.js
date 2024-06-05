// function executor(callback, words) {
    
//     for(let char of words){
//         //const callback = (char) => addCharCallBack(char, + '!';
//     console.log(callback(char));
//     }
// }

// // function cLogCallBack(char) {
    
// //     console.log(char)}

// function addCharCallBack(char, charToAdd){
// return(char + charToAdd)}
// executor(addCharCallBack(char, + '!'), text) //in this case, we directly call the function addCharCallBack, 
// //because we write it with its arguments. 
// executor(() => addCharCallBack(char, + '!';)

// const text = 'Lorem ipsum'
// executor((char) => {return(char + '!'), text}); //this is the same as the below line
// executor((char) => char + '!', text;) //in anonymous arrow functions as callback, we can add parameters/arguments.
// //also, if the code after the arro


// executor(addCharCallBack, text) //here, we add the function only by the name,
// //and not by addCharCallBack(), because otherwise, addCharCallBack() will mean 
// //the result of the function. Considering it is just a console.log in the block scope,
// //and there is no return, the result of the function will be undefined.
// //so in executor(addCharCallBack(), text), we will get executor(undefined, text)

// executor(addCharCallBack(), text) //so it is very difficult to give additional parameters to ddCharCallBack(), 
// //if the function is to receive additional parameters from the outside

// const addCharCallBack = (char) => {console.log(char + "!")}

//---------------------------------------------------------

// Objective:
// Write a JavaScript program that takes a hardcoded sentence and a number (N), 
// and provides the following statistics:
// The total number of words in the sentence.The length of the longest word.The length of the shortest word.
// The average word length.The number of words that are longer than a given number (N).
// Instructions:
// Input Handling:
// Use a hardcoded sentence and a hardcoded number (N).
// Processing:
// Traverse the sentence to count the number of words.Find the length of the longest and shortest words.
// Calculate the average word length.Count how many words are longer than the given number (N).
// Output:
// Print the total number of words.Print the length of the longest word.Print the length of the shortest word.
// Print the average word length.Print the number of words longer than N.

// let N = 5
// let sentence = 'Petya is a great student of JavaScript'

// function solve1 (sentence, N){
//     let totalNumberWords = 1
//     let longestWord = 1
//     let shortestWord = 1
//     let averageWord = 1
//     let nWords = 0
//     let tnumberWords = 1

//     for (let word of sentence) {
//         if (word.length > longestWord) {
//             return word = longestWord;
//             longestWord++
//         }

//         if(word.length === 1){
//             return word = shortestWord;
//             shortestWord === 1;
//         }

//         if (word.length < shortestWord){
//             return word = shortestWord;
//             shortestWord++
//         }
//     }
    
// }
// console.log(solve1(sentence, number))
//---------------------------------------------------

// let text = 'More pochivka zima ski'
// const number = 6

// const solve = (text, number, calcTotalNumberOfWords, calcAverageWordLength) => {

    
// const totalWords = calcTotalNumberOfWords(text)
// let lengthOfLongestWord = 1
// let lengthOfShortestWord = 1
// let totalLength = 0

// const arrayOfWords = text.split(' ') 
// for(let word of arrayOfWords){

// if(word.length > lengthOfLongestWord)
// {word.length = lengthOfLongestWord}

// else if (lengthOfShortestWord === 0) {
//     lengthOfShortestWord = word.length}

// else if (word.length < lengthOfShortestWord)
//     {word.length = lengthOfShortestWord}

// totalLength = totalLength + word.length 
//     {return totalLength/totalWords}

// }
// const AverageWordLength = calcAverageWordLength(totalLength, totalWords)
// console.log(totalWords, 'totalWords')
// console.log(lengthOfLongestWord, 'lengthOfLongestWord')
// console.log(lengthOfShortestWord, 'lengthOfShortestWord')
// console.log(AverageWordLength, 'averageWordLength')
// }

// const calcTotalNumberOfWords = (text) => {
//         return text.split(' ').length;
//     }
// const calcAverageWordLength = (totalLength, totalWords) => {
//     return totalLength/ totalWords
// }


// solve('More pochivka zima ski', 6, calcTotalNumberOfWords, calcAverageWordLength)

// const arr = [1, 2, 3, 4, 5, 6]

// function executor (callback, arr) {
//     for(num of arr){
//         callback(num)}
//     }

// function cLogCallBack (num, arr) {

//         console.log(num)

// }

// executor(cLogCallBack, arr)

//forEach

// arr.forEach(cLogCallBack) === forEach(cLogCallBack, arr) //these two are always equivalent

// arr.forEach((num, index, arr) => {console.log(num, 'number', index, 'index', arr, 'array')}) //the forEach() method is usu. used with an anonymous arrow function
// arr.forEach((num) => {console.log(num, 'number')})

//-------------------------------------

const arr = [1, 2, 3, 4, 5, 6]
// arr.push(7) //this is a method to add an item at the end of the array
// console.log(arr) //(7) [1, 2, 3, 4, 5, 6, 7]

// const newLengthOfTheArray = arr.push(7) //
// console.log(newLengthOfTheArray) // in this way, we can return the new length of the array, same as console.log(arr.length)

// const removed = arr.pop() //arr.pop() removes the last item in the array
// console.log(removed) //6

// console.log(arr[arr.length-1]) //5 - this returns the element of the last index, that is, 5 after we removed 6 with the above line

arr.shift() //this removes the first element of the array
console.log(arr) //(5) [2, 3, 4, 5, 6]
