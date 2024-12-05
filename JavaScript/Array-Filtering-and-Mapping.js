/* Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eve", age: 26, gender: "female" }
];

const genderFilter = (arr) => {
    let onlyMale = []
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i]
        if (obj.gender !== "female") {
            onlyMale.push(arr[i])
        }
    }
    return onlyMale
}

const nameMap = genderFilter(people).map(person => person.name)




genderFilter(nameMap)


console.log(nameMap); // [ 'Bob', 'Charlie', 'David' ]