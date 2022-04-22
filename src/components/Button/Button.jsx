import React from "react";
import styles from "./Button.module.scss";

function Button({ text }) {
  return <button className={styles.mainButton}>{text.toUpperCase()}</button>;
}

export default Button;
