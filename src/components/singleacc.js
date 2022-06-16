import React, { useState } from "react";
import styles from "./sacc.module.css";
import Chevron from "react-chevron";
const SAcc = (props) => {
  const [open, setOpen] = useState(true);

  const clickHandler = (e) => {
    setOpen(!open);
  };
  return (
    <div className={styles.entire} onClick={clickHandler}>
      <div className={styles.titleRow}>
        <div className={styles.title}>{props.title}</div>
        <div className={open ? styles.chevOpen : styles.chevClose}>
          <Chevron direction={"up"} />
        </div>
      </div>
      <div className={styles.responseText}>
        <div
          className={`${styles.content} ${
            open ? `${styles.open}` : `${styles.closed}`
          }`}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
};
export default SAcc;
