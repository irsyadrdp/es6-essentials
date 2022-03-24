 /*  
 *  Javascript ES6
 *  Callback Function
 *  - allows to pass a function as an argument to another function
 * 
 */

 function makeUppercase(value) {
     console.log(value.toUpperCase());
 }

 function reverseString(value) {
    console.log(value.split('').reverse().join(''));
 }

 function handleName(name, cb) {
     const fullName = `${name} smith`;
     cb(fullName);
 }

handleName('John', makeUppercase);
handleName('John', reverseString);
handleName('Susan', (value) => console.log(value));


// Example case with DOM manipulation
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log('Button clicked');

    // Callback hell (nested timeout)
    setTimeout(() => {
        btn.textContent = 'Button clicked';
        setTimeout(() => {
            btn.textContent += 'V';
        }, 500);
    }, 1500);
});