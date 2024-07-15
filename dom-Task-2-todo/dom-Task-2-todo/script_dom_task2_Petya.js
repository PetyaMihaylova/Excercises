const app = () => {
    const ul = document.getElementById('taskList') ////create ul const that applies to the button

    //create an input field with the help of form elements input (and label maybe)
    const taskNameInput = document.getElementById('task')
    //select the button by its attribute data-task:1, instead of commenting out the rest 2 buttons in index.html
    const taskButtons = Array.from(document.getElementsByClassName('addTaskButton'))
    console.log(taskButtons);
    console.log(taskNameInput)

    //add an eventListener to the button, what action to do when clicked
taskButtons.forEach((button) => {
button.addEventListener('click', () => {
const li = document.createElement('li')
///add content to the li element
li.innerText = taskNameInput.value //here it should be instead li.innerHTML = input.innerHTML (?)

        
//complete and remove buttons and their handlers as per previous task

///create button that has inside text complete
const completeButton = document.createElement('button')
completeButton.innerText = 'Complete'

///create button that has inside text remove
const removeButton = document.createElement('button')
removeButton.innerText = 'Remove'
removeButton.style.background = '#ff0000'
removeButton.classList.add('Remove')
ul.appendChild(li)
li.appendChild(completeButton)
li.appendChild(removeButton)

///add both buttons complete and remove to the li element

///add event listeners to the 2 buttons
completeButton.addEventListener('click', () => {
completeButton.classList.add('Complete')
li.style.textDecorationLine = 'line-through'
})

removeButton.addEventListener('click', () => {
   //removes the task
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