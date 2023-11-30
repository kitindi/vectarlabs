import React from "react";
import Hero from "../sections/Hero";
import Proof from "../sections/Proof";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Testimonial from "../sections/Testimonial";
import About from "../sections/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full bg-[#1D1D1F]">
      <Hero />
      <Proof />
      <Services />
      <Work />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
