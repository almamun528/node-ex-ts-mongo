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
function printUserInfo(userId, userAge) {
    console.log("user id ".concat(userId, " age: ").concat(userAge));
}
printUserInfo("11", 22);
// generic into arrow function
var printUserInfo2 = function (userId, userAge) {
    console.log("user id ".concat(userId, " age: ").concat(userAge));
};
