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
// const text= 'Cat, Dog, Mouse'
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

// const str1 = 'Hello'
// const str2 = 'World'
// // console.log(str1 + " " + str2)

// console.log(str1.concat(" ", str2, "!"))

// const text1 = "        Hello World"
// const text2 = "Hello World             "
// console.log(text1.trim())
// console.log(text2.trim())
// console.log(text1.trimStart())
// console.log(text2.trimEnd())

// const text = '5'
// console.log(text.padStart(8, '7'));
// console.log(Number(text.padEnd(8, '7')));

// const num = 5;
// const text = num.toString();
// console.log(text.padStart(10,'0'));

// const text = 'Hello World'
// console.log(text.repeat(2))

// const text = 'Hello World Hello World Hello World Hello World Hello World'
// console.log(text.replace('World','class'))
// console.log(text.replaceAll('World','class'))

// const text = 'Dog, Dog, Cat, Cat'
// console.log(text.replaceAll('Dog','Cat'))

const text = 'a b,c,d,e,f';
// console.log(text.split(","));
// console.log(text.split(" "));  //  ['a', 'b,c,d,e,f']
// console.log(text.split(''))        // ['a', ' ', 'b', ',', 'c', ',', 'd', ',', 'e', ',', 'f']
// const text = 'Hello World! The world is such a wonderful place.'
// console.log(text.split("!")); // ['Hello World', ' The world is such a wonderful place.']

// const arr = [1, 'asd', 789]
// const userArr = [Petya, Donal, Michael, Conall]

