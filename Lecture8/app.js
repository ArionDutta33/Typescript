var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Typescript");
var Boy = {
    name: "John",
    age: 21,
};
var fruits = [{ name: "John", age: 21 }, Boy];
// fruits.push("apple");
// fruits.push("banana");
console.log(fruits);
// example2
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var res = merge({ name: "John" }, { role: "software developer" });
console.log(res);
// you do not know what type will be passed to the function then you can use generic
//this is generic constrains means only a certain type can be passed to the function like here string, number and boolean can be passed to the function
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("name", 21, true);
console.log(obj);
var obj2 = { name: "John", age: 21 };
var obj3 = { name: "John" };
// here IGeneric<string> is passed means only string can be passed if IGeneric<number> is passed then only number can be passed
//generics with array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3]);
var firstString = getFirst(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);
