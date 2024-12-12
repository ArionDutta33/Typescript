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
//! bad practice
// let combineFunction = add;
// console.log(combineFunction(10,20));
//*good practice
var addFunction;
// let addFunction=greet;
addFunction = add;
function callbackFunction(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
callbackFunction(10, 20, function (result) {
    console.log(result);
});
