 /*  
 *  Javascript ES6
 *  Convert objects into arrays
 *  - Object.keys() - convert keys into array
 *  - Object.values() - convert values into array
 *  - Object.entries() - convert both keys and values into array
 *  - Object.fromEntries() - convert array of arrays into an object
 *  
 */

 const person = {
    name: 'Peter',
    age: 30,
    occupation: 'Web Developer'
 }

 const keys = Object.keys(person);
 console.log(keys);

 const values = Object.values(person);
console.log(values);

const both = Object.entries(person);
console.log(both);

const fromEntries = Object.fromEntries(both);
console.log(fromEntries);