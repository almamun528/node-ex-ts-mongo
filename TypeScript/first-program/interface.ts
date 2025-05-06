// typescript tutorial 20 : interface as types

let users: { id: number; name: string; age: number }[] = [];

let user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "abdullah",
  age: 22,
};
let user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "Mamun",
  age: 32,
};
// users.push(user1, user2);
// console.log(users);

// write common element into a interface

interface IUser {
  ID: number;
  name: string;
  age: number;
}
let users2: IUser[] = [];
let user3: IUser = {
  ID: 9,
  name: "rohan",
  age: 32,
};
let user4: IUser = {
  ID: 10,
  name: "Kamal",
  age: 12,
};
users2.push(user3,user4)
console.log(users2)