const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// create data from html form
app.post("/register", (req, res) => {
    const fullName = req.body.fullName
    

  res.send(`<h1> hello ${fullName}, your registration  is done </h1>`);
});

app.get("/", (req, res) => {
  res.send("server is running --> hello world ");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
