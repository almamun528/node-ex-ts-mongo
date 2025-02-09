// video : https://www.youtube.com/watch?v=u1BgJg6YzYM&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=20

// Express tutorial : 10 Project and MVC Architecture 

//  area calculator as triangle and circle 

const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const PORT = 3000 
// body Purser 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get("/circle", (req,res)=>{
    res.sendFile(__dirname + '/circle.html')
})


// take input from the input and calculate it and send to the server,
app.post("/circle", (req,res)=>{
    const radius = req.body.radius 
    const area = Math.PI * radius * radius 
    res.send(`<h1> Area of circle = ${area}  </h1>`);
})

// triangle calculator route 

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
// take input from the input and calculate it and send to the server,
app.post("/triangle", (req, res) => {
  const height = req.body.height
  const base = req.body.base 
  const area = 0.5 * base * height 
  res.send(`<h1> Area of Triangle = ${area}  </h1>`)
});

app.listen(PORT, (req, res)=>{
    console.log(`server is running at http://localhost:${PORT}`)
   
})