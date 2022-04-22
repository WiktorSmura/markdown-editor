import React from "react";
import styles from "./PreviewBox.module.scss";

function PreviewBox({ dangerouslySetInnerHTML }) {
  return (
    <div
      className={styles.previewBox}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    ></div>
  );
}

export default PreviewBox;
