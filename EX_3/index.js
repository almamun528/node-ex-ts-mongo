// tutorial 8 express js---> anisul islam 
const express= require('express')
const app= express()
const PORT = 3001
const bodyParser = require("body-parser")
// follow the documentation how to use it.. 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.post("/user", (req,res)=>{
    const userName = req.body.userName;
    const age = req.body.age
    res.send(`welcome -->  ${userName} , you are ${age} years old` );
    // use postMan , Post -> then body -> raw --> formate --> json 
});

app.get('/', (req, res)=>{
    res.send('hello world ---> server is running ')
})




 app.listen(PORT, () => {
  console.log(`server is running at http://localhost${PORT}`);
});