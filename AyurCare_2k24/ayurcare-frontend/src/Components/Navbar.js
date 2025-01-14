import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../Assets/logo.png';
import { logout } from "./api/AyurcareApiService";
import { useNavigate} from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for username
    const username = localStorage.getItem('username');
    setIsLoggedIn(username !== null);
  }, []);

  const openNav = () => {
    setNav(!nav);
  };

  const regLoginBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('username');
    localStorage.removeItem('patientId');
    localStorage.removeItem('userid');
    localStorage.removeItem('role')
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="aboutus" className="navbar-links">
            AboutUs
          </a>
        </li>
        <li>
          <a href="reachus" className="navbar-links">
            ContactUs
          </a>
        </li>
        <li>
          <a href="profile" className="navbar-links">
            Profile
          </a>
        </li>
      </ul>
      {isLoggedIn ? (
        <button
          className="navbar-btn"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <a href="/login" className="navbar-links">
          <button
            className="navbar-btn"
            type="button"
            disabled={isButtonDisabled}
            onClick={regLoginBtnClick}
          >
            Sign Up
          </button>
        </a>
      )}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
