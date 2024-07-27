import React, { useState, useEffect } from "react";
import { FaUser, FaAngleDown, FaComments } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track active link

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 90) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      // Store the scroll position in local storage
      localStorage.setItem('scrollY', scrollY);
    };

    // Retrieve the scroll position from local storage on page load
    const savedScrollY = localStorage.getItem('scrollY');
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY, 10));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle link click
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <img src="/images/Untitled.webp" alt="Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link 
                  to="/" 
                  className={activeLink === "/" ? "active" : ""} 
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/package" 
                  className={activeLink === "/package" ? "active" : ""} 
                  onClick={() => handleLinkClick("/package")}
                >
                  Package
                </Link>
              </li>
              <li>
                <a href="#">Blog <FaAngleDown className="icon" /></a>
                <div className=" ">
                  <ul className="submenu">
                    <li><a href="#">Single</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Pages <FaAngleDown className="icon" /></a>
                <div className="dropdown">
                  <ul>
                    <li><a href="#">Element</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#">Support</a></li>
              <li><Link to="/About">About</Link></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <a href="#" className="login">
              <FaUser /> Log In
            </a>
            <a href="#" className="live-chat">
              <FaComments className="chat" style={{ color: "#fff" }} />
              <span> Live Chat</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
