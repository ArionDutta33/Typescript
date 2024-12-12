//*tuples,objects array,enum
console.log("Tuples arrays objects and enums");
//*type definitions for nested objects and arrays
const person: {
  firstName: string;
  age: number;
  address: {
    city: string;
    state: string;
    zipCode: number;
  };
  skills: string[];
} = {
  firstName: "Patel",
  age: 21,
  address: {
    city: "Pune",
    state: "Maharashtra",
    zipCode: 411004,
  },
  skills: ["HTML", "CSS", "JS", "React", "Angular", "Nodejs"],
};

let knownLanguages: string[];
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

const person2: {
  name: string;
  age: number;
  skills: string[];
  products: [number, string]; //!fixed array of two types
} = {
  name: "John Doe",
  skills: ["HTML", "CSS", "JS"],
  //!the order matters for number and string
  products: [10, "MacBook"],
  age: 30,
};

//!enums

enum Role {AUTHOR,ADMIN,READER};

const person3 = {
  name: "John Doe",
  skills: ["HTML", "CSS", "JS"],
  products: [10, "MacBook"],
  age: 30,
  role: Role.ADMIN,
};

if (person3.role === Role.ADMIN) {
    console.log("You are an admin")
} else {
    console.log("You are not an admin")
}

console.log(person.address.zipCode);
console.log(person2.products[1]);
