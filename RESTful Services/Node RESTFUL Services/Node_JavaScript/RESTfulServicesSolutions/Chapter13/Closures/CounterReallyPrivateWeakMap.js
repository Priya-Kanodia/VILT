
var Counter = function () {
    var privateCounter = new WeakMap();

    var modify = function(delta) {
        privateCounter.set(this, privateCounter.get(this) + delta);
    }

    return function () {
        privateCounter.set(this, 0);

        this.increment = function () {
            modify.call(this, 1);
        };
        this.decrement = function () {
            modify.call(this, -1);
        };
        this.value = () => privateCounter.get(this);
        this.reset = () => privateCounter.set(this, 0);
    }

}();

module.exports = Counter;
