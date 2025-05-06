// typescript tutorial 20 : interface as types
var users = [];
var user1 = {
    id: 1,
    name: "abdullah",
    age: 22,
};
var user2 = {
    id: 2,
    name: "Mamun",
    age: 32,
};
var users2 = [];
var user3 = {
    ID: 9,
    name: "rohan",
    age: 32,
};
var user4 = {
    ID: 10,
    name: "Kamal",
    age: 12,
};
users2.push(user3, user4);
console.log(users2);
