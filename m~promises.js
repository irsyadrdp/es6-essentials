 /*  
 *  Javascript ES6
 *  Promises
 *  - allows to execute a function asynchronously
 *  - allows to return a value after a certain amount of time
 *  - allows to handle errors
 *  - allows to chain promises / avoid Callback Hell
 *  - allows to wait for multiple promises to be resolved
 * 
 */

// Async Await
// Consume/Use Promises
// Pending, Fulfilled/Resolved, Rejected

const valueCheck = 3;
const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    (random === valueCheck) ? resolve(`Correct number: ${random}`) : reject("Incorrect number");
});
console.log(promise);

promise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));



// Other promises example

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    addColor(1000, '.task1', 'red', 'This is data')
        .then((data) => addColor(4000, '.task2', 'green', data))
        .then((data) => addColor(2000, '.task3', 'blue', data))
        .catch((err) => console.log(err));
});

// data is used to pass the value of the previous promise to the next promise
function addColor(time, selector, color, data) {
    const element = document.querySelector(selector);

    return new Promise((resolve, reject) => {
        if(element) {
            setTimeout(() => {
                element.style.color = color;
                element.innerHTML += "  <span>&#10003;</span>";
                resolve(data); // passing data to the next promise
            }, time);
        } else {
            reject(`There is no such element: "${selector}"`);
        }
    });
}
