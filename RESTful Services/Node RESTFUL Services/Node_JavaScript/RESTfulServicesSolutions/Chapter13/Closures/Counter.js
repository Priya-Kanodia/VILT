
var Counter = function() {
    var privateCounter = 0;
    
    var modify = function(delta) {
        privateCounter += delta;
    }

    return function() {
        this.increment = function() {
            modify(1);
        };
        this.decrement = function() {
            modify(-1);
        };
        this.value = () => privateCounter;
        this.reset = () => privateCounter = 0;
    }
}();

module.exports = Counter;
