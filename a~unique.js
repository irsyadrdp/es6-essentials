/*
 *  Javascript ES6
 *  Unique
 *   
 */

let items = [
    {
        type: 'Bike',
    },
    {
        type: 'Bike',
    },
    {
        type: 'Car',
    },
    {
        type: 'Car',
    },
    {
        type: 'Motorcycle',
    },
    {
        type: 'Motorcycle',
    }
];

let unique = new Set(items.map( (item) => item.type)); // Will return as object
unique = [...unique]; // Will return as array

console.log(unique);