console.log("Typescript");
//!union types
//!literal types
//!type aliases
//* | this is called union type or pipe 
function combine(varOne, varTwo) {
    if (typeof varOne === "string" && typeof varTwo === "string") {
        return varOne + " " + varTwo;
    }
    else {
        return varOne.toString() + varTwo.toString();
    }
}
console.log(combine("Hello", "World"));
console.log(combine(1, 2));
