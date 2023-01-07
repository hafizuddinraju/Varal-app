import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Navbar></Navbar>
      {/* <Header /> */}
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
