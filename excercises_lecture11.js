const user = {
    name: 'Mitko',
    email: 'mitko@abv.bg',
    age: 24,
    city: 'Sofia',
    level: 4
}  //written in this way, the keys are always from type string

// user = {} //This gives us an error, because we cannot rewrite something to a constant
user.street = 'Ivan Vazov' //we can rewrite an object similarly to rewriting an array

console.log(user.name) //Mitko
console.log(user.age) //24
console.log(user.street) //Ivan Vazov