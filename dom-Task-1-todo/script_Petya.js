const app = () => {
    debugger

const ul = document.getElementById('taskList') ////create ul const that applies to all 3 buttons
console.log(ul)

const taskButtons = Array.from(document.getElementsByClassName('addTaskButton')) ////get all 3 buttons in a const
console.log(taskButtons);


taskButtons.forEach((button) => {
button.addEventListener('click', () => {   ////add events for each button, what to do when pressed
    
    ///create li element
const li = document.createElement('li')
    ///add content to the li element
li.innerHTML = button.innerHTML

  ///create button that has inside text complete
const completeButton = document.createElement('button')
completeButton.innerHTML = 'Complete'


///create button that has inside text remove
const removeButton = document.createElement('button')
removeButton.innerHTML = 'Remove'
removeButton.style.background = '#ff0000'
removeButton.classList.add('Remove')
///add li to ul
    ul.appendChild(li)
///add both buttons complete and remove to the li element
    li.appendChild(completeButton)
    li.appendChild(removeButton)


///add event listeners to the 2 buttons
completeButton.addEventListener('click', () => {
    ///add class to the button with classlist complete
    completeButton.classList.add('Complete')
    li.style.textDecorationLine = 'line-through'


})
removeButton.addEventListener('click', () => {
    ///add class to the button with classlist remove
   
    li.remove()
     //removes the completeButton
     completeButton.remove()
     //removes the removeButton
     removeButton.remove()

})


})

 })
 

  

}
    

window.addEventListener('load', app)
