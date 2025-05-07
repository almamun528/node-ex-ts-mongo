import { useState } from "react";

function NewUser() {
  const [userNamem, setFirstName] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userNamem);
  };
  return (
    <section className="middle">
      <h2>Create New User</h2>

      <div>
        <input
          type="text"
          placeholder="Enter Your name"
          value={userNamem}
          onChange={handleUserNameChange}
        />
        <p>{userNamem}</p>
        <button onClick={handleClick}>show Name</button>
      </div>
    </section>
  );
}

export default NewUser;
