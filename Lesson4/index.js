// Lesson 4______ //!Create Server 



const http = require('http') //require http methods 
//store the port 
const port = 3000; 
// host 
const hostName = '127.0.0.1'


// create server 
const myServer= http.createServer((req, res)=>{
res.end('hello I am your first server')
})

myServer.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})



