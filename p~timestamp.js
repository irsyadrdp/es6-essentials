/*  
 *  Javascript ES6
 *  Timestamp - Date
 * 
 */

console.log(new Date());

// Unix time
// Januar1, 1970

// These 3 below can  be used as an ID for its unique value
// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now());
}, 1000);


// Creating an ID
let people = [];
people = [...people, {id: Date.now(), name: 'John'}];

setTimeout(() => {
    people = [...people, {id: Date.now(), name: 'Andrew'}];
    console.log(people);
}, 1000);


// Create/get dates
console.log(new Date(1645431480692)); // the number is miliseconds

// Create expiration date
const now = Date.now();
const exp = new Date(now + 1000 * 60); // Add 1 minute time
const exp2 = new Date(now + 1000 * 60 * 60); // Add 1 hour time
const exp3 = new Date(now + 1000 * 60 * 60 * 24); // Add 1 day time
console.log(new Date(now));
console.log(exp);

// Time difference
const firstDate = new Date();
const secondDate = new Date(2022, 12, 31);
const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

const timeDiff = secondValue - firstValue;
console.log(timeDiff);

const minutesDiff = Math.floor(timeDiff / (1000 * 60));
const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
console.log(minutesDiff, hoursDiff);