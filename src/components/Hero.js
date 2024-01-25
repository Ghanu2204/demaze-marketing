import AnchorLink from "react-anchor-link-smooth-scroll";
import "./HeroStyles.css";

function Hero() {
  return (
    <div id="home">
      <div className="outer-container">
        <div className="inner-container">
          <div className="left-section">
            <h1>
              We bring <span>solutions</span> to make life easier for our
              customers.
            </h1>
            <p>
              Deliver superior customer experince by upgrading your business
              processes through Website & Mobile Application.
            </p>
            <button className="btn-contact">
              <AnchorLink href="#contact">Contact Us</AnchorLink>
            </button>
          </div>
          <div className="right-section">
            <img alt="image" src="/images/img2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
