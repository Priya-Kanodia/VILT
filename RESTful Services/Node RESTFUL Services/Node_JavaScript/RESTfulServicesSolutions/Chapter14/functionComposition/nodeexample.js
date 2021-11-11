var compose = function (f, g) {
    return function (x) {
        return f(g(x));
    }
};

//var lambdaCompose = (f,g) => (x) => f(g(x));


var add1 = function (x) { return x + 1; };
var mult2 = function (x) { return x * 2; };

// what will this produce?
var f = compose(add1, mult2);
console.log(f(7));
