// const user = {
//     name: 'Mitko',
//     email: 'mitko@abv.bg',
//     age: 24,
//     city: 'Sofia',
//     level: 4
// }  //written in this way, the keys are always from type string

// user = {} //This gives us an error, because we cannot rewrite something to a constant
// user.street = 'Ivan Vazov' //we can rewrite an object similarly to rewriting an array

// console.log(user.name) //Mitko
// console.log(user.age) //24
// console.log(user.street) //Ivan Vazov

// user.name = 'Shishman'
// console.log(user.name) //Shishman
// console.log(user['name']) //Shishman // this is another way of reaching inside the object by giving the key as an index

const user = {
    name_first: 'Mitko',
    email: 'mitko@abv.bg',
    age: 24,
    city: 'Sofia',
    level: 4,
    family: [{name: 'Polya', role: 'mother'}, {name: 'Dancho', role: 'father'}],
    }

console.log(user.family) //(2) [{…}, {…}] //for a value in a key, we can have an array of objects

const key = 'name_first'
console.log(user.name_first) //Mitko
console.log(user['key']) //undefined
console.log(user[key])  ///Mitko Here we can dynamically take a value from the outside, like key
user[key] = 'Ivan'
console.log(user[key])