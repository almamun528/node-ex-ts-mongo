console.log('-------------Lesson 2------------------')
// require the fs 
const fs = require('fs')
// console.log(fs) //-> in fs module it provides many function 

fs.writeFile('demo1.txt', 'Write anything into this function. ', function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log('successful')
    
    }
    // in using this function we can create a file and into the file we can write anything
    // if we change anything (text/context) file will overwrite and show the last updated data
// })
//! another function is append 

fs.appendFile('demo1.txt', 'i am 25 ', function(error){
    if(error){
        console.log(error)

    }
    else{
        console.log('Success')
    }
    // by appendFile we can add anything into the file without over-write
})
// Another function is readFile 

fs.readFile('demo1.txt','utf-8' ,(error, data)=>{
    if(error){
        console.log(error)
    }
    // utf-8 --> by using this we can get the human readable text
    else{
        console.log('successful data found --> ',data )
    }
    // by this function we can read data 
})
// Another function is rename // Rename anyFile 
fs.rename('demo1.txt', 'demo.txt', (error)=>{
    //in this here 1st give old file name 'demo1.txt' then new name 'demo.txt 

    if(error){
        console.log(error)
    }
    else{
        console.log("successFul file name changed")
    }
    // change file name it is called rename. 
})



// Another function  Delete any file 

fs.unlink('demo.txt', (error)=>{

    if(error){
        console.log(error)
    }
    else{
        console.log('file is deleted ')
    }
    // when this function runs the file will be deleted. 

})


// another function is exist 

fs.exists('demo.txt', (result)=>{
    if(result){
        console.log('file is found')
    }
    else{
        console.log("file is not founded")
    }
})