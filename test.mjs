// export const solve = (string) => console.log(string);
// export const solve1 = (string) => console.log(string);
// export const solve2 = (string) => console.log(string)

// test = {
// solve:(string) => console.log(string),
// solve1:(string) => console.log(string),
// solve2:(string) => console.log(string),
// }

// const {solve, solve2} = test

//----------------------------------------

// const solve = (string) => console.log(string);
// export default solve

//---------------------------------------

// const now = new Date()
// const now = new Date(1989, 2, 18, 11, 30, 0)// year, month, day, hour, minutes, seconds
// console.log(now)// Wed Jun 19 2024 00:17:49 GMT+0300 (Eastern European Summer Time)// if we do not add any parameters in const now = new Date(), it gives us the current date
//the ISO standard for dates is called ISO 8601
// const isoDate = '2024-02-18T11:30:00'
// const now = new Date(isoDate) //Sun Feb 18 2024 11:30:00 GMT+0200 (Eastern European Standard Time)
// console.log(now)


const isoDate = 1700000000000000 //Mon Nov 09 55840 00:13:20 GMT+0200 (Eastern European Standard Time)
const now = new Date(isoDate) //Sun Feb 18 2024 11:30:00 GMT+0200 (Eastern European Standard Time)
// console.log(now.getFullYear())//55840
// console.log(now.getDate());//9
// console.log(now.getDay());//1// getDay() method returns the day as an indexed value. That is, Sunday is 0, Monday is 1, etc.
// console.log(now.setFullYear(1989))
// console.log(now); //Thu Nov 09 1989 00:13:20 GMT+0300 (Eastern European Standard Time)
// console.log(now.setMonth(11))
// console.log(now); //Sat Dec 09 1989 00:13:20 GMT+0300 (Eastern European Standard Time)
// //here, the months are also indexed. 0 is january, 11 is december
// console.log(now.setDate(25))
// console.log(now);//C:\Program Files\nodejs\node.exe .\test.mjs
// console.log(now.setHours(11));
// console.log(now)//Mon Dec 25 1989 11:13:20 GMT+0300 (Eastern European Standard Time)
// console.log(typeof now) //object
// console.log(now.toString())//returns the date in a string format
// console.log(now.toString().split(' '));// (10) ['Mon', 'Nov', '09', '55840', '00:13:20', 'GMT+0200', '(Eastern', 'European', 'Standard', 'Time)']
// console.log(now.toDateString()) //Mon Nov 09 55840
// console.log(now.toISOString()); //+055840-11-08T22:13:20.000Z
// console.log(now.toLocaleDateString()); //09/11/55840
// console.log(now.toLocaleTimeString()) //00:13:20
// console.log(now.toLocaleString('ko-KR', {year: '2-digit', month: 'long', day: 'numeric' })); //55840. 11. 9. 오전 12:13:20

const date1 = new Date('2024-06-16T12:00:00')
const date2 =new Date('2024-06-18T12:00:00')
date1.setDate(date1.getDate() + 7)
console.log(date1); //Sun Jun 23 2024 12:00:00 GMT+0300 (Eastern European Summer Time)
const difInTime = date2.getTime() - date1.getTime()
console.log(difInTime); //-432000000

// if(date1.getTime() > date2.getTime()){
//     console.log('Date 1 is later than Date 2')
// } else if (date1.getTime() < date2.getTime()){console.log ('Date 2 is later than Date 1')}
// else{console.log('Date1 is the same as Date2');} //Date 2 is later than Date 1

//with a get method, we obtain something, with a set method, we set something
//Obects do not have the .split() method -- only strings and arrays have it.

55840
9
1

// Mon Dec 25 1989 00:13:20 GMT+0300 (Eastern European Standard Time)

