/* 
*** Create an array of numbers with some duplicate values. 
*** Write a function to filter out the duplicate values and *** *** return a new array with only unique numbers. 
***Print the result.  */

const arrWithDuplicates = [5, 5, 8, 7, 3, 3]

const removeDuplicates = (arr) => {
    let uniqueArr = []


    for (i = 0; i < arr.length; arr++) {
        let uniqueValue = arr[0]
        for (j = 0; j < uniqueValue.length; i++) {
            if (arr[i] === uniqueArr[j]) {
                return false
            } else {
                uniqueArr.push(arr[i])
            }
        }
        // return uniqueArr
    }
    return uniqueArr
}

// yet to complete