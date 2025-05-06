// write typescript into here.....
var userName = "mamun";
console.log(userName);
var age = 25;
console.log(age);
// !How to run ⤵
// first compile the index.ts file to index.js then run with node.
// index.ts --> compile with ts---> index.js---> node.index.js
// !Run terminal 👉 tsc index.ts --watch
var student = "Abdullah Al Mamun";
console.log("result -> ", student);
var teacher = "Head Master"; //define the numbers dataType as string
// addition +
function addNumbers(num1, num2) {
    //define the type of the parameter as number
    var result = num1 + num2;
    return console.log("result --> ", result);
}
addNumbers(1, 2);
console.log('-----------------------------------------------------------------------');
