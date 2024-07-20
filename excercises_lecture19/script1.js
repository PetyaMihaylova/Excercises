const app = () => {
const button = document.getElementById('button')
const status = document.getElementById('status')
const createElement = (tagName, innerText) => {
    const element = document.createElement(tagName, innerText)
    if(innerText) {
    element.innerText = innerText
    }
    
        return element
    }
const url = 'https://randomuser.me/api/?results=10'

const apiCall = async () => {
    status.innerHTML='...loading'
    status.style.color ='orange'
let data = {results: []}
try{
    const response = await fetch(url)
    data = await response.json()

    const container = createElement('div')
    console.log(data);
    data.results.forEach(person => {
        console.log(person.name);
        const divPerson = createElement('div')
        const h1Person = createElement('h1', `title: ${person.name.title}, name: ${person.name.first} ${person.name.last}`)
        
        divPerson.append(h1Person)
        container.append(divPerson)

        document.body.append(container)
        status.innerHTML = 'OK'
        status.style.color = 'green'
    });
}catch(error){
    status.innerHTML=error
    status.style.color='red'
    //OR
    //throw new Error = 'bad request'
}
    console.log('work');
  }

button.addEventListener('click', apiCall)
}

window.addEventListener('load', app)