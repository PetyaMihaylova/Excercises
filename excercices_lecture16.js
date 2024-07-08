const app = () => {
const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const submitButton = document.getElementById('button')

const emptyInputs = [];

const validateInput = (input) => {
    if (!input.value) {
        emptyInputs.push(input.name)
        input.style.border = 'red solid 2px'
      } else {
        input.style.border = ''
    }
}

console.log(form, nameInput, emailInput, messageInput, submitButton);

const submitHandler = (event) => {
    event.preventDefault()
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    if(nameValue && emailValue && messageValue) {
        alert (`Your name from ${nameValue} with email ${emailValue} and Message ${messageValue}`)
 
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''

    } else {
    validateInput(nameInput)
    validateInput(emailInput)
    validateInput(messageInput)


        alert(`Please fill ${emptyInputs.join(', ')}!`)
    }

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

//In this case, refreshing of the page is like refreshing our applications. In some cases we may
//want to do that, but in others, we will not want to do that.

//When we write if(nameValue && emailValue && messageValue), we mean that if these constants are not empty,
//otherwise, when they are empty strings or just empty, the value inside the if-statement will be falsy,
//hence the body of the function will not be run!