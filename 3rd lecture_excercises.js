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

// charCodeAt(0) - returns the code from the encoding of a particular character or letter
// console.log(s.charCodeAt(0))

// at - the difference between it and charAt is that it allows us to use negative indices
console.log(s.at(-1))