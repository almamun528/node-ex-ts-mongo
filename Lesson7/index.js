// -----Lesson 7 -----
// --routing

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  // ! url
  // console.log(req.url) // request the url and check the console

  // res.end('welcome  ')
  // --------------------------------------------------
  // req.url and fs (by this 2 module we did this routing)
  //     if(req.url==='/'){
  //         fs.readFile('index.html', (error, data)=>{
  //             res.writeHead(200, {'Content-Type':"text/html"})
  //             res.write(data)
  //             res.end()
  //         })
  //     }
  //    else if(req.url==='/about'){
  //         fs.readFile('about.html', (error, data)=>{
  //             res.writeHead(200, {'Content-Type':"text/html"})
  //             res.write(data)
  //             res.end()
  //         })
  //     }
  //     else if(req.url==='/contact'){
  //         fs.readFile('contact.html', (error, data)=>{
  //             res.writeHead(200, {'Content-Type':"text/html"})
  //             res.write(data)
  //             res.end()
  //         })
  //     }
  //     else{
  //         fs.readFile('error.html', (error, data)=>{
  //             res.writeHead(404, {'Content-Type':"text/html"})
  //             res.write(data)
  //             res.end()
  //         })
  //     }

  // ------------------------------- 14 lines to 43 lines ------ in dynamic way

  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (error, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  // logic for routing
  if(req.url==='/'){
      handleReadFile(200, './index.html')
      }
     else if(req.url==='/about'){
           handleReadFile(203, "./about.html");
      }
     else if(req.url==='/contact'){
           handleReadFile(202, "./contact.html");
      }
      else{
          handleReadFile(401, "./error.html");
      }

});

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
