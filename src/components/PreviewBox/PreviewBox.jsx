import React from "react";
import styles from "./PreviewBox.module.scss";
import Description from "../Description/Description";

function PreviewBox({ dangerouslySetInnerHTML }) {
  return (
    <div className={styles.container} data-testid="preview-box">
      <Description text="preview" />
      <div
        className={styles.previewBox}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      ></div>
    </div>
  );
}

export default PreviewBox;
