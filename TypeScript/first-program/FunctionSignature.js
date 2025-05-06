// tutorial 19 : function signature
// function signature - it's almost like the schema
// 1
var userInfo1;
userInfo1 = function () {
    console.log("i do not return anything");
};
// 2
var userInfo2;
userInfo2 = function (name) {
    console.log("do not return anything as void function but receive name as string parameter NAME: ".concat(name, " "));
};
userInfo2("Mamun");
// 3
var userInfo3;
userInfo3 = function (name, age) {
    return "my name is ".concat(name, " age is ").concat(age);
};
console.log(userInfo3("mamun", 25));
