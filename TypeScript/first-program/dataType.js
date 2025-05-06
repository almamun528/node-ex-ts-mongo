// Learn Data Types of TypeScript
/** //! Build In Type
 * number
 * string
 * boolean
 * void --> if function does not return anything it's a void
 * undefine
 * null
 */
var roll;
var firstName;
var lastName;
var isActive;
firstName = "Abdullah";
lastName = " Al Mamun";
roll = 20;
isActive = true;
var fullName = firstName.concat(lastName); //concat feature
// console.log("My name is ", fullName, " my role is ", roll, " male: ", isActive);
// console.log("split -> ", fullName.toLowerCase().split(" "));
//! this function is not return anything and it's called void function
function display() {
    console.log("I am display");
}
display();
