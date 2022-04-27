import React from "react";
import styles from "./Description.module.scss";

function Description({ text }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{text.toUpperCase()}</h2>
    </div>
  );
}

export default Description;
