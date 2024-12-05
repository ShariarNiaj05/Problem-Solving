/* Write three functions: 
*** one to square a number, 
*** one to double a number, and 
*** one to add 5 to a number. 
*** Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/




const makeSquare = (num) => {
    return num * num
}
const makeDouble = (num) => {
    return num * 2
}
const addFiveWithNumber = (num) => {
    return num + 5
}

const compose = (num) => {
    const squareOfANumber = makeSquare(num)
    const doubleOfSquareNumber = makeDouble(squareOfANumber)
    const addFiveWithDoubleOfSquareNumber = addFiveWithNumber(doubleOfSquareNumber)
    return addFiveWithDoubleOfSquareNumber
}

console.log(makeSquare(2)); // 4
console.log(makeDouble(2)); // 4
console.log(addFiveWithNumber(2)); // 7
console.log(compose(2)); // 13
console.log(compose(3)); // 23

