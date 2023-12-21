import "./FooterStyles.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-class">
          <div>
            <img alt="image" src="/images/logo.png" />
          </div>
          <div className="social-media">
            <h4>Follow Us On</h4>
            <a href="https://www.linkedin.com/company/demaze-technologies/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/demaze-technologies/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.linkedin.com/company/demaze-technologies/">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/demaze-technologies/">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-class">
          <h4>Our Services</h4>
          <a href="#services">Web Development</a>
          <a href="#services">App Development</a>
          <a href="#services">Game Development</a>
          <a href="#services">Artificial Intelligence</a>
          <a href="#services">Social Media Marketing</a>
          <a href="#services">Graphic Designing</a>
        </div>
        <div className="footer-class">
          <h4>Important Links</h4>
          <a href="#services">Our Services</a>
          <a href="#about">About Us</a>
          <a href="#solutions">Our Solutions</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="footer-class">
          <h4>Contact Us</h4>
          <div className="details">
            <div className="detail">
              <i className="fa-solid fa-location-dot" />
              <p>
                D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota,
                Ahmedabad, Gujarat, 382470
              </p>
            </div>
            <div className="detail">
              <i className="fa-solid fa-phone" />
              <a href="tel:+917016660537">+91 7016660537</a>
            </div>
            <div className="detail">
              <i className="fa-solid fa-envelope" />
              <a href="mailto:info@demaze.in">info@demaze.in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved By © Demaze Technologies 2023-2024.</p>
      </div>
    </div>
  );
}

export default Footer;
