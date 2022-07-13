import React from "react";
import styles from "./Textarea.module.scss";
import Description from "../Description/Description";

function textarea({ value, onChange }) {
  return (
    <div className={styles.container}>
      <Description text={"markdown"} />
      <textarea
        placeholder="your amazing markdown"
        className={styles.textEditor}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default textarea;
