const s1 = require("./student"); //Require means Import the the file.
// console.log(s1) // s1 is is getName full function
console.log(s1.getName());
// call the function and destructure by dot notation and get the name which I write into the function

// same to same get the age
console.log(s1.getAge()); //we have to call the function
console.log(s1.myVillage);

// ? Note :
//s1 means full file and all function
// But we want to import only one or two function.
// So in this here we have to require by object destructuring
// Get only primary School
const { primarySchool, higherSchool } = require("./school");
console.log(
  "Primary School name --> ",
  primarySchool(),
  " heighSchool --> ",
  higherSchool()
);
// You can not access heighSchool until you destructure it.  {primarySchool,-> higherSchool}
