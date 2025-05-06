// interface is a template or schema
interface IUserFormatter {
  formateUser: () => string; //function signature
}

class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}
  formateUser = () => {
    return `name ${this.fullName} age : ${this.age}`;
  };
}

let user = new User("Mr potato", 22);
console.log(user);
console.log("calling the function --->  ",user.formateUser())
