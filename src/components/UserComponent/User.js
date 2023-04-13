import React from "react";
import styles from "./User.module.css";
import Button from "./Button";
const User = (props) => {
  return (
    <form>
      <div className={styles.username}>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div className={styles.age}>
        <label>Age (Years)</label>
        <input type="number"></input>
      </div>
      <Button />
    </form>
  );
};

export default User;
