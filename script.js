var value = "";
var result = 0;
var operand = "i";
var element = function (id) {
    return document.getElementById(id);
};
var setScreenValue = function (screenValue) {
    var input = element("input");
    input.innerHTML = String(screenValue);
};
var setNumberToValue = function (e) {
    value += e.target.innerHTML;
    setScreenValue(value);
};
var clearMemory = function () {
    value = "";
    result = 0;
    operand = "i";
    setScreenValue(String(result));
};
var sum = function () {
    if (value == "")
        return;
    calcResult();
    operand = "+";
};
var minus = function () {
    if (value == "")
        return;
    calcResult();
    operand = "-";
};
var times = function () {
    if (value == "")
        return;
    calcResult();
    operand = "*";
};
var divide = function () {
    if (value == "")
        return;
    calcResult();
    operand = "/";
};
var calcResult = function () {
    if (operand == "+" || operand == "i") {
        result += Number(value);
    }
    else if (operand == "-") {
        result -= Number(value);
    }
    else if (operand == "*") {
        result *= Number(value);
    }
    else if (operand == "/") {
        result /= Number(value);
    }
    else
        return;
    setScreenValue(String(result));
    value = "";
    operand = "";
};
element("numberZero").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberOne").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberTwo").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberThree").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberFour").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberFive").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberSix").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberSeven").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberEight").addEventListener("click", function (e) { setNumberToValue(e); });
element("numberNine").addEventListener("click", function (e) { setNumberToValue(e); });
element("decimal").addEventListener("click", function (e) { setNumberToValue(e); });
element("sum").addEventListener("click", function () { sum(); });
element("minus").addEventListener("click", function () { minus(); });
element("times").addEventListener("click", function () { times(); });
element("divide").addEventListener("click", function () { divide(); });
element("result").addEventListener("click", function () { calcResult(); });
element("clear").addEventListener("click", function () { clearMemory(); });
