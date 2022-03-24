/*  
 *  Javascript ES6
 *  Array.from()
 *  - returns a new array from an array-like object
 *  - with a length property or an iterable object
 *  - turns array-like objects into arrays
 */

// Splitting string into array
const text = 'Hello World';
const textArr = Array.from(text, function(char) {
    return char.toUpperCase();
});
console.log(textArr);

// Construct array with specific length
const items = Array.from({ length: 120 }, (_, index) => {
    return index;
});
console.log(items);

// Pagination
const itemPerPage = 14;
const pages = Math.ceil(items.length / itemPerPage);

const paginatedItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    const end = start + itemPerPage;
    return items.slice(start, end);
});
console.log(paginatedItems);