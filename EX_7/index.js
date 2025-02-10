// https://www.youtube.com/watch?v=lqRIy6d6D48&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=24
// html file image file ---> middle wear 
// !tutorial 14: express static middle wear


const express = require('express')
const app = express()
const PORT = 3000 

app.use(express.static("public")) //static middle wear when we work with style and images 


app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})



app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})