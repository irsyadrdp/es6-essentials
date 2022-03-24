/*
 *  ES6 essentials
 *
 */


 
// Unique items
new Set(objectOrArrayData); 
new Set(objectOrArrayData.map(item => item)); 



[firstEl, ...restEl]; 								// (rest operator) destructuring array
[firstKey, ...restKey]; 							// (rest operator) destructuring object
[...arr1Data, newEl]; 								// (spread operator) concat array or add new elmenet
["Should be string of new element", ...arr1Data]; 	// (spread operator) concat array or add new elmenet
const arr = [...obj]; 								// (spread operator) parsing object to array 
const splitStr = [...str]; 							// (spread operator) split string into single element 
const newArr = [...oldArr] 							// (spread operator) Copy array
const newObj = {...oldObj } 						// (spread operator) Copy object

// Spread Operator
const someFunction(firstParam, secondParam, ...spreadParam) {}
someFunction("First Parameter", "Second Paramater", 1, 2, 3, 4, 5)
someFunction("First Parameter", "Second Paramater", [1, 2, 3, 4, 5])



// Convert objects into arrays
Object.keys(obj)		// Converts property names/key into arrya
Object.values(obj)		// Converts property values into array
Object.entries(obj)		// Converts both



// Destructuring object and array
const [first, El, secondEl, thirdEl, , fifthEl] = arrayData;
const { firstKey, anotherKey, selectedKey: alias, nestedKey: { childKey } } = arrayData;



String.includes();
obj.map();
obj.filter();
obj.find();



// Reduce
const total = obj.reduce((accumulator, current) => {
	return accumulator += curr.data;
}, 0);

const {total1, total2} = obj.reduce((acc, curr) => {
	
}, {
	total1: 0,
	total2: 0
});



// Generating an array
Array.from(obj/str, (_, index) => {});
Array.from({length:value}, (_, index) => {});



// Optional Chaining - accessing nested key from object
console.log(person?.fullname?firstName?.middleName?.lastName || "No middlename");



// Callback Function
function otherFunc(value) {}
function mainFunc(param, callback) {
	callback(param);
}
mainFunc("This is Param", otherFunc) {}



// Timestamp
Date.now(); // normal date
new Date();	// this one has several child function



// Set object - a collection of unique values of any type
 new Set()     	 // create a new set
 .add(value)     // add a value to the set
 .delete(value)  // delete a value from the set
 .has(value)     // check if a value exists in the set
 .clear()        // clear all values from the set
 .size           // get the size of the set
 .values()       // get the values of the set
 .keys()         // get the keys of the set
 .entries()      // get the entries of the set
 .forEach()      // iterate over the set



// Promise
const myFunc1 = (param1, param2, data) => {
	return new Promise((resolve, reject) => {
		if (true) resolve(data);
		else reject("Something wrong happened.");
	});
}

myFunc1(1, 2, "This is data")
	.then( (data) => myFunc1(3, 4, "This is data") )
	.then( (data) => myFunc1(5, 6, "This is data") )
	.catch( (error) => console.log(error) );

	
	
// Async await --> always return promise
const myFunc2 = async (param1, param2) => {
	try{
		const data = await myFunc1(param1, param2);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}



// Fetch - Possible response types:
    Response.json()
    Response.text()
    Response.blob()
    Response.formData()
    Response.arrayBuffer()
    Response.redirect()
    Response.clone()
	
// Fetch - Accessing response info:
    Response.headers()
    Response.headers.get('Content-Type')
    Response.status()
    Response.ok()
    Response.statusText()
    Response.redirected()
    Response.type()
    Response.url()
    Response.error()
    Response.bodyUsed()