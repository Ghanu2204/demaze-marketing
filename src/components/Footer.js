import "./FooterStyles.css";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <div className="footer-links-class">
          <div className="footer-links">
            <h4>Our Services</h4>
            <AnchorLink href="#services">Web Development</AnchorLink>
            <AnchorLink href="#services">App Development</AnchorLink>
            <AnchorLink href="#services">Game Development</AnchorLink>
            <AnchorLink href="#services">Artificial Intelligence</AnchorLink>
            <AnchorLink href="#services">Social Media Marketing</AnchorLink>
            <AnchorLink href="#services">Graphic Designing</AnchorLink>
          </div>
          <div className="footer-links">
            <h4>Important Links</h4>
            <AnchorLink href="#services">Our Services</AnchorLink>
            <AnchorLink href="#about">About Us</AnchorLink>
            <AnchorLink href="#solutions">Our Solutions</AnchorLink>
            <AnchorLink href="#contact">Contact Us</AnchorLink>
          </div>
          <div className="footer-links">
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
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved By © Demaze Technologies 2023-2024.</p>
      </div>
    </div>
  );
}

export default Footer;
