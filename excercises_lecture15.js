//Principles of software programming
 
//DRY principle - Do not repeat yourself. Try to re-use functions, instead of copy-pasting them,
//thus eliminating possibilities for typing errors. Try to use function abstractions, rather than pasting
//the whole function again and again and again.
//One of the usage scenarios for DRY is single choice principle. THis states that whenever a software
//system must support a set of alternative, one and only one module should know their exhaustive list.

//The opposite of the DRY principle is the WET principle: write everything twice.

//Another approach is called AHA or avoid hasty abstractions.

//BEFORE DRY

function calculateAreaRectangle(width, height){
    return width*height

}

function calculateAreaSquare(side){
    return side*side
}

console.log(calculateAreaRectangle(20, 40));
console.log(calculateAreaSquare(30));

//AFTER DRY

function calculateArea(shape, width, height){
    switch(shape) {
        case 'rectangle': {
            return width * height
        }
        case 'square':{
            return width * width
        }
        default:
            console.log('Unknown shape');
    }

}

console.log(calculateArea('rectangle', 20, 40)); //800
//KISS principle - keep it simple, stupid

const arr = ['a', 'f', 'b', 'r', 'c', 'd']
const newArr = arr.sort()
console.log(arr);

//the next principle is YAGNI - you aren't gonna need it -- onlycode things that you really need and do not
//code other stuff, until it becomes a requirement

//there is another acronym called SOLID, which is also a principle. This principle comes from the object-oriented
//programming, but it can be applied to regular design (functions as well)

//Agile is yet another principle. It prioritizes individuals and interactions over processes and tool.
//Self-organizing, collaborative and flexible teams. Better have competent people working together and a working software than
//full documentation.