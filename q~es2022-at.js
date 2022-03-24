/*  
 *  Javascript ES2022
 *  at()
 *  - takes a string and an index and returns the character at the index
 *  - at('hello', 0) => 'h'
 *  - takes integer and returns the item at that index - string, array, object
 *  - -1,-2,... -> get item from the end
 *  - 0,1,2,... -> get item from the beginning
 * 
 */

const scores = [10, 20, 30, 40, 50];
console.log(scores.at(0));
console.log(scores.at(-1));

// top level async await
// no need to declare async function. You can just use await without declaring the aync function first