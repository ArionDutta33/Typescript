//basics are number, string and boolean
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log('Print result is true ', num1 + num2);
    }
    else {
        console.log("Print result is false ".concat(someText));
        return num1 + num2;
    }
}
var n1 = 20; //number
var n2 = 30; //number
var printResult = false; //boolean
var stringText = "Some string";
add(n1, n2, printResult, stringText);
