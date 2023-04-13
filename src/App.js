import React, { useState } from "react";
import styles from "./App.module.css";
import User from "./components/UserComponent/User";
import UserList from "./components/UserList/UserList";
import Warning from "./components/Warning/Warning";
function App() {
  const [isValidUsername, updateIsValidUsername] = useState(true);
  const [isValidAge, updateIsValidAge] = useState(true);
  const [users, updateUsers] = useState('');
  const onAddUser = (user) => {
    if (user.username==='' || user.age==='') {
      updateIsValidUsername(false);
      return;
    }
    if (user.age < 1) {
      updateIsValidAge(false);
      return;
    }
    
    updateUsers((prevState) => {
      return [user, ...prevState];
    });
  };
  const closeWarningHandler = ()=>{
    updateIsValidUsername(true);
    updateIsValidAge(true);
  }
  let warning ='';
  if(!isValidUsername){
    warning= <Warning message="Please enter a valid name and age (non-empty values)." closeWarning={closeWarningHandler}/>
  } else if (!isValidAge){
    warning= <Warning message="Please enter a valid age (>0)." closeWarning={closeWarningHandler}/>
  } else{
    warning =''
  }
  return (
    <>
      <div className={styles.container}>
        <User addUser={onAddUser} />
        <UserList users={users} />
      </div>
      {warning}
    </>
  );
}

export default App;
