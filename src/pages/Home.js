import React from "react";
import Hero from "../sections/Hero";
import Proof from "../sections/Proof";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Proof />
      <Services />
      <Work />
      <Testimonial />
    </div>
  );
};

export default Home;
