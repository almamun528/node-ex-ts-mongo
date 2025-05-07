import User from "./User";

// build in data types

const user1 = {
  name: "kamal",
  age: 22,
  isRegister: true,
  lang: ["hindi", "urdhu"],
};

function App() {
  return (
    <div>
      <h2>Hello world</h2>
      <User
        user={user1}
        // name={"Abdullah Al Mamun"}
        // age={22}
        // isRegister={false}
        // lang={["bangla", "english"]}
      />
      {/* another user for object property  */}
    </div>
  );
}

export default App;
