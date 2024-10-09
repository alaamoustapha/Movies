import React from "react";
import logo from "../../Assets/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                TV Show
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon icon={faHeart} className="top-home-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
