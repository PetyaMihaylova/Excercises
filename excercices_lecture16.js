// const app = () => {
// const form = document.getElementById('form')
// const nameInput = document.getElementById('name')
// const emailInput = document.getElementById('email')
// const messageInput = document.getElementById('message')
// const submitButton = document.getElementById('button')



// const validateInput = (input) => {
//     if (!input.value) {
//         emptyInputs.push(input.name)
//         input.style.border = 'red solid 2px'
//       } else {
//         input.style.border = ''
//     }
// }

// console.log(form, nameInput, emailInput, messageInput, submitButton);

// const submitHandler = (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     console.log(formData);
    

//     const nameValue = formData.get('name');
//     const emailValue = formData.get('email');
//     const messageValue = formData.get('message');
//     if(nameValue && emailValue && messageValue) {
//         alert (`Your name from ${nameValue} with email ${emailValue} and Message ${messageValue}`)
 
//     nameInput.value = ''
//     emailInput.value = ''
//     messageInput.value = ''
    
 

//     } else {
//     // validateInput(nameInput)
//     // validateInput(emailInput)
//     // validateInput(messageInput)
    

//         alert(`Please fill all fields!`)
       
//     }

// }

// submitButton.addEventListener('click', submitHandler)
// }

// window.addEventListener('load', app)

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

//Instead of validating the input on the "Submit button" step, we can validate it in the inputs itself.
//We can add eventListeners on each input, which will validate the inputted information.
//-----------------------------------

const app = () => {
    const form = document.getElementById('form')
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const messageInput = document.getElementById('message')
    const submitButton = document.getElementById('button')
    submitButton.disabled = true
    
        
    const validateInput = (input, minLength) => {
        
        if(nameInput.value.length >= minLength && 
          emailInput.value.length >= minLength && 
          messageInput.value.length >= minLength) {        
          submitButton.disabled = false
        }
        if (input.value.length < minLength) {
            input.style.boxShadow = '0px 0px 0px 3px red'           
          } else {
            input.style.boxShadow = '0px 0px 0px 3px green'
          }
    }

  

    form.addEventListener('input', (event) => {
        if (event.target.matches('#name, #email, #message')){
            validateInput(event.target, 4)
        };
    })

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
            form.remove()
            //form.style.display = 'none'
            const showForm = document.createElement('button')
            showForm.textContent = 'Show form'
            document.body.appendChild(showForm)
            showForm.addEventListener('click', () => form.style.display = 'flex')
                
            } else {
                            
                alert(`Please fill all fields!`)
               
            }
        
        }
        
        submitButton.addEventListener('click', submitHandler)
        }

//In the EventListener, instead of 'change', one can use 'input', 'focus' or 'blur' as events. They all have different meanings. 
//For example, the event of 'blur' triggers when we unfocus something, so it is the opposite of 'focus'.
//For 'focus', one has to type something, then unfocus, then focus again, in order for the event to be triggered.
//In this sense, 'blur' is better to use, because the moment we type the info in the input field and go to field no.2,
//the event triggers and we have red color if input no.1 requirements are not met.

//In order to submit the form, you can do it with HTML or you can do it with JavaScript. 
//To do it with JavaScript, you have to know how to create asynchronous JavaScript and to work with promises.

//After we submit the form, we can use the remove() method on the form, that is form.remove() to delete the form from the webpage. Alternatively, 
//we can use form.style.display = 'none'.

//input.value is the input that has been currently selected/pressed.
//name.value, email.value, message.value are the inputs that need to be checked
//if we want to validate the information at the moment of pressing the button Submit.