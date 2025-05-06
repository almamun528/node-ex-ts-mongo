// !typescript tutorial 13 : Inheritance

/**
 * In TypeScript (TS), inheritance is an object-oriented programming concept
 * where a class (called the child or subclass)
 * inherits properties and methods from another class
 * (called the parent or superclass).
 */

class User {
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

// I have all user and Some of them are student. I don't write there name age again
// because I already have there name and age into User Class .
// And I can bring the property from User class to Student class

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
student1.display()