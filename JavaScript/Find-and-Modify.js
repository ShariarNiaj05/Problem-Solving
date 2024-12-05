/* 
*** Write a function that searches an array of objects for a specific person by name. 
*** If found, modify their age property. 
*** Print the updated array. 
*/

const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eve", age: 26, gender: "female" }
];


const modifyPersonAge = (arr, targetName, newAge) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === targetName) {
            arr[i].age = newAge;
            return true
        }
    }


    console.log("Updated Array:", arr);
};

modifyPersonAge(people, "Charlie", 24);