import React from "react";
import styles from './UserItem.module.css'

const UserItem = props =>{
    return (
        <div className={styles.user}>
            {props.username} ({props.age} years old)
        </div>
    );
};

export default UserItem