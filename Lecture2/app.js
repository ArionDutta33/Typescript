//*tuples,objects array,enum
console.log("Tuples arrays objects and enums");
//*type definitions for nested objects and arrays
var person = {
    firstName: "Patel",
    age: 21,
    address: {
        city: "Pune",
        state: "Maharashtra",
        zipCode: 411004,
    },
    skills: ["HTML", "CSS", "JS", "React", "Angular", "Nodejs"],
};
var knownLanguages;
knownLanguages = [
    "Assamese",
    "English",
    "Hindi",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Tamil",
    "Telugu",
    "Urdu",
];
//!tuples
var person2 = {
    name: "John Doe",
    skills: ["HTML", "CSS", "JS"],
    //!the order matters for number and string
    products: [10, "MacBook"],
    age: 30,
};
//!enums
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READER"] = 2] = "READER";
})(Role || (Role = {}));
;
var person3 = {
    name: "John Doe",
    skills: ["HTML", "CSS", "JS"],
    products: [10, "MacBook"],
    age: 30,
    role: Role.ADMIN,
};
if (person3.role === Role.ADMIN) {
    console.log("You are an admin");
}
else {
    console.log("You are not an admin");
}
console.log(person.address.zipCode);
console.log(person2.products[1]);
