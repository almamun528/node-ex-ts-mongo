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
  // schema validation --> either use object syntax or object syntax
  title: {
    type: String,
    //  minlength:3, //! product title will be only 3 alphabet /letter
    minlength: [3, "product title minimum length 3"],
    maxlength: [100, "product title maximum 10 letter"],
    // uppercase:true, // make all upper case
    lowercase: true, //make all lower case
    trim: true, // before after space will be removed
    // enum:["iphone",'samsung'], // it will accept only this two title
    // enum:{
    //   values:['i phone','samsung', 'nokia','one plus',],
    //   message:"{VALUE} is not supported"
    // },
    required: [true, "product title is required"],
  },
  // title: { type: String, required: true }, //object
  price: {
    type: Number,
    min: [200, "minimum price is 200"],
    max: [2000, " maximum price should be under 2000 or equal 2000"],
    required: true,
  },

  ratting: { type: Number, required: true },
  description: { type: String, required: true },
  // email--> must be unique one user can not use same email to login or create user 
  email: {
    type: String,
    unique: true,
  },
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
      ratting: req.body.ratting,
      description: req.body.description,
    });

    const productData = await newProduct.save();
    res.status(201).send(productData);
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
    if (products.length > 0) {
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

//!delete a document || delete a single item by params id
app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const product = await Product.deleteOne({ _id: id }); //one way to delete like mongoDB does--> it does not return the data which is deleted.
    const product = await Product.findByIdAndDelete({ _id: id });
    // findByIdAndDelete -> mongoose provide-> it helps to return the deleted data into the variable

    if (product) {
      res
        .status(200)
        .send({ success: true, message: "deleted", data: product });
    } else {
      res.status(404).send({
        success: false,
        data: null,
        message: "product not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a single product by query parameter
//localhost:4000/delete/?id=67b880543a8d39fdfa091c29
app.delete("/delete", async (req, res) => {
  try {
    const id = req.query.id;
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    if (deletedProduct) {
      res.status(200).send({
        success: true,
        message: "product deleted",
        data: deletedProduct,
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "id is not found", data: null });
    }
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
});

//? update a single document
// put operation

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // const updateProduct = await Product.updateOne(
    //   { _id: id },
    //   { $set: { ratting: 4.6 } } );
    //do not return the whole product-->updateOne

    // *return whole product by using--> findByIdAndUpdate
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        // set the value directly
        $set: {
          title: req.body.title,
          price: req.body.price,
          ratting: req.body.ratting,
        },
      },
      { new: true } //--> Immediate update the data needs to use --> {new:true} this object property
    );
    if (updateProduct) {
      res.status(200).send({
        success: true,
        message: "updated successful",
        data: updateProduct,
      });
    } else {
      res.status(404).send({ success: false, message: "product not found" });
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

// next tutorial ---16 Schema validation
