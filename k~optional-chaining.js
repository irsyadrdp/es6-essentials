 /*  
 *  Javascript ES6
 *  Optional Chaining
 *  - allows to access properties of an object without checking if the property exists
 * 
 */

 const people = [
    {
        name: 'John Doe',
        location: {
            city: 'Phoenix',
            state: 'AZ',
            timezone: {
                offset: '-07:00',
                description: 'Mountain Time (US & Canada)'
            }
        }
    },
    {
        name: 'Dave Wilson',
        location: {
            city: 'Indianapolis',
            state: 'IN'
            // this one doesn't have timezone
            // will throw an error when you loop through this array
        }
    },
    {
        name: 'Anne Smith',
        location: {
            city: 'Seattle',
            state: 'WA',
            timezone: {
                offset: '-08:00',
                description: 'Pacific Time (US & Canada)'
            }
        }
    }
];

people.map(person => {
    console.log(person.name);
    
    // Option 1
    console.log(
        person.location &&
        person.location.timezone &&
        person.location.timezone.offset
    );

    // Option 2
    // Use only in nodejs version 14.0.0 or higher
    console.log(person?.location?.timezone?.offset || 'No timezone');
});

console.log(true && 'foo');
console.log(false && 'pizza');
