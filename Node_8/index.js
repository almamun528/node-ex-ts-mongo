// Lesson-----8 

// https://www.youtube.com/watch?v=2IFDMvfJJHc&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=10 
// Deploy into Heroku for share api 

const http = require('http')
const fs = require('fs')
const PORT = 9000 
const hostName = 'localhost'


const handleReadFile=(fileName, statusCode, req, res)=>{

fs.readFile(fileName,   (error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
    }
})
}

const server = http.createServer((req, res)=>{

    if(req.url==='/'){
        handleReadFile('home.html', 200, req, res)
    }
    else if(req.url==='/about'){
        handleReadFile('about.html', 201, req, res)
    }
    else{
        handleReadFile('error.html', 404, req, res)
    }
})
server.listen(PORT, hostName ,()=>{
    console.log(`server is running into http://${hostName}:${PORT}`)
})
