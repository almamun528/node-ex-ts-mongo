// tutorial 19 : function signature

// function signature - it's almost like the schema

// 1
let userInfo1: () => void;

userInfo1 = () => {
  console.log("i do not return anything");
};

// 2
let userInfo2: (name: string) => void;

userInfo2 = (name) => {
  console.log(
    `do not return anything as void function but receive name as string parameter NAME: ${name} `
  );
};
userInfo2("Mamun");

// 3
let userInfo3: (name: string, age: number) => string;

userInfo3 = (name, age) => {
  return `my name is ${name} age is ${age}`;
};
console.log(userInfo3("mamun", 25))