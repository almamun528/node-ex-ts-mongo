type userDemoProps = {
  allUsers: {
    name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
  }[];
};

const UserDemo = ({ allUsers }: userDemoProps) => {
  console.log("demo props", allUsers);

  return (
    <section>
      <main>
        {allUsers?.map((users, idx) => {
          return (
            <div key={idx}>
              <h2>Name:{users.name}</h2>
              <h2> Age: {users.age}</h2>
              <h2> Register: {users.isRegister}</h2>
              <h2>Speaks {users.lang}</h2>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default UserDemo;
