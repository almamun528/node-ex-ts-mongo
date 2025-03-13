// define all the type first 
let fullName:string='Abdullah Al Mamun';
let age:number=25;
let isJunior : boolean= true;
let myVariable: any= 'hello' //any data can be store into this variable 
let variableOfInput:string | number = 30; //union data type either data can be string or number 

// Basic type is done

// function
const ageCal = (name: string, age: number):string => {
  return `hi $(name) you are $(age)`;
};
console.log(ageCal("hello", 30))

const moneyCal =():void=>{console.log(2+2)}
// it consider as type narrowing and also logical type define 
const monCal =(): never =>{throw new Error(' error happens')}
const myInfo = (val: string | number) => {
  if (typeof val === "string") return val.toLocaleLowerCase();
  return val + 10;
};

// array 
const food: string[] = ["apple", "mango", "orang"];
// food array will return string value 
const animal: (string | boolean)[] = ['cow', 'cat', 'fox'] // use union option into this array 
const information: [string, number, boolean] = ["Al Mamun", 30, true];
// in this here input must needs to serial wise input
//if you push anything in this array automatic allows to any input and keep  at the end 

// Object is looks like this 
const student: { name: string; age: number; skill: boolean } = {
  name: "Pori mini",
  age: 30,
  skill: true,
};
// define the type of the key then 
const teacher: { readonly name: string; age: number; skill?: boolean } = {
  name: "Pori mini",
//   we can't change the name key because it is read only
  age: 30,
// if we use ? optional chaining then it allows us not use it.
};
// !store all types into a single variable then write the object
type User = {
  readonly name: string;
  age: number;
  skill?: boolean;
};
const stuff: User = {
  name: "Mamun",
  age: 30,
  skill: true,
};
// Class contractor 
class Student {
  public name: String;
  public age: number;
  public skill: boolean;
  //   private age: number; 
  //   if we use private the keys only use the value inside the class 
  //   protected age: number; 
//   protected 

  constructor(name: string, age: number, skill: boolean) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
//public can be access outside of class 
}

class Teacher extends Student {
  constructor(name: string, age: number, skill: boolean) {
    super(name, age, skill);
  }
  ageCal() {
    const difference = this.age - this.age;
    return difference;
  }
}
const TeachN = new Teacher('kp', 40, true)
const stuntN = new Student("Abd", 30, true);