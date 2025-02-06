import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>KASHVI</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">yash</a>
        </li>
        <li>
          <a href="#services">sabne</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
