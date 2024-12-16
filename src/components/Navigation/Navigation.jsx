// import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <nav className={styles.nav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? "X" : "☰"}
        </button>

        <ul className={`${styles.list} ${menuOpen ? styles.open : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Acasa
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs" onClick={() => setMenuOpen(false)}>
              Despre Noi
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              Servicii
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" onClick={() => setMenuOpen(false)}>
              Rezervari
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
