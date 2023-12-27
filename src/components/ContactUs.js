import "./ContactUsStyles.css";

import React from "react";

function ContactUs() {
  return (
    <div id="contact" className="contact">
      <h1>
        <span>Contact</span> Us
      </h1>
      <div className="contactus">
        <div className="contact-form">
          <form>
            <input placeholder="Enter Your Name"></input>
            <input type="email" placeholder="Enter Your Email"></input>
            <input placeholder="Enter About Subject"></input>
            <textarea placeholder="Enter Your Message" rows="5"></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact-detail">
          <h3>Contact Detail</h3>

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
            <div className="detail">
              <i className="fa-brands fa-linkedin" />
              <a href="https://www.linkedin.com/company/demaze-technologies/">
                Demaze Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
