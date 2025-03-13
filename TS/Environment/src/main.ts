






















// const myInfo = (val: string | number) => {
//   if (typeof val === "string") return val.toLocaleLowerCase();
//   return val + 10;
// };

class Student{
  public name: String;
  public age: number;
  public skill: boolean;

  constructor(name: string, age: number, skill: boolean) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
}

class Teacher extends Student{
  constructor(name: string, age: number, skill: boolean) {
    super(name,age,skill)
}
ageCal(){
  const difference = this.age - this.age 
  return   difference
}
}
// const stuntN = new Student('Abd',30,true)