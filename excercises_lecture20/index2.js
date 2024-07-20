// const promise = new Promise((resolve, reject) => {

// setTimeout(()=> {

// resolve('Async operation complete')}, 10000)

// })

// promise.then((result)=> {
// console.log(result)}).catch((error) => {
// console.error(error)
// });
    
//---------------------------------------
// const promise1 = new Promise((resolve)=> {
// setTimeout(()=>{resolve('async operation 1 complete')

// }, 1000)
// })

// const promise2 = new Promise((resolve)=> {
//     setTimeout(()=>{resolve('async operation 2 complete')

//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject)=> {
// setTimeout(()=>{reject('reject')

// }, 3000)
// })
    

// Promise.all([promise1, promise2, promise3]).
// then((result) => console.log(result)).catch((error)=> console.error(error))
//-----------------------------------------

const solve = () => {
    setTimeout(() => {console.log('Hello');
        
    }, 5000)

    console.log('World');
}

solve()
