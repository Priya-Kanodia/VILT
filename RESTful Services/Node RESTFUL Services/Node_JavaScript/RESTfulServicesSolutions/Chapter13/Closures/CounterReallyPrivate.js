var Counter = (function() {
    // Constructor
    var Constr = function() {
        // private data
        var counter = 0;

        // private function
        var modify = function(delta) {
            counter += delta;
            return counter;
        };

        // public functions
        this.reset = function() {
            counter = 0;
        };

        this.value = function() {
            return counter;
        };

        this.increment = (function() {
            return modify.call(this, 1);
        });

        this.decrement = (function() {
            return modify.call(this, -1);
        });
    }

    Constr.prototype = {
        constructor: Counter
    }

    return Constr;
})();

module.exports = Counter;
