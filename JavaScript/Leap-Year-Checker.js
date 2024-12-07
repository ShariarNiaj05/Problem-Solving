/* Write a function that determines whether a given year is a leap year.
Example: Happy New Year */

const checkLeapYear = (year) => {
    if (year % 4 === 0) {
        return `${year} is leap Year`
    }
    else {
        return `${year} is not leap year`
    }

}


console.log(checkLeapYear(2026));
console.log(checkLeapYear(20218));
console.log(checkLeapYear(2020));
console.log(checkLeapYear(2019));
console.log(checkLeapYear(2021));
console.log(checkLeapYear(2024));