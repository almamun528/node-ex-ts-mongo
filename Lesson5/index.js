// Lesson------5

// there are few server request (req) exist
// such as get(), post(), delete(), put(), head()

// After req then server send response (res)-->
//in server response - we will get status code and data(including head and  body)

// --------------HTTP Status code-------------
/**
 * 1. Informational Response (100-199)
 * 2. Successful Response(200-299)
 * 3.Redirects(300-399)
 * 4. client error(400-499)
 * 5.server error(500-599)
 */

const http = require('http')
// require http methods 
const port = 5000
// server run port 

// host name 
const hostName = "localhost"


// create server 
const myServer = http.createServer((req, res)=>{
    // res.writeHead(202, {"Content-type":"text/plain"})
    // res.write('hello')
    // response write and into header into browser network tab

    res.writeHead(202, {"Content-type":"text/html"})
    // Now the it will show only hello when we change the content-type plain to html
    res.write("<h1>Hello</h1>")
    res.end()
})

// Server is listen 
myServer.listen(port, hostName, ()=>{
    // pass the port and hostName
    console.log(`server is running at http://${hostName}:${port}`)
})
// after running the server go to browser console and click NETWORK tab and see the status code 202 

