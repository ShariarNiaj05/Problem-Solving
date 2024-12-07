/* Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.  */


const arr = [1, 5, 4, 8, 9, 4]
const arrReduce = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
