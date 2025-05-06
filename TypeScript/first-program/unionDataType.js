//! union type 
// In TypeScript, a union type allows a variable to hold more than one type of value.
//  You use the | symbol (not ||, which is a logical OR) to define union types.
var userId;
userId = 101;
userId = "201";
function displayUserInfo(useId) {
    console.log("user id --> ", userId);
}
displayUserInfo(2);
displayUserInfo("22");
