 /*  
 *  Javascript ES6
 *  Set object
 *  - Set is a collection of unique values of any type
 *  - new Set() - create a new set
 *  - .add(value) - add a value to the set
 *  - .delete(value) - delete a value from the set
 *  - .has(value) - check if a value exists in the set
 *  - .clear() - clear all values from the set
 *  - .size - get the size of the set
 *  - .forEach() - iterate over the set
 *  - .values() - get the values of the set
 *  - .keys() - get the keys of the set
 *  - .entries() - get the entries of the set
 *  
 */

const unique = new Set();
unique.add(1);
unique.add(1);
unique.add(2);
unique.add(3);
unique.add(4);
unique.delete(3);
console.log(unique);
console.log(unique.has(1));


const number = [1, 2, 3, 4, 4, 4, 4, 6, 7, 8, 8, 8, 9, 10];
const data = new Set(number);
console.log(data);


const products = [
    { 
        title: 'Tesla Model S', 
        company: 'Tesla', 
    },
    {
        title: 'BMW X6',
        company: 'BMW',
    },
    {
        title: 'Tesla Model 3',
        company: 'Tesla',
    },
    {
        title: 'La Ferrari',
        company: 'Ferrari',
    },
    {
        title: 'Porsche 911',
        company: 'Porsche',
    },
    {
        title: 'Porsche GT3',
        company: 'Porsche',
    },
];

const companyCategories = ["All", ...new Set(products.map(product => product.company))];
console.log(companyCategories); 