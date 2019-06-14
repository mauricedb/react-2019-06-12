var Calculator = /** @class */ (function () {
    // private msg: string = "";
    function Calculator(msg) {
        if (msg === void 0) { msg = "The default"; }
        this.msg = msg;
        // this.msg = msg;
    }
    Calculator.prototype.add = function (x, y) {
        var result = x + y;
        // this.msg = 'Stuff'
        console.log(this.msg, result);
        return result;
    };
    Calculator.prototype.subtract = function (x, y) {
        var result = x - y;
        return result;
    };
    return Calculator;
}());
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var result = document.getElementById("result");
var calculator = new Calculator();
add.addEventListener("click", function () {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener("click", function () {
    result.textContent = calculator.subtract(x.value, y.value).toString();
});
var person = {
    firstName: "",
    lastName: "",
    age: 0
};
function printPerson(p) {
    console.log(p.firstName);
}
printPerson({
    firstName: "",
    lastName: "",
    age: 0
});
function doStuff(p) {
    console.log(p.firstName);
}
var anObject = {
    firstName: "",
    lastName: "",
    age: 0
};
doStuff(anObject);
var b = {
    name: "",
    city: "",
    street: ""
};
