import User from "./User";
import UserDemo from "./UserDemo";

// build in data types
const allUsers = [
  {
    name: "Rahim",
    age: 22,
    isRegister: true,
    lang: ["hindi", "urdhu"],
  },
  {
    name: "Jamal",
    age: 32,
    isRegister: true,
    lang: ["hindi", " urdhu"],
  },
];

const user1 = {
  name: "kamal",
  age: 22,
  isRegister: true,
  lang: ["hindi", "urdhu"],
};
const user2 = {
  name: "Johan",
  age: 42,
  isRegister: true,
  lang: ["Panjabi", "Hindi", "english"],
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
      <User user={user2} />

      <h1>Demo Users data</h1>
      <UserDemo allUsers={allUsers} />
    </div>
  );
}

export default App;
