import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Services from "./Components/services";
import Portfolio from "./Components/portfolio";
import Footer from "./Components/footer";
import Contact from "./Components/contactus";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}