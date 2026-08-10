import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import YouTubeLive from "../components/YouTubeLive";
import Calendar from "../components/Calendar";
import Donation from "../components/Donation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Calendar />
      <YouTubeLive />
      <Donation />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;