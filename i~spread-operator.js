/*  
 *  Javascript ES6
 *  Spread Operator (...)
 *  - Allows to spread out an array into single values
 *  - Allows and iterable to spread/expand individually inside reciever
 *  - Split into single items and Copy them
 */

// Split string into single characters
const str = 'HelloWorld';
console.log([...str]);

// Concatenate arrays and add new elements into it
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newElements = 345;
const concatenatedArr = [...arr1, newElements, ...arr2];
console.log(concatenatedArr);

// Copy an array
// const newArr = concatenatedArr.slice(); // another way to copy an array
const newArr = [...concatenatedArr];
newArr[0] = 100;
console.log(concatenatedArr);
console.log(newArr);

// Copy an object
const obj = { name: 'John', age: 30 };
const newObj = {...obj, city: 'New York' };
newObj.name = 'Jane'; // another way to update an object
console.log(obj);
console.log(newObj);