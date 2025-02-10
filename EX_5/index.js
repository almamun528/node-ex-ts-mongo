//  regular expression in express routing
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/product/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  res.send(`product id is --> : ${id}`);

  // http://localhost:3000/product/10 --> check this link out put 10 good
  //   I expect id must be number
  // http://localhost:3000/product/abc ---> it show me abc  which is not okhe..
  //!/product/:id([0-9]+) write it and it means server accept 0-9 digit or more then one degit like 11 or 12
  // ("/product/:id([0-9]{3})----> only 3 combination like 123 or 983
  // ("/product/:id([0-3]+)---> it means accept value under 3 like 123 accept but not 452 
});

app.get("/product/:title([a-zA-Z0-9]+)", (req, res) => {
  const title = req.params.title;
  res.send(`<h1>  product title is --> : ${title} </h1>`);
  // ([a-zA-Z]+)----> accept only letter , check ->  localhost:3000/product/iphone
  //   localhost:3000/product/iphone7 --> error because we did not handle this type of request like letter+number Combination
  //   ([a-zA-Z0-9]+)---> this allow to accept request of letter + number combination 
})


app.get("/", (req, res) => {
  res.send("hello world");
  res.end();
});

app.use('*',(req,res)=>{
    res.status(404).send({message:'not a valid route'})
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
