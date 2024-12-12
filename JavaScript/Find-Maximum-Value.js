/* 
*** Write a function that takes an array of numbers and returns the maximum value. 
*/

const numbers = [10, 58, 61, 54, 85, 3, 24, 48]

const maxValue = (arr) => {
    let biggestNumber = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (biggestNumber < i) {
            biggestNumber = i
        }
    }
    return biggestNumber

}