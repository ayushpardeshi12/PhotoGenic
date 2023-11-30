import React from "react";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div className="navbar">
      <p className="logo">Photogenic</p>
      <nav>
        <ul id="list">
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
