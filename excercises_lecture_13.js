
// function outerFunction () {
//     let count = 0
//     function innerFunction(){
//     count = count + 1
//     console.log(count);
// }
//     return innerFunction
// }

// // console.log(outerFunction())
// // console.log(outerFunction())
// // console.log(outerFunction())

// const countHandler = outerFunction()
// countHandler()
// countHandler()
// countHandler()

//by putting a function inside a function, we achieve the concept of closure, 
//which allows us to preserve state of a private variable, without exposing it 
//to the global scope.

//-----------------------------------------------------------

// const createCounter = () => {
//     //initialize the count variable inside the closure
//     let count = 0;
//     return {
//         increment: () => {
//         count ++
//         return count
//         },
//         decrement: () => {
//         count--
//         return count
//         },
//         getCount: () => {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.decrement());

//----------------------------------------

// const app = () => {

//     let count = 0

// const increment = () => {
//     count++

// }

// }

// onload(app)
// onClick(increment)
//----------------------------------------

        // inside this script tag we can write Javascript
        // let count = 0
        // function showMessage(){
        //     "alert('hello world')"
        // }

        // const incrementCounter = () => {
//     //initialize the count variable inside the closure
//     let count = 0;
//     return {
//         increment: () => {
//         count ++
//         console.log(count); 
//         },
//         decrement: () => {
//         count--
//         return count
//         },
//         getCount: () => {
//             console.log(count); 
//         }
//     }
// }

// const counter = createCounter()
// counter.increment
//-----------------------------

// console.log("hello");

// let count = 0
// console.log(count);

// console.log(document);
// console.log({document})

const app = (event) => {
    
//helpers
const createElement = (tagName, innerText, className)=> {
    const element = document.createElement(tagName)
    if(innerText){
    element.innerText = innerText}
    if(className){
        element.className = className}
    
    

return element
}

//states
let count = 0

//references to html elements
   
    const incrementButton = document.getElementById('increment')
    const decrementButton = createElement('button', '-')
    const countPtag = createElement('p', count.toString())
    const body = document.getElementById('body')



    // countPtag.innerText = count


//append or edit HTML elements

    decrementButton.innerText = '-'  
    body.appendChild(countPtag)
    body.appendChild(decrementButton)
  

    // console.log(countPtag);+
        // console.log({decrementButton});
    // console.log({incrementButton});
    // incrementButton.style
    // .backgroundColor = "red"
    
//all event handlers
    const increaseCount = (event) => {
            count++
            countPtag.innerText = count
            // countPtag.style.backgroundColor = 'blue'
            console.log(countPtag);

            // console.log(count);
    }

    const decrementCount = (event) => {
        count--
        countPtag.innerText = count
       
        // countPtag.style.backgroundColor = 'blue'
        }

    //all addEventListeners

    incrementButton.addEventListener('click', increaseCount)
    decrementButton.addEventListener('click', decrementCount)


    }
//BOM
window.addEventListener('load', app)

//higher order function is a function, which, within itself, uses other functions