import "./AboutStyles.css";

function About() {
  return (
    <div className="about" id="about">
      <div>
        <h1>
          About <span>Demaze</span> Technologies
        </h1>
      </div>
      <div className="aboutus">
        <div className="about-img">
          <img alt="image" src="/images/img1.jpg" />
        </div>
        <div className="about-detail">
          <div className="about-heading">
            <h3>
              <span>Who</span> Are We?
            </h3>
          </div>
          <div className="about-text">
            <p>
              We are a group of brilliant & helpful minds and exceptional
              talents who promote the value of effective communication and
              process transparency.
            </p>
            <br />
            <p>
              We are believers in change! A change is driven by technology and
              innovation. We help individuals, start-ups, businesses, and
              enterprises adapt and adopt digital transformation. We aim to
              change people's lives and improve businesses with our progressive,
              value-adding, innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-rev">
        <div className="about-detail">
          <div className="about-heading">
            <h3>
              <span>What</span> We Do Best?
            </h3>
          </div>
          <div className="about-text">
            <p>We add the value to your idea's execution.</p>
            <br />
            <p>
              We start by listening to the ideas, issues, requirements,
              challenges and objectives. The process continues with an effort to
              understand the business, market sector and competitors to develop
              information which is combined with our technical knowledge,
              expertise and research in order to provide the best solution at
              the lowest cost.
            </p>
          </div>
        </div>
        <div className="about-img">
          <img alt="image" src="/images/about.png" />
        </div>
      </div>
    </div>
  );
}
export default About;
