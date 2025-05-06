// array ts

let userName: string[]; //it will allows only string value into the array
userName = ["abdullah", "anis", "shishir", "mamun"];

let studentId:number[] //it will only allow number data into the array 
studentId=[1,2,3,4,5,6,7,8]

let food:Array<string>  // another process to write 
food=['rice', 'fish', 'chicken']


// multiple input as union array 

let userNames: (string | number )[] 
userNames=['mamun', 22, ]

let userID: (string | number)[]; 

userID=[1,'me']
