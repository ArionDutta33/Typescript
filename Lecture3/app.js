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
//!literal types
//!like literal custom variables type
function combine2(varOne, varTwo, conversionTypes) {
    if (typeof varOne === "string" && typeof varTwo === "string" || conversionTypes === "as-string") {
        return varOne + " " + varTwo;
    }
    else {
        return varOne.toString() + varTwo.toString();
    }
}
var result = combine2(2, 10, "as-number");
var resilt2 = combine2("Hello", "World", "as-string");
function combine3(varOne, varTwo, conversionTypes) {
    if (typeof varOne === "string" && typeof varTwo === "string" || conversionTypes === "as-string") {
        return varOne + " " + varTwo;
    }
    else {
        return varOne.toString() + varTwo.toString();
    }
}
var user = {
    name: "John Wick",
    age: 21
};
function greet(user) {
    console.log("Hello ".concat(user.name));
}
greet(user);
