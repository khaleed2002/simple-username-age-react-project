import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import User from "./components/UserComponent/User";
import UserList from "./components/UserList/UserList";
function App() {
  const [isValidUsername,updateIsValidUsername]=useState(true);
  const [isValidAge,updateIsValidAge]=useState(true);
  const dumbUsers = [
    {
      username: "khaled",
      age: 20,
    },
    {
      username: "ahmed",
      age: 21,
    },
  ];
  const [users, updateUsers] = useState(dumbUsers);
  const onAddUser = (user) => {
    if(user.age<1){
      updateIsValidAge(false);
      return;
    }
    if(!user.username || !user.age){
      updateIsValidUsername(false);
      return;
    }
    updateUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div className={styles.container}>
      <User addUser={onAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
