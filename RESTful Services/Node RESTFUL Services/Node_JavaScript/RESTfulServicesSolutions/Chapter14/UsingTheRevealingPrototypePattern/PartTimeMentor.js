var PartTimeMentor = function (id, firstName, lastName, hourlyPay, hoursWorkedPerWeek) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.hourlyPay = hourlyPay;
    this.hoursWorkedPerWeek = hoursWorkedPerWeek;
};

PartTimeMentor.prototype = function () {
    var calculate = function () {
        console.log("started calculation");
        return this.hourlyPay * this.hoursWorkedPerWeek;
    };

    return {
        calculateWeeklyPay: calculate
    }
}();

module.exports = PartTimeMentor;
