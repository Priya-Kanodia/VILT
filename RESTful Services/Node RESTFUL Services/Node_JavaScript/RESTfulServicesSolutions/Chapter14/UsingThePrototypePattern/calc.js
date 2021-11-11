var Calculator = function (sum) {
    this.sum = sum;
};

Calculator.prototype = {
    add: function (x, y) {
        this.sum = x + y;
    },
    subtract: function(x, y) {
        this.sum = x - y;
    },
    multiply: function(x, y) {
        this.sum = x * y;
    },
    divide: function(x, y) {
        this.sum = x / y;
    }
};

module.exports = Calculator;
