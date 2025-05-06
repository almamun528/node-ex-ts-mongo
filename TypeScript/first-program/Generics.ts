// Generics
/**
 * 
 * Generics in TypeScript mean writing flexible and reusable code 
 * that can work with any data type, while still maintaining type safety.
 * 
 * Without generics:
    You either use any (which loses type safety)
    Or you have to write multiple versions for different types

   🚀 With generics:
    One function/class works for many types
    You preserve types, helping with autocomplete and error checking
    // ! use <T> this to define the generic
 * */

function printUserInfo<T, X>(userId: T, userAge: X) {
  console.log(`user id ${userId} age: ${userAge}`);
}
printUserInfo("11", 22);

// generic into arrow function
const printUserInfo2 = <T, X>(userId: T, userAge: X) => {
  console.log(`user id ${userId} age: ${userAge}`);
};
