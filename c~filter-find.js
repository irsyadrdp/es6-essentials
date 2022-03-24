/*
 *  Javascript ES6
 *  Filter and Find
 *  
 */

const people = [
    { name: 'Bob', age: 20, job: 'developer' },
    { name: 'Max', age: 29, job: 'developer' },
    { name: 'Peter', age: 25, job: 'designer' },
    { name: 'Sussy', age: 30, job: 'finance' },
    { name: 'Anna', age: 35, job: 'intern' }
];

const fruits = ['apple', 'banana', 'orange', 'pineapple'];



// filter
const filterYoungPeople = people.filter( (person) => {
    return person.age < 30
});
const filterJob = people.filter( (person) => person.job === 'finance'); // One liner

const filteredName = people.filter(person => person.name.toLowerCase().includes('a'));
console.log(filteredName);


// find
const findPerson = people.find( (person) => person.name === 'Anna');
const findFruit = fruits.find( (fruit) => fruit === 'pineapple');

console.log("====================================================");
console.log(filterYoungPeople);
console.log("====================================================");
console.log(filterJob);
console.log("====================================================");
console.log(findPerson);
console.log("====================================================");
console.log(findFruit);
console.log("====================================================");