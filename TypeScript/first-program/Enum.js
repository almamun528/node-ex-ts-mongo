// ! enum - store constants value and does not allows duplicate value
// enum types : numeric, string , heterogenous (string+number)
// ? numeric enum
var RequestTypes;
(function (RequestTypes) {
    RequestTypes[RequestTypes["readDate"] = 1] = "readDate";
    RequestTypes[RequestTypes["getDate"] = 2] = "getDate";
    RequestTypes[RequestTypes["deleteData"] = 3] = "deleteData";
})(RequestTypes || (RequestTypes = {}));
// console.log(RequestTypes)
// ?  String enum
var requestType;
(function (requestType) {
    requestType["readData"] = "Read_Data";
    requestType["getData"] = "Get_Data";
    requestType["DeleteData"] = "delete data";
})(requestType || (requestType = {}));
// console.log(requestType.readData);
// console.log(requestType.DeleteData);
// console.log(requestType["readData"]);
// ? heterogenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "read me data";
    requestType3["getData"] = "get request data";
    requestType3[requestType3["errorData"] = 404] = "errorData";
})(requestType3 || (requestType3 = {}));
console.log(requestType3.errorData);
console.log(requestType3['errorData']);
console.log(requestType3.readData);
