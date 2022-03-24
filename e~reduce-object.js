/*  
 *  Javascript ES6
 *  Reduce - Object
 *  - Reduce is a method that can be used to reduce an array to a single value.
 *  - It takes a function and an initial value.
 *  - The function takes two arguments, the accumulator and the current value.
 *  - The accumulator is the value returned by the last call to the function.
 *  - The current value is the current item in the array.
 * 
 */

global.fetch = require("node-fetch");

const cart = [
    {
        title: 'Samsung Galaxy S10',
        price:  599.99,
        amount: 1
    },
    {
        title: 'Google Pixel 3',
        price:  699.99,
        amount: 2
    },
    {
        title: 'Xiaomi Mi 9',
        price:  499.99,
        amount: 4
    },
    {
        title: 'xiaomi Redmi Note 8',
        price:  399.99,
        amount: 3
    },
];

let {totalItems, totalPrice} = cart.reduce((total, cartItem) => {
    const {amount, price} = cartItem;   // amount and price are the properties of cartItem (cart variable)
    total.totalItems += amount;
    total.totalPrice += amount * price;
    return total;
}, 
{
    // this will return as object
    // and we can specify the properties

    totalItems: 0,
    totalPrice: 0
}); 

totalPrice = parseFloat(totalPrice.toFixed(2));
console.log(totalItems, totalPrice);



/* 
 * =======================================================================================
 * Just separator 
 * ======================================================================================= 
 */
console.log("======================================================================================");



// Let's get sample data
const url = 'https://api.github.com/users/irsyadrdp/repos?per_page=100';

const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    // Reducing process - count amount of each language
    const newData = data.reduce((total, repo) => {
        const {language} = repo;
        // if (language) {
        //     if(total[language]) {
        //         total[language] += 1;
        //     } else {
        //         total[language] = 1; // Add new language count
        //     }
        // }
        
        if (language) total[language] = total[language] + 1 || 1;

        return total;
    }, {}); // return as object
    
    //return newData;
    console.log(newData);
};

fetchRepos();
