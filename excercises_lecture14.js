const app = () => {
    const myDiv = document.getElementById('myDiv')
    console.log({myDiv});
    const allDivs = Array.from(document.getElementsByTagName('div')) 
    console.log(allDivs);
    const myElementsByClassName = Array.from(document.getElementsByClassName('MyClass'))
    console.log({myElementsByClassName});
    // console.log(allDivs.length)
    // console.log(allDivs.item(0))
    // console.log(allDivs[0])
    // console.log(allDivs[allDivs.length-1])
// console.log(allDivs.forEach((e) => console.log(e)))
console.log(allDivs.forEach((div, index) => div.innerText = index))
myElementsByClassName.forEach((element, index) => element.style.backgroundColor = 'red')
}


window.addEventListener('load', app)

//In the time, when Javascript has been developing, the library called JQuery appears. 
//jQuery allows us to select elements in the same way that we select elements in CSS.
//In time, JQuery had a huge success and because of that, it has been integrated in JavaScript, 
//so there is no need to install JQuery separately.

