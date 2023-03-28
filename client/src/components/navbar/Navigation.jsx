import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Blogs</h3>
      <nav ref={navRef} onClick={showNavbar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-blog">Blog</NavLink>
        <NavLink to="/tech">Technology</NavLink>
        <NavLink to="/health">Health & Sciences</NavLink>
        <NavLink to="/fashion">Fashion</NavLink>
        <NavLink to="/login">Sign in</NavLink>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navigation;
