// TODO: require request-promise-native instead of request
const rp = require('request-promise-native');

const serviceUrl = 'http://localhost:9876/todos';
const todoId = 1;

const getOptions = {
    method: 'GET',
    url: `${serviceUrl}/${todoId}`,
    headers: { 
        'User-Agent': 'Request-Promise' 
    },
    json: true // Automatically parses the JSON string in the response
};

const putOptions = {
    method: 'PUT',
    url: `${serviceUrl}/${todoId}`,
    headers: { 
        'User-Agent': 'Request-Promise',
        "Content-type": 'application/json; charset=UTF-8'
    }
};

// sample JSON response to GET request:
// { "id": 1,
//   "title": "Wash car",
//   "description": "Go to Scrub 'n Bubbles", 
//   "completed": false }

// TODO: Review the code below. Note how it implements the following use case:
//       1. Send a GET request for a to-do item
//       2. Modify the value of the to-do item's "completed" property
//       3. Send a PUT request to update the to-do item on the server

// TODO: replace the following call to request() with a call
//       to the equivalent request-promise function
rp(getOptions)
    // TODO: replace this callback function with a call to then() and catch()
    .then(function (todoItem) {
        // TODO: use the following code as the callback function for then()
        console.log(`To-do item current value: ${JSON.stringify(todoItem)}`);

        todoItem.completed = !todoItem.completed;  // flip completed value
        putOptions.body = JSON.stringify(todoItem);

        // TODO: replace the following call to request() with a call
        //       to the equivalent request-promise function
        return rp(putOptions);  // send PUT request
    })
    // TODO: replace this callback function with a call to a second then()
    .then(function (todoItem) {  // todoItem is the result of the previous then()
        // TODO: use the following code as the callback function for the second then()
        console.log(`To-do item updated value: ${todoItem}`);
    })
    .catch(function (err) {
        console.error(`Request to ${serviceUrl} failed: ${err}`);
    });
