var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formateUser = function () {
            return "name ".concat(_this.fullName, " age : ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Mr potato", 22);
console.log(user);
console.log("calling the function --->  ", user.formateUser());
