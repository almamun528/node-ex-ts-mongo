// https://www.youtube.com/watch?v=N2lBBqrxMKo&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9&index=11
// tutorial 11 : find data using comparison query parameter 

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/MyDataBase");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
connectDB(); // Call the function to connect to MongoDB

// Create a product schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a model
const Product = mongoose.model("products", productSchema);

// Create a product
app.post("/product", async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    const productData = await newProduct.save();
    res.status(201).json(productData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// read all product
app.get("/api-all-product", async (req, res) => {
  try {
    // find the products
    const products = await Product.find();
    // check if products are Available
    if (products) {
      res.status(201).send(products);
    } else {
      res.status(404).send({ message: "product not found" });
    }
    //handle error
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// find a single product by id 
app.get('/api-all-product/:id', async(req,res)=>{
    try {
        const id = req.params.id 
        // const singleProduct = await Product.find({_id:id}).select({_id:0,__v:0}) //mute _id and v 
        const singleProduct = await Product.find({_id:id})
        res.status(201).json(singleProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// find by logic from request //!http://localhost:4000/api-filter/1000
app.get('/api-filter/:data',async(req, res)=>{
    try {
        const filterValue = Number(req.params.data);
        if(isNaN(filterValue))return res.status(404).json({message:'data is not found',success:false})
            

        const products = await Product.find({price:{$gt:filterValue}}) //---{logic to filter the products }

        if(products){ res.status(201).send({success:true, message:'return all products', data:products}) }

        else{res.status(404).send({success:false, message:'product not founded', data:null})}

    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.get('/api-filter',async(req, res)=>{
    try {
        
        //const products = await Product.find({price:{$gt:400}}) //---{logic to filter the products } gt:400 means greater then 400 
        //const products = await Product.find({price:{$lt:400}})// gt:400 means less then 400 
        //const products = await Product.find({price:{$in:[200,700,600]}})// in: includes 200,600,700
        const products = await Product.find({price:{$nin:[200,700,600]}})// nin: Not-includes 200,600,700
        if(products){ res.status(201).send({success:true, message:'return all products', data:products}) }

        else{res.status(404).send({success:false, message:'product not founded', data:null})}

    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// Test route
app.get("/", (req, res) => {
  res.json({ test: "Server is running" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
