console.log("Typescript");
//!function return types
function add(num1, num2) {
    return num1 + num2;
}
var result = add(10, 20);
console.log(result);
function greet(name) {
    console.log("Hello ".concat(name));
}
greet("John Wick");
var combineFunction = add;
console.log(combineFunction(10, 20));
