// import React from "react";

import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";

import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
