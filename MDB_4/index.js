// next tutorial 14 to learn.... Delete methods.. 

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
  ratting: { type: Number, required: true },
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
      ratting: req.body.rating,
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

    const products = await Product.find().sort({ price: 1 });
    //const products = await Product.find().sort({ price: 1 });
    // sort the product (low to high)
    // check if products are Available
    if (products.length>0) {
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
app.get("/api-all-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const singleProduct = await Product.find({_id:id}).select({_id:0,__v:0}) //mute _id and v
    const singleProduct = await Product.find({ _id: id });
    res.status(201).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// filter products by logical operator
app.get("/api-filter", async (req, res) => {
  try {
    //const products = await Product.find({price:{$gt:400}}) //---{logic to filter the products } gt:400 means greater then 400
    //const products = await Product.find({price:{$lt:400}})// gt:400 means less then 400
    //const products = await Product.find({price:{$in:[200,700,600]}})// in: includes 200,600,700
    const products = await Product.find({ price: { $nin: [200, 700, 600] } }); // nin: Not-includes 200,600,700
    if (products) {
      res.status(201).send({
        success: true,
        message: "return all products",
        data: products,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "product not founded", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// find by logic from request //!http://localhost:4000/api-filter/1000
// !request from params
app.get("/api-filter/:data", async (req, res) => {
  try {
    const filterValue = Number(req.params.data);
    if (isNaN(filterValue))
      return res
        .status(404)
        .json({ message: "data is not found", success: false });

    const products = await Product.find({ price: { $gt: filterValue } }); //---{logic to filter the products }

    if (products) {
      res.status(201).send({
        success: true,
        message: "return all products",
        data: products,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "product not founded", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ! request from query parameter

app.get("/api-filter", async (req, res) => {
  try {
    // get query from URL //! http://localhost:4000/api-filter?priceFilter=1000
    const priceFilter = req.query.priceFilter;

    const products = await Product.find({ price: { $gt: priceFilter } });
    if (products) {
      res.status(201).send({
        success: true,
        message: "return all products",
        data: products,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "product not founded", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// !filter by minimum value and maximum value
app.get("/api-filter", async (req, res) => {
  try {
    // query request URL //! http://localhost:4000/api-filter?minPrice=200&maxPrice=3000
    // convert the users query Input into number
    const minimumPrice = parseFloat(req.query.minimumPrice) || 0;
    const maximumPrice =
      parseFloat(req.query.maximumPrice) || Number.MAX_SAFE_INTEGER;

    // set 2 number into filter (logical operator).. we are filtered by price
    const products = await Product.find({
      price: { $gt: minimumPrice, $lt: maximumPrice },
    });
    if (products.length > 0) {
      return res
        .status(201)
        .json({ message: "Product Is Founded", success: true, data: products });
    } else {
      res
        .status(404)
        .json({ message: "data is not founded", success: false, data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// logical operator and && or ||
app.get("/logical-filter", async (req, res) => {
  try {
    // get query from URL //? http://localhost:4000/logical-filter?priceFilter=700&ratting=4
    const priceFilter = req.query.priceFilter;
    const rating = req.query.rating;

    // !and operation //{$and: [{ price: { $gt: priceFilter } }, { rating: { $gt: 4 } }]}
    // const products = await Product.find({
    //   $and: [{ price: { $gt: priceFilter } }, { rating: { $gt: ratting} }],
    // });

    //!{$or:[{ price: { $gt: priceFilter } }, { rating: { $gt: 4 } }]}
    const products = await Product.find({
      $or: [{ price: { $gt: priceFilter } }, { rating: { $gt: rating } }],
      //sort methods
    }).sort({ price: -1 }); // -1 means Descending and {price : 1} means Ascending

    //!{$nor:[{ price: { $gt: priceFilter } }, { rating: { $gt: ratting } }]}
    // const products = await Product.find({
    //   $nor: [{ price: { $gt: priceFilter } }, { rating: { $gt: ratting } }],
    // });

    if (products) {
      res.status(201).send({
        success: true,
        message: "return all products",
        data: products,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "product not founded", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Test route
app.get("/", (req, res) => {
  res.json({ test: "Server is running" });
});

// ! Delete all products and drop the collection
// app.delete("/products", async (req, res) => {
//   try {
//     // Delete all documents
//     await Product.deleteMany({});

//     // Drop the collection
//     await mongoose.connection.db.dropCollection("products");

//     res.status(200).send({ message: "All products deleted, and collection dropped." });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
