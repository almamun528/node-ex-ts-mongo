//  tutorial 9 : save data in database from express server
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectBD = async () => {
  try {
    await mongoose.connect("mongodb://localhost");
  } catch (error) {
    console.log("db is not connected");
    console.log(error.message);
    process.exit(1);
  }
};
// create schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
});

// mongoose model
const product = mongoose.model("products", productSchema);

// test router

app.get("/", (req, res) => {
  res.send("server is running <h1> Home route </h1>");
});
// post a product route. //! create a document
app.post("/products", async (req, res) => {
  try {
    // get data form request body
    // const title = req.body.title
    // const price = req.body.price
    // const description = req.body.description
    // res.status(201).send({title, price, description})

    // use model to store the product into database
    // const newProduct = new Product({
    //     title: title,
    //     price:price,
    //     description:description,
    // })

    const newProduct = new product({
      // write this way , short hand code
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    // store the data and wait to save and response send the product to server side.
    const productData = await newProduct.save(); //single product

    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// ! read a document
app.get("/products", async (req, res) => {
    try {
     const products =  await product.find()
     if(products){
        res.status(200).send(products)
     } else{
        res.status(404).send({message:"product not found"})
     }
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
});
// get a single product by id 
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id 
    // const Product = await product.find({_id : id}) //! find return array of object 
    // const Product = await product.findOne({_id : id}) //!find return a single object 
    const Product = await product.find({_id : id}).select({title:1,_id:0}) //! only title will show, and don't show id
    // only 1 means show and 0 means mute 
    // const Product = await product.find({_id : id}),({title:1,_id:0})
    //  //! short hand code coma (, + property )

  res.send(Product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// delete 
// ! Delete all products and drop the collection
// app.delete("/products", async (req, res) => {
//   try {
//     // Delete all documents
//     await product.deleteMany({});

//     // Drop the collection
//     await mongoose.connection.db.dropCollection("products");

//     res.status(200).send({ message: "All products deleted, and collection dropped." });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });


app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectBD();
});
