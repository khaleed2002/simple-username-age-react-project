import React, {useState} from "react";
import styles from "./User.module.css";
import Card from "../UI/Card/Card";
const User = (props) => {
  const [username,setUsername]=useState('');
  const [age,setAge]=useState('');
  const submitHandler = (event)=>{
    event.preventDefault();
    props.addUser({username,age});
    setUsername('');
    setAge('');
  }
  const usernameHandler = (event)=>{
    setUsername(event.target.value);
  }
  const ageHandler = (event)=>{
    setAge(parseInt(event.target.value));
  }
  return (
    <Card>
      <div className={styles["form-container"]}>
        <form onSubmit={submitHandler}>
          <div className={styles.username}>
            <label>Username</label>
            <input type="text" value={username} onChange={usernameHandler}></input>
          </div>
          <div className={styles.age}>
            <label>Age (Years)</label>
            <input type="number" value={age} onChange={ageHandler}></input>
          </div>
          <button type="submit" className={styles.button}>Add User</button>
        </form>
      </div>
    </Card>
  );
};

export default User;
