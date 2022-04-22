import React from "react";
import styles from "./Textarea.module.scss";

function textarea({ value, onChange }) {
  return (
    <textarea
      className={styles.textEditor}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default textarea;
