// Object and Class in typescript

class User {
  //class can holds-->  property , methods, contractor
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`username: ${this.userName} and age:${this.age}`);
  }
}

let allUser: object[];
allUser = [];

let user1 = new User("Mamun", 20);
// user1.display()

let user2 = new User("abdullah", 22);
// user2.display()

allUser.push(user1, user2);

console.log('all users--> ',allUser);
