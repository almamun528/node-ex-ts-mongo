// Lesson 3 is about build-in module --> os and path 

// ! what is os ? 
/**
 * The os module in Node.
 *  js provides operating system-related utility methods and properties. 
 * It helps retrieve system information such as CPU details, 
 * memory usage, and network interfaces, enabling you to write system-aware 
 * applications.
 */
const os = require('os')
// 
// console.log(os) //provides many function 

console.log(os.userInfo(), '  Success')
console.log('Home directory ',os.homedir()) //provides location or which directory 
console.log('Host ',os.hostname()) // host name whose pc or laptop? who is hosting currently my MacBook is hosting


console.log("total memory " , os.totalmem()) //my total memory 
console.log('free memory --> ', os.freemem())


// !we don't need to require full os module just destructure the function which we need 
const {freemem}= require('os')
// console.log('free memory -->', freemem())

// ? Path name Methods

const path = require('path')
// console.log(path)

// find the path name 
const extensionName = path.extname("index.html")  //path name is .html --> extname will find the name 
console.log(extensionName)


// Join the url 
const joinName = path.join(__dirname + '/view') // join will alow to add the '/view' into last part of url
// /Users/mamun/Desktop/projects/node-ex-ts-mongo/Lesson3/view 
console.log(joinName) 
// also we can go back like 
const joinName2 = path.join(__dirname+'/../view')
// /Users/mamun/Desktop/projects/node-ex-ts-mongo/view 
// in this here we skip Lesson3 file 
console.log(joinName2)