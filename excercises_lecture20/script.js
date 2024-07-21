const app = () => {
const baseURL = 'https://official-joke-api.appspot.com'
const oneJokeQuery ='/random_joke'
const getTenJokesQuery ='/random_ten'

const sectionOne = document.getElementById('1')
const sectionTwo = document.getElementById('2')
const sectionThree = document.getElementById('3')

const loaderOne = document.getElementById('loader-1')


const createElement = (tag, text, styleClass) => {
    if(typeof tag !== 'string') {
        console.error('createElement expects the first argument to be with type string');
        return
    }
    const element = document.createElement(tag)
    if(text){
        element.innerText = text
    }
    if(styleClass){
        element.classList.add(styleClass)
    }
    return element
}

const containerOneJoke = createElement('div', '', 'card')
const headerOneJoke = createElement('h1', 'setup')
const punchlineOneJoke = createElement('h2', 'punchline')

const buttonOneJoke = createElement('button', 'Get Random Joke', 'fetchButton')
containerOneJoke.append(headerOneJoke, punchlineOneJoke, buttonOneJoke)
sectionOne.appendChild(containerOneJoke)
console.log({buttonOneJoke});
const getRandomJoke = async ()=> {
    buttonOneJoke.disabled = true
try {
const response = await fetch(baseURL + oneJokeQuery)
const data = await response.json()
headerOneJoke.innerText = data.setup
punchlineOneJoke.innerText = data.punchline
}catch(error){
alert(error);
}finally{
buttonOneJoke.disabled = false
}

}

buttonOneJoke.addEventListener('click', getRandomJoke)

}

window.addEventListener('load', app)