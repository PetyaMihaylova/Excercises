
function outerFunction () {
    let count = 0
    function increaseCount(){
    count = count + 1
}
    return count
}

console.log(outerFunction())
console.log(outerFunction())
console.log(outerFunction())