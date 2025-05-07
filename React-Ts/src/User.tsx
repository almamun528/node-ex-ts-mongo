type UserProps = {
  name: string;
  age: number;
  isRegister: boolean;
};

const User = ({ name, age, isRegister }: UserProps) => {
  return (
    <div>
      <h1>All Users is here </h1>
      <br />
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
      <h2>
        user Is:{" "}
        {isRegister ? <span>Registered</span> : <span>Not Register</span>}
      </h2>
    </div>
  );
};

export default User;
