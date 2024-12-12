console.log("Typescript");
//generic ->one type is related to another stype
type Person = {
  name: string;
  age: number;
};
const Boy: Person = {
  name: "John",
  age: 21,
};

const fruits: Array<Person> = [{ name: "John", age: 21 }, Boy];
// fruits.push("apple");
// fruits.push("banana");
console.log(fruits);

// example2
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const res = merge({ name: "John" }, { role: "software developer" });
console.log(res);

// you do not know what type will be passed to the function then you can use generic


//this is generic constrains means only a certain type can be passed to the function like here string, number and boolean can be passed to the function
function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}
const obj = createObject("name", 21, true);
console.log(obj);

//!generics with interface
interface IGeneric<T> {
    name: T;//anything if IGeneric<string> is passed then name will be string
    age:number
}
const obj2: IGeneric<string> = { name: "John", age: 21 };
// here IGeneric<string> is passed means only string can be passed if IGeneric<number> is passed then only number can be passed


//!generics default 
interface IGeneric2<T = string> {
  name: T;//anything if IGeneric<string> is passed then name will be string
}
const obj3: IGeneric2 = { name: "John" };
// here IGeneric<string> is passed means only string can be passed if IGeneric<number> is passed then only number can be passed


//generics with array

function getFirst<T>(arr: T[]){
    return arr[0]
}
const firstNumber=getFirst([1,2,3])
const firstString = getFirst(["a", "b", "c"])
console.log(firstNumber);
console.log(firstString);

//key of generics
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj4 = { name: "John", age: 21 };
 const age = getProperty(obj4, "age");