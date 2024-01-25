import SolutionData from "./SolutionsData";
import "./SolutionsStyles.css";

function Solution() {
  return (
    <div id="solutions">
      <div className="outer-div">
        <div>
          <h1>Our <span>Solutions</span></h1>
          <p>
            We can ensure you intelligent industry-specific mobile applications
            that are packed with advanced features, faster, secure like never
            before and ultimately, able to pave their path into users’
            smartphones and win app marketplace.
          </p>
        </div>
        <div className="solution-cards">
          <SolutionData icon="fa-solid fa-bullhorn" heading="Marketing" />
          <SolutionData icon="fa-solid fa-pizza-slice" heading="Food & Beverages" />
          <SolutionData icon="fa-solid fa-cart-shopping" heading="eCommerce" />
          <SolutionData icon="fa-solid fa-table-tennis-paddle-ball" heading="Sports" />
          <SolutionData icon="fa-solid fa-building" heading="Real-estate" />
          <SolutionData icon="fa-solid fa-hashtag" heading="Social media & Communication" />
          <SolutionData icon="fa-solid fa-landmark" heading="Finance, Banking & Insurance" />
          <SolutionData icon="fa-solid fa-kit-medical" heading="Wellness and Health" />
          <SolutionData icon="fa-solid fa-industry" heading="Manufacturing" />
          <SolutionData icon="fa-solid fa-plane-departure" heading="Travel & Hospitality" />
          <SolutionData icon="fa-solid fa-clapperboard" heading="Entertainment" />
          <SolutionData icon="fa-solid fa-graduation-cap" heading="Education" />
        </div>
      </div>
    </div>
  );
}

export default Solution;
