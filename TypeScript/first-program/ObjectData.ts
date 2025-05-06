// object dataType
// ? typescript bangla tutorial 10 : Object Data Type
// https://www.youtube.com/watch?v=IMbVGliJ0_s&list=PLgH5QX0i9K3rXq_1OgVmjaEJJ1akJQgPq&index=10

let user1: { userName: string; userId: number };
user1 = { userName: "abdullah", userId: 101 };

console.log(user1);

let user2: object;

user2 = { name: "mamun", age: 25 };

// write array of object
let users: object[];

users = [
  { name: "hemal", age: 29 },
  { name: "jamal", age: 22 },
];
users.push(user1,user2)
console.log('result---> ',users)

// ? 