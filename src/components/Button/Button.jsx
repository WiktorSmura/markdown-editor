import React from "react";
import styles from "./Button.module.scss";

function Button({ text, handleClick }) {
  return (
    <button className={styles.mainButton} onClick={handleClick}>
      {text.toUpperCase()}
    </button>
  );
}

export default Button;
