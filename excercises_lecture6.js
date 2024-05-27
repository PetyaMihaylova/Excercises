//checking if a string is palindrome

function solve(string) {
    const stringL = string.length
    let stringToCheck = '';
   
    for(let index = stringL - 1; index >=0; index--) {
        
        stringToCheck = stringToCheck + string[index]
    }
    
    if(string === stringToCheck){
        return 'String is palindrome'
    }
    else {
        return 'String is not a palindrome'
    
    }
}

console.log(solve('rushhour'))