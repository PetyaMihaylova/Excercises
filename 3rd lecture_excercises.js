const s = "Hello World"

// what is the length of the string?
// console.log(s.length)

// how many indices does the string have?
// console.log(s.length-1)

// index of 1 returns 2nd letter of the string
// console.log(s[1])

// how to select the last letter from the string
// console.log(s[s.length-1])

// we get undefined as a result when requesting an index that doesn't exist
// // console.log(s[109])
// console.log(s[-1])

// charAt
// console.log(s.charAt(0))
// console.log(charAt(s.length-2))

// charCodeAt(0) - returns the code from the encoding of a particular character or letter
// console.log(s.charCodeAt(0))

// at - the difference between it and charAt is that it allows us to use negative indices
//console.log(s.at(-1))

//extracting string parts with .slice-methods. With it, one can also use negative indices
const text= 'Cat, Dog, Mouse'
// console.log(text.slice(0, 3))
// console.log(text.slice())
// console.log(text.slice(3))
// console.log(text.slice(-4,-1))

//extracting string parts with .substring, one cannot use negative indices
// console.log(text.substring(0, 4))

//extracting string parts with .substr() - takes 2 parameters: the index and the length. .substr() is deprecated
// console.log(text.substr(0,4))

// const name = 'grigor'
// console.log(name.toUpperCase())

// const name = 'GRIGOR'
// console.log(name.toLowerCase())

const str1 = 'Hello'
const str2 = 'World'
console.log(str1 + " " + str2)

