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
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const avg = total / grades.length;

    const sort = avg.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades));

}