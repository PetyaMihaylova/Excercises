const app = () => {
const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const submitButton = document.getElementById('button')

console.log(form, nameInput, emailInput, messageInput, submitButton);

const submitHandler = (event) => {
    event.preventDefault()
}

submitButton.addEventListener('click', submitHandler)
}

window.addEventListener('load', app)

//Every single event handler that we add to the Event Listener comes with an object called event. 
//This object comes with its own methods. Generally, the default behavior of an HTML form after
//pressing the button 'submit' is to reload the page and clear everything that has been written
//in the form. However, in order to prevent the clearing of the information after the reload, 
//we can add event.preventDefault() method in the event Handler function, in this case called
//submitHandler().