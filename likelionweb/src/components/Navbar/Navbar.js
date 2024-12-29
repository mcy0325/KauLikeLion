import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        LIKELION <span className="highlight">Korea Aerospace Univ.</span>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            프로젝트
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
