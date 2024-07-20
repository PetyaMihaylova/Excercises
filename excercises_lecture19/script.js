//with promises we can plan and create asynchronistic behavior

const app = () => {

const button = document.getElementById('button')
const status = document.getElementById('status')
const setup = document.getElementById('setup')
const punchline = document.getElementById('punchline')
const createElement = (tagName, innerText) => {
    const element = document.createElement(tagName)
    if(innerText){
    element.innerText = innerText}
    return element
}
const url = 'https://official-joke-api.appspot.com//random_joke'
const apiCall = async () => {
//make a fetch api call to get the data
// status.innerHTML = '..loading'
// status.style.color = 'orange'
try{
    const response = await fetch(url)
    const data = await response.json()

    setup.innerText = data.setup
    punchline.innerText = data.punchline
    console.log(data);
    // status.innerHTML = 'ok'
    // status.style.color = 'green'

} catch (error) {
status.innerHTML = error
status.style.color = 'red'

    }
}

    button.addEventListener('click', apiCall)

}

window.addEventListener('load', app)


// Endpoint is a place we can request information from and receive it.
// fetch() requests, which we use, have various methods, which we can use.
// Some APIs that are created especially for us, support various methods.
// The free of charge APIs only support the GET method. In this case, our
// fetch() request has used the GET method