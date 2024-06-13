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
console.log(user.family.find((member) => member.role === 'mother'))// {name: 'Polya', role: 'mother'}

// const key = 'name_first'
// console.log(user.name_first) //Mitko
// console.log(user['key']) //undefined
// console.log(user[key])  ///Mitko Here we can dynamically take a value from the outside, like key
// user[key] = 'Ivan'
// console.log(user[key])


for (property in user){
    console.log(property

    )
}
// name_first
// email
// age
// city
// level
// family

// for(key in object_name){
//     console.log(key)
// }

for (let property of user.family){
    console.log(property

    )} //{name: 'Polya', role: 'mother'}
    // {name: 'Dancho', role: 'father'} //this is the for of loop in arrays

    //in arrays, we have for of loop
    //in objects, we have for in loop

for(property in user){
    console.log(user[property])
} //
// Mitko
// mitko@abv.bg
// 24
// Sofia
// 4
// (2) [{…}, {…}]

for(property in user){
    console.log(property === 'name_first', property)
} // true name_first
// false email
// false age
// false city
// false level
// false family

Object.hasOwn(user, 'level') //to check, whether an object has a certain property/key, 
//we can use a method on the global Object, namely Object.hasOwn(arr_name, 'property_name')