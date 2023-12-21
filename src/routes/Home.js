import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Solution from "../components/Solutions";

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Solution/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
export default Home;
