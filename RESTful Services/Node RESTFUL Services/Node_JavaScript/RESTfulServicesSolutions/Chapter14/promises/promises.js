/**
 * promises
 */
var url = 'data.json';
var nothome = 'bogus.json';


// Function that sends an Ajax request and returns a Promise
function sendAjaxRequest(url) {
    return new Promise((fulfill, reject) => {
        $.get(url)  // send an HTTP GET request to the URL
            .done(function (response) {  // GET request succeeded
                // TODO: fulfill the Promise with the value of response.data
                fulfill(response.data); 
            })
            .fail(function () {  // GET request failed
                // TODO: reject the Promise with an error message
                reject('Error in request sent to ' + url);
            });
    });
}

// The button click handlers are assigned here
$(document).ready(function () {
    $('#sendbutton').click(function () {
        displayData('Sending request');
        sendAjaxRequest(url)
            .then(resp => displayData(resp))  // TODO: Fix
            .catch(() => displayError('Something unexpected happened with the good request!')); 

    });
    $('#badrequest').click(function () {
        displayData('Sending bad request');
        sendAjaxRequest(nothome)
            .then(resp => displayData("Oops! Bad request didn't fail!"))  // TODO: Fix
            .catch(resp => displayError(resp));

    });
});

// display the data in the datadiv
function displayData(data) {
    $('#datadiv').html(data);
    $('#errordiv').html('');
}

// display the data in the errordiv
function displayError(data) {
    $('#datadiv').html('');
    $('#errordiv').html(data);
}
