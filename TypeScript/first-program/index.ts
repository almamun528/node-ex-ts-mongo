// write typescript into here.....
let userName = "mamun";
console.log(userName);
let age = 25;
console.log(age);

// !How to run ⤵
// first compile the index.ts file to index.js then run with node.
// index.ts --> compile with ts---> index.js---> node.index.js

// !Run terminal 👉 tsc index.ts --watch

let student = "Abdullah Al Mamun";
console.log("result -> ", student);

let teacher: string = "Head Master"; //define the numbers dataType as string
// addition +

function addNumbers(num1: number, num2: number) {
  //define the type of the parameter as number
  const result = num1 + num2;
  return console.log("result --> ", result);
}
addNumbers(1, 2);
console.log('-----------------------------------------------------------------------')