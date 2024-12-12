console.log("Typescript");
//!union types
//!literal types
//!type aliases



//* | this is called union type or pipe 

function combine(varOne: number | string, varTwo: number | string) {
    if(typeof varOne ==="string" && typeof varTwo ==="string"){
        return varOne + " " + varTwo
    } else {
        
        return varOne.toString() + varTwo.toString();
    }
}
console.log(combine("Hello", "World"));
console.log(combine(1, 2));

//!literal types
//!like literal custom variables type
function combine2 (varOne: number | string, varTwo: number | string,conversionTypes:"as-number"|"as-string") {
    if(typeof varOne ==="string" && typeof varTwo ==="string"||conversionTypes==="as-string"){
        return varOne + " " + varTwo
    } else {
        
        return varOne.toString() + varTwo.toString();
    }
}

const result = combine2(2,10, "as-number");
const resilt2 = combine2("Hello", "World", "as-string");

//!custom types or type aliases
type Combinable=number|string
type ConversionTypes="as-number"|"as-string"
function combine3 (varOne: Combinable, varTwo: Combinable,conversionTypes:ConversionTypes) {
    if(typeof varOne ==="string" && typeof varTwo ==="string"||conversionTypes==="as-string"){
        return varOne + " " + varTwo
    } else {
        
        return varOne.toString() + varTwo.toString();
    }
}
type User = {
    name: string,
    age:number
}

const user:User = {
    name: "John Wick",
    age:21
}
function greet(user:User) {
    console.log("Hello ".concat(user.name));
}
greet(user);