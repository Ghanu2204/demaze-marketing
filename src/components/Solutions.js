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
          <SolutionData image="/images/marketing.png" heading="Marketing" />
          <SolutionData image="/images/food.png" heading="Food & Beverages" />
          <SolutionData image="/images/ecommerce.png" heading="eCommerce" />
          <SolutionData image="/images/sports.png" heading="Sports" />
        </div>
        <div className="solution-cards">
          <SolutionData image="/images/estate.png" heading="Real-estate" />
          <SolutionData image="/images/socialmedia.png" heading="Social media & Communication" />
          <SolutionData image="/images/banking.png" heading="Finance, Banking & Insurance" />
          <SolutionData image="/images/health.png" heading="Wellness and Health" />
        </div>
        <div className="solution-cards">
          <SolutionData image="/images/manufacturing.png" heading="Manufacturing" />
          <SolutionData image="/images/travel.png" heading="Travel & Hospitality" />
          <SolutionData image="/images/entertainment.png" heading="Entertainment" />
          <SolutionData image="/images/education.png" heading="Education" />
        </div>
      </div>
    </div>
  );
}

export default Solution;
