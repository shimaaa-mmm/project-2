import React from "react";
import "./index.scss";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img src="/public/images/Untitled.webp" alt="Logo" />
                  </a>
                </div>
                <p className="footer_text doanar">
                  <a className="first" href="tel:+107834673789">
                    +10 783 467 3789
                  </a>
                  <br />
                  <a href="mailto:email@example.com">
                    <span className="__cf_email__">email@example.com</span>
                  </a>
                </p>
                <div className="social_links">
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Service</h3>
                <ul>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                  <li>
                    <a href="#">Domain</a>
                  </li>
                  <li>
                    <a href="#">Wordpress</a>
                  </li>
                  <li>
                    <a href="#">Shared Hosting</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Navigation</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Rooms</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title new">Newsletter</h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit">Sign Up</button>
                </form>
                <p className="newsletter_text">
                  Subscribe newsletter to get updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
      <div className="container">
        <div className="footer_border"></div>
        <div className="row">
          <div className="col-xl-12">
            <p className="copy_right text-center">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <FaHeart /> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
