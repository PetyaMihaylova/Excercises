const app = () => {
    
    const ul = document.getElementById('taskList') ////create ul const that applies to the button

    //create an input field with the help of form elements input 
    const taskNameInput = document.getElementById('task')
        const taskButtons = Array.from(document.getElementsByClassName('addTaskButton'))
    console.log(taskButtons);
    console.log(taskNameInput)
    //jaj se spira? ne go vijdam //wait, wait, poradi nyakakva prichina, kogato natisna Live Server, mi dava koda ot predishnata zadacha task2_Petya, a ne script.js
    //add an eventListener to the button, what action to do when clicked
taskButtons.forEach((button) => {
    
button.addEventListener('click', (event) => {
    debugger;
event.preventDefault()
console.log('hi');
const li = document.createElement('li')
///add content to the li element
li.innerText = taskNameInput.value 

        
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
///add both buttons complete and remove to the li element
li.appendChild(completeButton)
li.appendChild(removeButton)

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
    

window.addEventListener('load', app);