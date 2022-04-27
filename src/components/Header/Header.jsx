import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContext";

function Header({ title = "title" }) {
  const { showPreview, setShowPreview } = useAppContext();
  return (
    <header className={styles.appHeader}>
      <h1>{title.toUpperCase()}</h1>
      <Button
        text={"show preview"}
        handleClick={() => setShowPreview(!showPreview)}
      />
    </header>
  );
}

export default Header;
