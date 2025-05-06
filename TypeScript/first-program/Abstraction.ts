//  tutorial 14 : abstraction

// abstraction helps us to hide the implementation of something
// object can not be created from abstract class
// if a class extends abstract class, it must inherit all the abstract methods

abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void; 
}
class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName} and age:${this.age}, student id : ${this.studentId}`
    );
  }
}

let student1 = new Student("anisul", 33, 11102);
student1.display();