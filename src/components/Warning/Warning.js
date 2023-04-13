import React from "react";
import styles from "./Warning.module.css";
const Warning = (props) => {
    const clickHandler=(event) =>{
        if (event.target.classList.contains(styles.button) || event.target.classList.contains(styles.container)) {
            props.closeWarning();
          }
    };
  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.warning}>
        <div className={styles.head}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.message}>
          <p>{props.message}</p>
          <button className={styles.button} onClick={clickHandler}>Okey</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
