//tutorial 13: middleware in express.js 
// video:https://www.youtube.com/watch?v=byiRZfg2JaE&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=23
const express = require('express')
const app = express()
const PORT= 4000; 



// middle wear is a function , it has 3 key -->
//   1.request (req) object , 2.response (res) object , 3. next function 
const myMiddleWear=(req, res, next)=>{
    console.log('middle wear ')
    req.currentTime= new Date(Date.now())

    next()  //next to allow to bring back the function and stop reloading 
}
app.use(myMiddleWear) //----> universal middle wear , it allow to use all route. 



app.get('/', myMiddleWear,  (req,res)=>{
    console.log("I am home" + req.currentTime)
    res.send(' <h1> Hello world ! server is ready to take request 🚀  </h1>')
})
app.get('/about', myMiddleWear,  (req,res)=>{
    console.log("I am about " + req.currentTime)
    res.send(' <h1> Hello world ! server is ready to take request 🚀  </h1>')
})

app.use('*', (req,res)=>{
    res.status(404).send({message:'Request does not match with any route'})
})


app.listen(PORT,(req,res)=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
