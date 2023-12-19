import ServiceData from "./ServiceData";
import "./ServicesStyles.css";

function Services() {
  return (
    <div id="services">
      <div className="outer">
        <div>
          <h2>Our Services</h2>
          <p>
            The service we offer is specifically designed to meet your needs.{" "}
          </p>
        </div>
        <div className="service-cards">
          <ServiceData
            image="/images/game-dev.png"
            heading="Game Development"
            text="We focus on expanding your imagination. Our mobile game team 
          offers art and design, user experience design, and cross-platform mobile 
          game development services using Unity and Unreal engines."
          />
          <ServiceData
            image="/images/app-dev.png"
            heading="App Development"
            text="We deliver next-generation iOS, Android and Flutter 
          applications to meet the most demanding customer requirements. 
          Our skilled team design and develop custom feature-packed apps across 
          various business segments."
          />
          <ServiceData
            image="/images/sm.png"
            heading="Social Media Marketing"
            text="A successful digital marketing campaign attracts more customers 
        and generates conversions. We have a complete digital marketing service 
        package that promises augmented website traffic and a fruitful customer 
        base."
          />
        </div>
        <div className="service-cards">
          <ServiceData
            image="/images/graphic-design.png"
            heading="Graphic Designing"
            text="At Demaze, We offer graphic design solutions to businesses 
          of all types like brochures, branding banners, social media posts, 
          creative portfolios, logos and brand identity designs."
          />
          <ServiceData
            image="/images/web-dev.png"
            heading="Web Development"
            text="We provide end-to-end web app development services designed 
        exclusively to solve your unique business challenges. At Demaze 
        Technologies, we offer custom web apps, portals, e-commerce and SaaS 
        development."
          />
          <ServiceData
            image="/images/AI.png"
            heading="Artificial Intelligence"
            text="Demaze Technologies offers the best AI development services per 
          the client's requirements. We are experienced in AI development, Natural 
          language processing, computer vision and deep learning to create accurate 
          apps."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
