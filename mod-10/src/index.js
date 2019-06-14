var Calculator = /** @class */ (function () {
    function Calculator(msg) {
        this.msg = msg;
    }
    Calculator.prototype.add = function (x, y) {
        var result = x + y;
        if (typeof this.msg !== "undefined") {
            console.log(this.msg.toString(), result);
        }
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
if (add && result) {
    add.addEventListener("click", function () {
        result.textContent = calculator.add(+x.value, +y.value).toString();
    });
}
if (subtract && result) {
    subtract.addEventListener("click", function () {
        result.textContent = calculator.subtract(+x.value, +y.value).toString();
    });
}
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
function doThing(animal) {
    if (animal.theAnimalType === "dog") {
        animal.eat();
    }
}
var demo = "one";
var cat = {
    name: "Zorro"
};
