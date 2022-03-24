/*
 *  Javascript ES6
 *  Rest Operator (...)
 *  - spread operator (...)
 *  - gather/collect items
 *  - destructuring, functions, arrays, objects
 *  -> placement important, careful with the same name
 *  -> rest when declaring functions, spread when invoking functions
 *  -> it should always be placed at the end of the parameter list !!!
 */

//  Arrays
const fruits = ['apple', 'banana', 'orange', 'pear'];
const [first, ...restFruit] = fruits;
console.log(first, restFruit);

//  Objects
const person = { name: 'John', age: 30, city: 'New York' };
const { age, ...rest } = person;
console.log(age, rest);

// Functions
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);

    const avgScore_Way1 = scores.reduce((acc, curr) => { return acc += curr }, 0) / scores.length;
    const avgScore_Way2 = scores.reduce((acc, curr) => acc + curr) / scores.length;
    console.log(avgScore_Way1);
    console.log(avgScore_Way2);
}

getAverage('John', 1, 2, 3, 4, 5);
const scoreList = [10, 20, 30, 40, 50];
getAverage('Evan', ...scoreList); // now this is spread operator, invoking function