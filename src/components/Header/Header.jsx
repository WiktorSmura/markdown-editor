import React from "react";
import "./Header.module.scss";

function Header({ title = "title" }) {
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
    </header>
  );
}

export default Header;
