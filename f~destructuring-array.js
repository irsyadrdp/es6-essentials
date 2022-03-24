/*  
 *  Javascript ES6
 *  Destructuring - Array
 * 
 */

const people = ['John', 'Jane', 'Bob', 'Mary', 'Mike'];

// Create new variable for each array item
const [person1, person2, person3, person4, person5, person6] = people;
const [human1, , human3, , human5] = people; // Skip the inbetween items

// person6 is undefined
console.log(person1, person2, person3, person4, person5, person6); 
console.log(human1, human3, human5);

// Swapping variables
let first = 'John';
let second = 'Jane';
[first, second] = [second, first];
console.log(first, second);