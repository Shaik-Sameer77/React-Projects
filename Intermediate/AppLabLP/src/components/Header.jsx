import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss";

const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = Math.min(
        scrollPosition / (6 * window.innerHeight),
        1
      );
      setScrollOpacity(opacityValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }}
    >
      <div className="container">
        <Link to="/">
          <span className="text-warning">App</span>
          <span className="text-1000">Lab</span>
        </Link>
        <div className="menu-container">
          <ul className="menu-items">
            <li className="nav-item">
              <HashLink to="#home">Home</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="#features">Key Features</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="#pricing">Pricing</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="#testimonials">Testimonial</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="#faq">FAQ</HashLink>
            </li>
          </ul>
          <form className="form">
            <Link to="/">
              <button className="btn">Try for free</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
