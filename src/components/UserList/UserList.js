import React from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem.js";
import Card from "../UI/Card/Card";
const UserList = (props) => {
  let usersList = "";
  if (props.users.length !== 0) {
    usersList = props.users.map((user) => (
      <UserItem age={user.age} username={user.username} />
    ));
  } else {
    return;
  }
  return (
    <Card>
      <div className={styles.container}>
        {usersList}
      </div>
    </Card>
  );
};

export default UserList;
