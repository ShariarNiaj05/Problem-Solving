/* Write a function that determines whether a given year is a leap year.
Example: Happy New Year */

const checkLeapYear = (year) => {
    if (year % 2 === 0 || year % 4 || 0) {
        return `${year} is leap Year`
    }
    else {
        return `${year} is not leap year`
    }

}