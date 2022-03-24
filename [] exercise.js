const people = ["John", "John", "Anton", "Anton", "Anna", "David", "Anna"];

const employee = [
    { employeeName: 'Bob', age: 20, job: 'developer' },
    { employeeName: 'Max', age: 29, job: 'developer' },
    { employeeName: 'Peter', age: 25, job: 'designer' },
    { employeeName: 'Sussy', age: 30, job: 'finance' },
    { employeeName: 'Steph', age: 26, job: 'intern' },
    {
        employeeName: 'Anna',
        age: 35,
        job: 'intern',
        additionalInfo: {
            achievement: "Employee of the year"
        }
    },
];

//======================================================================================//
//======================================================================================//
//======================================================================================//

// Set unique items
let unique = new Set(people);
unique = [...unique];
console.log(unique);





// Dynamic object
employee.map(person => {
    person['salary'] = Math.floor(Math.random() * (1000 - 100) + 100);
});
console.log(employee);





// Filter data
const young = employee.filter(person => person.age < 30);
console.log(young);
const filteredName = employee.filter(person => person.employeeName.toLowerCase().includes('a'));
console.log(filteredName);

// Find data
const peter = employee.find(person => person.employeeName === 'Peter');
console.log(peter);





// Reduce data basic
const total = employee.reduce((accumulator, current) => {
    return accumulator + current.salary;
}, 0);
console.log(total);

// Reduce data with object
let { totalAge, totalSalary } = employee.reduce((acc, curr) => {
    acc.totalAge += curr.age;
    acc.totalSalary += curr.salary;
    return acc;
}, {
    totalAge: 0,
    totalSalary: 0
});
console.log(totalAge, totalSalary);





// Destructuring array
const [first, , third, , fifth, sixth] = people;
console.log(first, third, fifth, sixth);

// Destructuring object
const { employeeName: nama, age, job, salary, additionalInfo: { achievement } } = employee[4];
console.log(nama, age, job, salary, achievement);





// Rest Operator
const [firstName, ...others] = people;
console.log(firstName, others);

const { additionalInfo, ...rest } = employee[4];
console.log(additionalInfo, rest);





// Spread operator - Concatinate array & adding new element
const newPeople = [...people, 'Evan', ...unique];
console.log(newPeople);

// Spread operator - Split string
const str = "HelloWorld";
const splitStr = [...str];
console.log(splitStr);

// Spread operator- Parsing object into array
const newEmployee = [...employee];
console.log(newEmployee);

// Spread operator - Invoking function param
const checkAverage = (...numbers) => {
    const avg = numbers.reduce((acc, curr) => acc + curr) / numbers.length;
    console.log(avg);
}
checkAverage(1, 2, 3, 4, 5);

// Spread operator - Copy array / object
const newEmployee2 = [...people];
const newObj = {...employee[4] };
console.log(newEmployee2);
console.log(newObj);





// Array From - String
const newStr = Array.from(str);
console.log(newStr);

const newStr2 = Array.from(str, (char) => char.toUpperCase());
console.log(newStr2);

// Array From - Bunch of data
const items = Array.from({ length: 120 }, (_, index) => {
    return index;
});
console.log(items);





// Convert object into array
const keys = Object.keys(employee[4]);
console.log(keys);
const values = Object.values(employee[4]);
console.log(values);
const both = Object.entries(employee[4]);
console.log(both);
const fromEntries = Object.fromEntries(both);
console.log(fromEntries);




// Optional chaining
employee.map(person => {
    console.log(person.employeeName);
    console.log(person?.additionalInfo?.achievement || "No achievement");
});





// Callback function
const checkBonus = (currSalary, overtimeHours) => { 
    return currSalary * 0.01 * overtimeHours; 
}
const calculateSalary = (workHours, overtimeHours, callback) => {
    const normalSalary = workHours * 150;
    return normalSalary + callback(normalSalary, overtimeHours);
}
const calcSalary = calculateSalary(40, 10, checkBonus);
console.log(calcSalary);





// Date - normal
console.log(new Date());
console.log(new Date().toLocaleString());

// Date (in miliseconds) - can be used as unique key/id
console.log(Date.now());
console.log(new Date().getTime());
console.log(new Date().valueOf());

// Date - convert to normal date
console.log(new Date(Date.now()));
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());

// Date - expiration date
const now = Date.now();
const exp = new Date(now + 1000 * 60); // 1 minute
const exp2 = new Date(now + 1000 * 60 * 60); // 1 hour
const exp3 = new Date(now + 1000 * 60 * 60 * 24); // 1 day

// Date - time difference (always convert to miliseconds before calculation)
const nowTime = new Date(2022, 12, 30);
const thenTime = new Date(2022, 12, 31);
const timeDiff = thenTime.getTime() - nowTime.getTime();
console.log(timeDiff);

const minutesDiff = Math.floor(timeDiff / 1000 / 60);
const hoursDiff = Math.floor(timeDiff / 1000 / 60 / 60);
const daysDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
console.log(minutesDiff, hoursDiff, daysDiff);

//======================================================================================//
//======================================================================================//
//======================================================================================//

// Promise
const checkEvenNumber = (number, data=false) => {
    return new Promise( (resolve, reject) => {
        (number %2 === 0) ? resolve(data = true) : reject(data = false);
    });
}
const cekcek = checkEvenNumber(101)
                .then( (data) => console.log(data) )
                .catch( (err) => console.log(err) );





// Async await - simple
async function checkNumber() {
    const data = await checkEvenNumber(101);
    console.log(data);
}
checkNumber();





// Async await - advanced with promise
const users = [
    {   id: 1, name: 'John' },
    {   id: 2, name: 'Jane' },
    {   id: 3, name: 'Mary' },
    {   id: 4, name: 'Mark' },
];

const articles = [
{ userId: 1, articles: ['one', 'two', 'three'] },
{ userId: 2, articles: ['four', 'five'] },
{ userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
{ userId: 4, articles: [] }
];

const getUser = (name) => {
    return new Promise( (resolve, reject) => {
        const user = users.find( (user) => user.name === name );
        (user) ? resolve(user) : reject(`User ${name} not found`);
    });
}
const getArticle = (userId) => {
    return new Promise( (resolve, reject) => {
        const article = articles.find( (article) => article.userId === userId );
        (article.articles.length != 0) ? resolve(article.articles) : reject(`User ${userId} doesn't have any article`);
    });
}

const getData = async () => {
    try {
        const user = await getUser("Mark");
        const articles = await getArticle(user.id);
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
}
getData();

//======================================================================================//
//======================================================================================//
//======================================================================================//

// Fetch
global.fetch = require("node-fetch");
const url = 'http://www.course-api.com/react-tours-project';



// Fetch - HTTP GET - using promise
fetch (url)
    .then( response => response.json() )
    .then( data => console.log(data) )
    .catch( err => console.log(err) );



// Fetch - HTTP GET - using async await
const getTours = async () => {
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`There was an error: "${response.status} ${response.statusText}"`);

        return response.json();
    }  catch (error) {
        console.log(error);
    }
}
const tours = getTours().then();
console.log(tours);



// Fetch - HTTP POST
const user = {
    username: 'irsyadrdp',
    password: '12345678'
}
const requestData = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(user),
}
fetch('http://localhost:8000/users', requestData)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log('Could not save'));



// Fetch - HTTP DELETE
const requestDataDelete = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}
fetch('http://localhost:8000/users/27', requestDataDelete)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log('Could not delete'));