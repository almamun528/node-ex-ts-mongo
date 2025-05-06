// Object and Class in typescript
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, " and age:").concat(this.age));
    };
    return User;
}());
var allUser;
allUser = [];
var user1 = new User("Mamun", 20);
// user1.display()
var user2 = new User("abdullah", 22);
// user2.display()
allUser.push(user1, user2);
console.log('all users--> ', allUser);
