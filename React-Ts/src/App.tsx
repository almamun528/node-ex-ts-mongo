import User from "./User";

// build in data types

function App() {
  return (
    <div>
      <h2>Hello world</h2>
      <User name={"Abdullah Al Mamun"} age={22} isRegister={false} />
      <User name={"Hemal"} age={25} isRegister={true} />
    </div>
  );
}

export default App;
