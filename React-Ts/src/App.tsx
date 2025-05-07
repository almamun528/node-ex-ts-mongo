import DataFetch from "./DataFetch";
import User from "./User";
import UserDemo from "./UserDemo";
import { useState } from "react";

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
type user = {
  id: number;
  name: string;
};
function App() {
  const [myUser, setUsers] = useState<null | user>(null);
  const handleAddUsers = () => {
    setUsers({ id: 1, name: "mamun" });
    // console.log(myUser);
  };

  return (
    <div>
      <br />
      <p>{myUser?.name}</p>
      <button onClick={handleAddUsers}>add user</button>
      <button>-</button>
      <h2>
        ------------------------------------------------------------------------
      </h2>
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
      <h1>Data Fetch</h1>
      <DataFetch status={"success"} />

      {/* state--- */}
    </div>
  );
}

export default App;
