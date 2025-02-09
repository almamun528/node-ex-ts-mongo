// Express JS Lesson 01
//  --- video  2 , https://www.youtube.com/watch?v=t9GVn5j1Hsw&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=12

// make server with express. We need to install express ---> npm init -y ,  npm i express nodemon 

const app = require('./app')
const PORT = 3000; //  declare any port



app.listen(PORT, ()=>{

    console.log(`server is running ${PORT}`) 
})

// server response ---> 
// 1. body can holds data as HTML, TEXT , Json
// 2. Cookies 
// 3. Headers 
// 4. statusCode 