/*
 *  Javascript ES6
 *  Reduce - Basic
 *  
 */

const people = [
    { name: 'Bob', age: 20, position: 'developer', salary: 100 },
    { name: 'Peter', age: 25, position: 'designer', salary: 300 },
    { name: 'Susy', age: 30, position: 'finance', salary: 400 },
    { name: 'Anna', age: 35, position: 'intern', salary: 50 },
];

// The easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
// Remember! Always return 'total' or the first argument/parameter, otherwise it'll means nothing (will return undefined)
const salaryTotal = people.reduce((total, person) => {
    return total + person.salary;
}, 0); // 0 is the initial value of the accumulator --> "total"



console.log(salaryTotal);