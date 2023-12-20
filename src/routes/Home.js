import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Solution from "../components/Solutions";

function Home() {
  return (
    <>
      <Navbar />
      <Intro/>
      <About/>
      <Services/>
      <Solution/>
      <ContactUs/>
    </>
  );
}
export default Home;
