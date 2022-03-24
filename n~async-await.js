 /*  
 *  Javascript ES6
 *  Async/Await
 *  - Async must be present, always returns a promise
 *  - Await waits till the promise is resolved/settled
 *  - Will always return a promise
 *  - Error handling - use try/catch block
 *  - Allows to chain promises / avoid Callback Hell
 * 
 */
 
// simple async function
const hello = async => {
    return "Hello World";
}
async function getHello () {
    const result = await hello();
    console.log(result); 
} 
getHello();



// not so simple async function
const users = [
        {   id: 1, name: 'John', age: 30 },
        {   id: 2, name: 'Jane', age: 20 },
        {   id: 3, name: 'Mary', age: 25 }
 ];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] }
];

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.name === name);
        (user) ? resolve(user) : reject(`There is no user with name: "${name}"`);
    });
}

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const article = articles.find(article => article.userId === userId);
        (article) ? resolve(article.articles) : reject(`There is no article for user with id: "${userId}"`);
    });
}

// // simple example using promises
// getUser("Mary")
//     .then(user => getArticles(user.id))
//     .then(articles => console.log(articles))
//     .catch((err) => console.log(err));

const getData = async () => {
    try {
        const user = await getUser("Mary");
        const articles = await getArticles(user.id);
        console.log(articles);
    } catch(err) {
        console.log(err);
    }
}

getData();