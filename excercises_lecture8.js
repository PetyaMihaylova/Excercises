function executor(callback, words) {
    
    for(let char of words){
    callback(char);
    }
}

function cLogCallBack(char) {
    
    console.log(char)}

function addCharCallBack(char, charToAdd){
console.log(char + "!")}

const text = 'Lorem ipsum'

executor(addCharCallBack, text) //here, we add the function only by the name,
//and not by addCharCallBack(), because otherwise, addCharCallBack() will mean 
//the result of the function. Considering it is just a console.log in the block scope,
//and there is no return, the result of the function will be undefined.
//so in executor(addCharCallBack(), text), we will get executor(undefined, text)