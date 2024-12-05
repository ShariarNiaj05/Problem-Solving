/* Create an array of objects representing cars with properties like make, model, and year. 

*** Write a function to sort the array of cars by the year of manufacture in ascending order. 
Print the sorted array. */

const cars = [
    { make: "Toyota", model: "Camry", year: 2022 },
    { make: "Honda", model: "Civic", year: 2021 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Tesla", model: "Model 3", year: 2023 },
    { make: "Chevrolet", model: "Malibu", year: 2019 }
];

// const sortByYear = (arr) => {
//     let sortedCar = []
//     for (i = 0; i < arr.length; i++) {
//         const cars = arr[i]
//         let smallestYear = arr[0]
//         if (cars.year < smallestYear || cars.year === smallestYear) {
//             smallestYear = arr[i]
//         }

//         console.log(smallestYear);
//     }
//     // console.log(sortedCar);
// }
const sortByYear = (arr) => {
    return arr.sort((a, b) => a.year - b.year);

}

console.log(sortByYear(cars));