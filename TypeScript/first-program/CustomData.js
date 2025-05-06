var users;
users = [
// {name:'jo jo', age:39}
];
var user1;
user1 = { name: "mamun", age: 20 };
var user2;
user2 = { name: "hemal", age: 33 };
users.push(user2);
console.log("result", users);
var user3;
var user4;
user3 = { name: "rahim", age: 22 };
user4 = { name: "karim", age: 31 };
users.push(user4, user3);
console.log("all users --> ", users);
var getRequest; //assign the type into request type
getRequest = "get";
function requestHandler(requestType) {
    console.log('request types---> ', requestType);
}
requestHandler('post');
