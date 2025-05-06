// ! enum - store constants value and does not allows duplicate value
// enum types : numeric, string , heterogenous (string+number)

// ? numeric enum

enum RequestTypes {
  readDate = 1,
  getDate = 2,
  deleteData = 3,
}
// console.log(RequestTypes)

// ?  String enum
enum requestType {
  readData = "Read_Data",
  getData = "Get_Data",
  DeleteData = "delete data",
}
// console.log(requestType.readData);
// console.log(requestType.DeleteData);
// console.log(requestType["readData"]);

// ? heterogenous enum

enum requestType3 {
  readData = "read me data",
  getData = "get request data",
  errorData = 404,
}
console.log(requestType3.errorData)
console.log(requestType3['errorData'])
console.log(requestType3.readData)
