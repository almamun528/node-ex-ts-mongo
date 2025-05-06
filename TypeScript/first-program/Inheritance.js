// !typescript tutorial 13 : Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * In TypeScript (TS), inheritance is an object-oriented programming concept
 * where a class (called the child or subclass)
 * inherits properties and methods from another class
 * (called the parent or superclass).
 */
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
// I have all user and Some of them are student. I don't write there name age again
// because I already have there name and age into User Class .
// And I can bring the property from User class to Student class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, " and age:").concat(this.age, ", student id : ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("anisul", 33, 11102);
student1.display();
