// tutorial 15 : Encapsulation & access modifiers

// public , private , readonly , protected
// read only property helps only to show and access data. It does not allows minification
class User {
  // public is by default
  // if we do not use public key it's already be the public (default is public)
  protected userName: string;
  //   protected can inherit (supClass) with children but can not access or modify from outside.
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName} and age:${this.age}`);
  }
}
// extend
class Student extends User {
  private studentId: number;
  // private can is blocked with this class we can not access and get the value from other side.
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName} and age:${this.age}, student id : ${this.studentId}`
    );
  }
  //   as the studentId is private now create a public function and also set the value into the id
  // so that we can get the property
  setStudentId(studentId: number): void {
    // set the student id into student id variable
    this.studentId = studentId;
  }
  //   get the student id
  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("anisul", 33, 11102);
student1.setStudentId(123113);
console.log(student1.getStudentId());

// let user1 = new User("robi", 23);
// user1.userName = "pinky";
// user1.display();
