/*
 *  Javascript ES6
 *  Dynamic Object
 *  
 */

const state = {
    status: 'offline',
    name: '',
    job: ''
};

function updateStatus(key, value) {
    state[key] = value;
}

updateStatus('status', 'online');
updateStatus('name', 'John');
updateStatus('job', 'developer');
updateStatus('finished_tasks', []);

console.log(state);
