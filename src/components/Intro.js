import "./IntroStyles.css";

function Intro() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="left-section">
            <h1>We bring <span>solutions</span> to make life easier for our customers.</h1>
            <p>
              Deliver superior customer experince by upgrading your business
              processes through Website & Mobile Application.
            </p>
            <button className="btn-contact"><a href='contact'>Contact Us</a></button>
          </div>
          <div className="right-section">
            <img alt="image" src="/images/img2.jpg"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
