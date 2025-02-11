const express=require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const usersRouter = require('./route/user.route')
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/users",usersRouter)


// home route 
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
//  route not found 
app.use((req,res,next)=>{
    res.status(404).json({message:'route not match with request'})
})

// server error 
app.use((err,req,res,next)=>{
    res.status(500).json({message:'something broken'})
})
module.exports = app;
