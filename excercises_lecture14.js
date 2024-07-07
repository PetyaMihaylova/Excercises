//need to correct later

// const app = () => {
    // const myDiv = document.getElementById('myDiv')
    // console.log({myDiv});
    // const allDivs = Array.from(document.getElementsByTagName('div')) 
    // console.log(allDivs);
    // const myElementsByClassName = Array.from(document.getElementsByClassName('MyClass'))
    // console.log({myElementsByClassName});

    //querySelector() can select elements by tag name, by class name and by id. 
    // //When we use the tag name, we always select the first element that is a match for the tag.
    // const myDivQ = document.querySelector('div')
    
    // console.log({myDivQ});

    // const myDivQ = document.querySelector('#myDiv')
    // const myDivQ = document.querySelector('.MyClass > .myP')
    // myDivQ.style.backgroundColor = 'green'
    // console.log(allDivs.children, 'allDivs children', myDivQ.childNodes, 'myDiv childNodes');

    //divs.children will return us the HTML collection, divs.childNodes will return us the NodesList
    // // myDivQ.innerText = 'green'
    // console.log(myDivQ);
    // console.log(myDivQ.innerText);

    // const myDivsQ = document.querySelectorAll('div')
    //When we use document.querySelectorAll(), we get all elements that match the condition in the brackets.
    //Before, when we used document.getElementsBy(), we would get an HTML collection.
    //Now, that we use document.querySelector(), we get a NodeListOf.
    // const myDivsQ = document.querySelectorAll('.MyClass')
    // console.log(Array.from(myDivsQ))
    // console.log(myDivsQ.forEach((e) => e.style.backgroundColor = 'red'))
    // console.log(myDivsQ);

    // console.log(allDivs.length)
    // console.log(allDivs.item(0))
    // console.log(allDivs[0])
    // console.log(allDivs[allDivs.length-1])
// console.log(allDivs.forEach((e) => console.log(e)))

// console.log(allDivs.forEach((div, index) => div.innerText = index))
// myElementsByClassName.forEach((element, index) => element.style.backgroundColor = 'red')
// const myDivQ = document.querySelector('.MyClass > .myP')
// console.log(myDivsQ.forEach((e) => e.style.backgroundColor = 'red'))
// }


// window.addEventListener('load', app)

//In the time, when Javascript has been developing, the library called JQuery appears. 
//jQuery allows us to select elements in the same way that we select elements in CSS.
//In time, JQuery had a huge success and because of that, it has been integrated in JavaScript, 
//so there is no need to install JQuery separately.

//The way we write in CSS with the dashes "-" is called "kebab case." In JavaScript, we do not use
//"kebab case", we use "camel case", where the 2nd letter is capitalized.

//there is a difference between an HTML Collection and a Nodes List. E.g., when we use
//document.getElementById(-Id/ClassName/TagName), we will get an HTML HTML HTML HTML  collection.
//When we use document.querySelectorAll, we will get a NodesList. Both NodesList and HTML Collection
//are not Arrays, but they look like arrays thanks to some of its features. For example, we can 
//find a value based on its index, we can check the length with .length and we can transform them into Arrays
//with Array.from(). HTML Collection will give us the element and all elements within it.

//Live Collections vs. Static Collections
//HTML collections are always live. This means that any change we do to the HTML collection is
//going to be reflected in the DOM immediately. The NodesList, however, is static. This means,
//that sometimes, when we do something and are wondering why the DOM is not updating, we are 
//probably using a NodesList, rather than an HTML COllection and we should change to HTML COllection.

//---------------------------------------------

// const app = () => {

    // const paragraphs = document.getElementsByTagName('p') //getElementsByTagName gives us an HTML collection
    // const paragraphs = document.querySelectorAll('p')
    // console.log(paragraphs, 'Before Update'); 
    // const newParagraph = document.createElement('p')
    // document.body.appendChild(newParagraph)
    // newParagraph.innerText = 'P4'
    // console.log(paragraphs, 'After Update'); //we see that, having used getELementsByTagName, we managed to create an extra paragraph P, and after the console log, 
    //we get a new,updated HTML Collection with 4 paragraphs, rather than 3. If we use document.querySelectorAll('p'), after we use document.createElement('p),
    //we cannot create a 4th paragraph P
//     const paragraphs1 = document.querySelectorAll('p')
//     console.log(paragraphs1);
// }

// window.addEventListener('load', app)

//-----------------------------------------------

const app = () => {
   
    const board = document.querySelector('.board')
    console.log(board);
    // const cells = board.children //we will get an HTML collection of all cells, which are chidlren of board
    const cells = Array.from(document.querySelectorAll('.cell')) //Here we get a Nodes List
    // const cells = document.getElementsByClassName('cell')//here we get an HTML collection
    const infoDisplay = document.createElement('p')
    infoDisplay.innerText = `${currentPlayer} is on a turn`
    document.body.appendChild(infoDisplay)
    let currentPlayer = 'X'

    function handleCellClick(event){
    const cell = event.target //this is how we will know where the event is coming from, from which cell
    const index = cell.dataset.index
    
    if(isValidMove(cell)){
        makeMove(cell)
        if (checkWin()){
            announceWinner()
        }
        else if (checkDraw()) {
            announceDraw()
        }
        else {
            changePlayer()
        }
      
    }
    }

    function makeMove(cell){
    cell.textConent = currentPlayer
    cell.classList.add(currentPlayer)
        }

    function changePlayer(){ 
        currentPlayer = currentPlayer === 'X' ? 'O': 'X'
        infoDisplay.innerText = `${currentPlayer} is on a turn`
    }

    /**
     * Function that checks if the move is valid.
     *  
     */

    function isValidMove(cell){
        return cell.textConent === ''
    }

    function checkWin(){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
 return winningCombinations.some(combination => {
    return combination.every(index => {
        return cells[index].classList.contains(currentPlayer)
    })
 })
    }
    function announceWinner(){
        alert(`Player ${currentPlayer} wins!`)
        resetBoard()
    }

    function announceDraw(){
        alert('It is a draw!')
        resetBoard()
    }
    function checkDraw(){
        return cells.every(cell => cell.textContent !== '')
    }

    function resetBoard(){
        cells.forEach(cell => {
        cell.textConent = ''
        cell.classList.remove('X', 'O')                     })
    }
    
    board.addEventListener('click', handleCellClick)
}

window.addEventListener('load', app)

//target div.board -- the target is a property of the event object, which gives us information on
//where exactly the event came from. In this case, the event came from the board