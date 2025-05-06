// Learn Data Types of TypeScript
/** //! Build In Type
 * number
 * string
 * boolean
 * void --> if function does not return anything it's a void
 * undefine
 * null
 */

let roll: number;

let firstName: string;
let lastName: string;

let isActive: boolean;

firstName = "Abdullah";
lastName = " Al Mamun";
roll = 20;
isActive = true;
let fullName = firstName.concat(lastName); //concat feature

// console.log("My name is ", fullName, " my role is ", roll, " male: ", isActive);

// console.log("split -> ", fullName.toLowerCase().split(" "));

//! this function is not return anything and it's called void function
function display(): void {
  console.log("I am display");
}
display()