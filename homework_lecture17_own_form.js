const app = () => {

const form = document.getElementsByClassName('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const submitButton = document.getElementById('button')

const validateInput = (input) => {
    if (!input.value) {
        
        input.style.border = 'red solid 2px'
      } else {
        input.style.border = ''
    }
}

console.log(form, nameInput, emailInput, messageInput, submitButton);

const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    console.log(formData);
   

    const nameValue = formData.get('name');
    const emailValue = formData.get('email');
    const messageValue = formData.get('message');
    if(nameValue && emailValue && messageValue) {
        alert (`Your name from ${nameValue} with email ${emailValue} and Message ${messageValue}`)
 
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
    

    } else {
 

        alert(`Please fill all fields!`)
       
    }

}

submitButton.addEventListener('click', submitHandler)
}

window.addEventListener('load', app)











