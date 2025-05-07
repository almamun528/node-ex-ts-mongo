type UserProps = {
  //   name: string;
  //   age: number;
  //   isRegister: boolean;
  //   lang: string[]; //use sting array
  user: {
    name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
 <section>
    <div>
      <h3>name: {user.name}</h3>
      <h3>age: {user.age}</h3>
      <h2>
        user Is:{" "}
        {user.isRegister ? <span>Registered</span> : <span>Not Register</span>}
      </h2>
      <div>
        Native Language
        {user.lang?.map((lan, index) => (
          <p key={index}>{lan}</p>
        ))}
      </div>
    </div>
 </section>
  );
};

export default User;
