import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss"

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link>
            <span className="text-warning">App</span>
            <span className="text-1000">Lab</span>
          </Link>
          <div
            className="menu-container"
          >
            <ul className="menu-items">
              <li className="nav-item">
                <HashLink
                  to="#home"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item" >
                <HashLink  to="#features">
                  Key Features
                </HashLink>
              </li>
              <li className="nav-item" >
                <HashLink to="#pricing">
                  Pricing
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#testimonials">
                  Testimonial
                </HashLink>
              </li>
              <li className="nav-item" >
                <HashLink to="#faq">
                  FAQ
                </HashLink>
              </li>
            </ul>
            <form className="form">
              <button
                className="btn"
                type="submit"
              >
                Try for free
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
