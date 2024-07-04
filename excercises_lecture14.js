const app = () => {
    const myDiv = document.getElementById('myDiv')
    // console.log({myDiv});
    const allDivs = Array.from(document.getElementsByTagName('div')) 
    // console.log(allDivs);
    const myElementsByClassName = Array.from(document.getElementsByClassName('MyClass'))
    // console.log({myElementsByClassName});

    //querySelector() can select elements by tag name, by class name and by id. 
    // //When we use the tag name, we always select the first element that is a match for the tag.
    // const myDivQ = document.querySelector('div')
    
    // console.log({myDivQ});

    // const myDivQ = document.querySelector('#myDiv')
    const myDivQ = document.querySelector('.MyClass > .myP')
    myDivQ.style.backgroundColor = 'green'
    myDivQ.innerText = 'green'
    console.log(myDivQ);
    console.log(myDivQ.innerText);

    // const myDivsQ = document.querySelectorAll('div')
    //When we use document.querySelectorAll(), we get all elements that match the condition in the brackets.
    
    const myDivsQ = document.querySelectorAll('.MyClass')
    console.log(myDivsQ);

    // console.log(allDivs.length)
    // console.log(allDivs.item(0))
    // console.log(allDivs[0])
    // console.log(allDivs[allDivs.length-1])
// console.log(allDivs.forEach((e) => console.log(e)))

// console.log(allDivs.forEach((div, index) => div.innerText = index))
// myElementsByClassName.forEach((element, index) => element.style.backgroundColor = 'red')
}


window.addEventListener('load', app)

//In the time, when Javascript has been developing, the library called JQuery appears. 
//jQuery allows us to select elements in the same way that we select elements in CSS.
//In time, JQuery had a huge success and because of that, it has been integrated in JavaScript, 
//so there is no need to install JQuery separately.

//The way we write in CSS with the dashes "-" is called "kebab case." In JavaScript, we do not use
//"kebab case", we use "camel case", where the 2nd letter is capitalized.

