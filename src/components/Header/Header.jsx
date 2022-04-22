import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

function Header({ title = "title" }) {
  return (
    <header className={styles.appHeader}>
      <h1>{title.toUpperCase()}</h1>
      <Button text={"show preview"} />
    </header>
  );
}

export default Header;
