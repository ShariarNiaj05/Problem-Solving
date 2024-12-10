/* 
*** Create an array of objects representing students with 'name' and 'grades' properties. 
*** Write a function to sort the students by average grade in descending order. 
*/

const students = [
    { name: "Alice", grades: [85, 90, 92] },
    { name: "Bob", grades: [78, 82, 88] },
    { name: "Charlie", grades: [95, 96, 97] },
    { name: "Diana", grades: [88, 89, 91] }
];

const sortByGrade = (data) => {
    const total = data.reduce((sum, grade) => sum + grade, 0);
    const avg = total / data.length;


    const sort = data.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades))
    return sort

}


const sortedStudents = sortByGrade(students);
console.log(sortedStudents);
// yet to finish
