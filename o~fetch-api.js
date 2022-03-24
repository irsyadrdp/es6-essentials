/*  
 *  Javascript ES6
 *  Fetch - API
 *  - Fetch is a promise based API. It returns a promise
 *  - Possible response types:
 *      - Response.json()
 *      - Response.text()
 *      - Response.blob()
 *      - Response.formData()
 *      - Response.arrayBuffer()
 *      - Response.redirect()
 *      - Response.clone()
 *  - Accessing response info:
 *      - Response.headers()
 *      - Response.headers.get('Content-Type')
 *      - Response.status()
 *      - Response.ok()
 *      - Response.statusText()
 *      - Response.redirected()
 *      - Response.type()
 *      - Response.url()
 *      - Response.error()
 *      - Response.bodyUsed()
 * 
 */

global.fetch = require("node-fetch");
const url = 'http://www.course-api.com/react-tours-project';


// HTTP GET - Using promise
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// HTTP GET - Using await
const getTours = async () => {
    try {
        const resp = await fetch(url);
        
        // Handle posiible error
        if(!resp.ok) {
            throw new Error(`There was an error: "${resp.status} ${resp.statusText}"`);
        }

        // const data = await resp.json();
        // console.log(data);
        return resp.json();

    } catch (error) {
        console.log(error);
    }
}
const tourses = getTours().then();
console.log(tourses);



// HTTP POST
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



// HTTP DELETE
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