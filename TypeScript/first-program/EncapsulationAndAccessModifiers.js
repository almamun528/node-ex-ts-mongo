// tutorial 15 : Encapsulation & access modifiers
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
// public , private , readonly , protected
// read only property helps only to show and access data. It does not allows minification
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
// extend
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // private can is blocked with this class we can not access and get the value from other side.
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, " and age:").concat(this.age, ", student id : ").concat(this.studentId));
    };
    //   as the studentId is private now create a public function and also set the value into the id
    // so that we can get the property
    Student.prototype.setStudentId = function (studentId) {
        // set the student id into student id variable
        this.studentId = studentId;
    };
    //   get the student id
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
var student1 = new Student("anisul", 33, 11102);
student1.setStudentId(123113);
console.log(student1.getStudentId());
// let user1 = new User("robi", 23);
// user1.userName = "pinky";
// user1.display();
