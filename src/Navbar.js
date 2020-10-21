import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">sSHOP</div>
        <ul className="nav-links">
          <li>
            <a>EXPLORE</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>HELP</a>
          </li>
        </ul>

        <ul className="nav-links down">
          <li>
            <a>LOGIN</a>
          </li>
          <li>
            <a>SIGN UP</a>
          </li>
          <li>
            <a>CART</a>
          </li>
        </ul>
        <i className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Navbar;
