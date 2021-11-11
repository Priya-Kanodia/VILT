$(document).ready(function() {
	$("#demo").click(function() {
		demo();
	});
	$("#mapdemo").click(function() {
		mapdemo();
	});
	$("#filterdemo").click(function() {
		filterdemo();
	});
	$("#reducedemo").click(function() {
		reducedemo();
	});
});

/**
 * the foreach() function
 */

var products = [ {
	name : 'Golf clubs',
	price : 175
}, {
	name : 'Basketball',
	price : 25
}, {
	name : 'Tennis racket',
	price : 95
}, {
	name : 'Baseball glove',
	price : 65
}, {
	name : 'Catnip mouse',
	price : 5.5
} ];

// ***************** The demo function using for and forEach *************************
// The function that is passed to the forEach function
// The displayProduct function creates the next item string
var displayProduct = function(product, index) {
	html += "<li>" + product.name + "</li>";
};

// The demo function calls products.forEach
// and passes the displayProduct function as an argument
var html = "Listing the products with a for loop<br/><ul>";
var demo = function() {	
	for (var i = 0; i < products.length; i++) {
		html += "<li>" + products[i].name + "</li>";
	}
	html += "</ul>";
	$("#productsForLoop").html(html);

	html = "Listing the products with a foreach loop<br/><ul>";
    // Done: Replace the anonymous function with a named function
	products.forEach(displayProduct);
	html += "</ul>";
	$("#productsForEachLoop").html(html);
};


//***************** The mapdemo function *************************
//Define the callback function.
function AreaOfCircle(radius) {
	var area = Math.PI * (radius * radius);
	return area.toFixed(2);
}

// The mapdemo function calls numbers.map and passes a function as an argument
var mapdemo = function() {
	// Create an array.
	var radii = [ 10, 20, 30 ];

	// Get the areas from the radii.
    // Done: Replace the anonymous function with a named function
	var areas = radii.map(AreaOfCircle);

	var html = "The original radii<br/><ul>";
	var roothtml = "The areas <br/><ul>";

	for (var i = 0; i < areas.length; i++) {
		html += "<li>" + radii[i] + "</li>";
		roothtml += "<li>" + areas[i] + "</li>";
	}
	html += "</ul>";
	$("#radiiDiv").html(html);
	roothtml += "</ul>";
	$("#areaDiv").html(roothtml);
};


//***************** The filterdemo function *************************
// define the oddNumber function
// returns true if the number is odd, otherwise false
var oddNumber = function(number) {
	return (number % 2 !== 0);
};

// define the doubleNumber function
// returns the number value * 2
var doubleNumber = function(number) {
	return number * 2;
};

// map and filter
var filterdemo = function() {
	var numbers = [ 1, 2, 3, 4, 42, 121 ];
	var html = "The original numbers<br/><ul>";
	var doublehtml = "Double the odd numbers<br/><ul>";

	for (var i = 0; i < numbers.length; i++) {
		html += "<li>" + numbers[i] + "</li>";
	}
	html += "</ul>";
	$("#originalFilterNumbers").html(html);

    // Done: Replace both anonymous functions with named functions
    var newNumbers = numbers
        .filter(oddNumber)
		.map(doubleNumber);

	for (var i = 0; i < newNumbers.length; i++) {
		doublehtml += "<li>" + newNumbers[i] + "</li>";
	}
	doublehtml += "</ul>";
	$("#doubleOddNumbers").html(doublehtml);

};

//***************** The reducedemo function *************************
// define the sum function
// it computes the sum of the numbers in the collection
var sum = function(total, number) {
	return total + number;
};

// reduce calls the sum function to compute the total of the collection
var reducedemo = function() {
	var numbers = [ 1, 2, 3, 4, 5, 6, 7 ];
	var html = "The original numbers<br/><ul>";
	for (var i = 0; i < numbers.length; i++) {
		html += "<li>" + numbers[i] + "</li>";
	}
	html += "</ul>";
	$("#originalReduceNumbers").html(html);

    // Done: Replace the anonymous function with a named function
	var totalNumber = numbers.reduce(sum, 0);
	$("#sumReduceNumbers").html("The sum of all the numbers = " + totalNumber);

};
