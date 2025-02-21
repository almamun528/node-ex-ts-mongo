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
// this all are build in schema validation  

// !custom schema validation 
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "product title is required"], // it is build in schema validation

    // custom 
    validate:{
        validator: function(v){
           return v.length ===10
        },
        message:(props)=>`${props.value} this is not a valid title`
    }
  },
  price: {
    type: Number,
    min: [200, "minimum price is 200"], // it is build in schema validation
    max: [2000, " maximum price should be under 2000 or equal 2000"], // it is build in schema validation
    required: true,
  },

  phone:{
    type:String,
    required:[true, 'phone number is required '],
    validator:{
        validator:function(v){
            return // add here regular expression from mongoose Schema validation 
        }, message:(props)=> `${props.value} is not  a valid phone number `
    }
  }
});