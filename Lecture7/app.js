console.log("Typescript");
function combine(varOne, varTwo) {
    if (typeof varOne === "string" && typeof varTwo === "string") {
        return varOne + " " + varTwo;
    }
    else {
        return varOne.toString() + varTwo.toString();
    }
}
var emp = {
    name: "Patel",
    privileges: ["create-server"],
    startDate: new Date()
};
console.log(emp.startDate);
function printEmployeeInformation(emp) {
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
