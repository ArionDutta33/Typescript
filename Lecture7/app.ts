console.log("Typescript");

//!type guards

//https://www.typescriptlang.org/docs/handbook/advanced-types.html

type Combinable = number | string;
type Numberic = number | boolean;
type Universal = Combinable & Numberic; //intersection ...nah its both of two types

function combine(varOne: Combinable, varTwo: Combinable) {
  if (typeof varOne === "string" && typeof varTwo === "string") {
    return varOne + " " + varTwo;
  } else {
    return varOne.toString() + varTwo.toString();
  }
}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const emp: ElevatedEmployee = {
  name: "Patel",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(emp.startDate);

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  //!wrong
  // if(typeof emp === "object"){
  //     console.log(emp.prvivileges);
  // }
  //!use the in keyword to check if an object has a property
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}
printEmployeeInformation(emp);

//type assertion or type casting
// one way
// *const something = <HTMLInputElement>document.getElementById("user-input")!;//!not null
// *something.value = "Hello";

// second way
// *const something = document.getElementById("user-input")! as HTMLInputElement;//!not null
// *something.value = "Hello";
