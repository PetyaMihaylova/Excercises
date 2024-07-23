const app = () => {
const baseURL = 'https://official-joke-api.appspot.com'
const oneJokeQuery ='/random_joke'
const getTenJokesQuery ='/random_ten'

const sectionOne = document.getElementById('1')
const sectionTwo = document.getElementById('2')
const sectionThree = document.getElementById('3')

const loaderOne = document.getElementById('loader-1')
const loaderTwo = document.getElementById('loader-2')


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

const buttonTenJokes = createElement('button', 'Get Ten Jokes', 'fetchButton')


containerOneJoke.append(headerOneJoke, punchlineOneJoke, buttonOneJoke)
sectionOne.appendChild(containerOneJoke)
sectionTwo.appendChild(buttonTenJokes)
console.log({buttonOneJoke});

const getRandomJoke = async ()=> {
    console.time()
    buttonOneJoke.disabled = true
    loaderOne.style.display = 'inline-block'
try {
const response = await fetch(baseURL + oneJokeQuery)
const data = await response.json()

headerOneJoke.innerText = data.setup
punchlineOneJoke.innerText = data.punchline
}catch(error){
alert(error);
}finally{
buttonOneJoke.disabled = false
loaderOne.style.display = 'none'
}
console.timeEnd()
}

const getRandomJoke2 = () => {
    console.time()
     buttonOneJoke.disabled = true
    loaderOne.style.display = 'inline-block'
    fetch(baseURL+oneJokeQuery)
    .then((response)=>response.json())
    .then((data)=>{ 
        headerOneJoke.innerText = data.setup
        punchlineOneJoke.innerText = data.punchline
    })
    .catch((error)=> alert(error))
    .finally(()=>{buttonOneJoke.disabled = false
    loaderOne.style.display = 'none'
})
console.timeEnd()
}

const getRandomTenJokes = async () => {

try{
    const response = await fetch(baseURL+getTenJokesQuery)
    const data = await response.json()
   console.log(data);
    data.forEach(element => {
        const container = createElement('div', '', 'card')
        const setup= createElement('h1', element.setup)
        const punchline = createElement('h2', element.punchline)
        container.append(setup, punchline)
        sectionTwo.prepend(container)
    });

}catch(error){

} finally{

}
}

buttonOneJoke.addEventListener('click', getRandomJoke2)
buttonTenJokes.addEventListener('click', getRandomTenJokes)

}

window.addEventListener('load', app)