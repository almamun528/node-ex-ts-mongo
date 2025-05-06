// Custom type
type User = { name: string; age: number }; //!  create a TYPE by User

let users: User[];
users = [
  // {name:'jo jo', age:39}
];
let user1: object;
user1 = { name: "mamun", age: 20 };
let user2: User;
user2 = { name: "hemal", age: 33 };

users.push(user2);
console.log("result", users);

let user3: User;
let user4: User;
user3 = { name: "rahim", age: 22 };
user4 = { name: "karim", age: 31 };
users.push(user4, user3);

console.log("all users --> ", users);

// ! define the type of the request
type RequestType = "get" | "post";

let getRequest: RequestType; //assign the type into request type

getRequest = "get";


function requestHandler(requestType: RequestType){ 
    console.log('request types---> ',requestType)
}

requestHandler('post')