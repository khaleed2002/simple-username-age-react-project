import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Warning.module.css";
const Warning = (props) => {
    const clickHandler=(event) =>{
        if (event.target.classList.contains(styles.button) || event.target.classList.contains(styles.container)) {
            props.closeWarning();
          }
    };
    const WarningPortal = props =>{
      return (
        <div className={styles.container} onClick={clickHandler}>
      <div className={styles.warning}>
        <div className={styles.head}>
          <h2>{props.error}</h2>
        </div>
        <div className={styles.message}>
          <p>{props.message}</p>
          <button className={styles.button} onClick={clickHandler}>Okey</button>
        </div>
      </div>
    </div>
      );
    };
  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      <WarningPortal error={props.error} message={props.message} />,document.getElementById('warning')
    )}
    </React.Fragment>
  );
};

export default Warning;
