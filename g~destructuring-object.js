/*  
 *  Javascript ES6
 *  Destructuring - Array
 * 
 */

const bob = {
    first: 'Bob',
    last: 'Smith',
    age: 30,
    city: 'New York',
    siblings: {
        sister: 'Jane',
    }
};

const {age, city} = bob;                            // Simple destructuring
const {first: firstName, last: lastName} = bob;     // We can as well defined alias for the object properties
const {siblings:{sister: favoriteSister}} = bob;    // Nested object destructuring, with alias as well

console.log(firstName, lastName, age, city, favoriteSister);

// Example case
function printPerson({first, last, age, city, siblings:{sister}}) {
    console.log(first, last, age, city, sister);
}

printPerson(bob);
