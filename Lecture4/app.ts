console.log("Typescript");
//!function return types
function add(num1: number, num2: number): number {
  return num1 + num2;
}
const result = add(10, 20);
console.log(result);
function greet(name: string): void {
  console.log("Hello ".concat(name));
}
greet("John Wick");

//! bad practice
// let combineFunction = add;
// console.log(combineFunction(10,20));

//*good practice
let addFunction: (a: number, b: number) => number;
// let addFunction=greet;
addFunction = add;

function callbackFunction(num1: number, num2: number, cb: (a: number) => void) {
    const result = num1 + num2;
    cb(result);
}
callbackFunction(10, 20, (result) => {
    console.log(result);
});