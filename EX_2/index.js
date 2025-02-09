// import express
// what is query ?
// query is a request object that is populated by request query strings that are found in a URL.
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    // ?query parameter = req.query 
  // const id = req.query.id
  // const name = req.query.name
  // !write them in one line by destructuring
  const { id, name } = req.query;
  //localhost:3000/?id=101&name=Rony
  // check this url to understand how query takes request and response
  res.send(`<h1>req by query  Student id is : ${id} & Name is : ${name} </h1>`);
  res.end();
});

app.get('/userId/:id/userAge/:age',(req,res)=>{
  //? query by params / route parameter ---> req.params
  const id = req.params.id;
  const age = req.params.age;

  res.send(`<h1>query by params Student id is :${id}, age is: ${age} </h2>`);
  // http://localhost:3000/userId/300/userAge/30 
//   check this url to understand how it works
})



app.get('/header',(req,res)=>{
    // query by header =  req.header('variable name')
    const id = req.header('id')
    const name = req.header('name')
    res.send(
      `<h1> query by <b>Header</b>  Student id is : ${id} & Name is : ${name} </h1>`
    );
    // http://localhost:3000/header ---> use post man to see this function 

})
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
