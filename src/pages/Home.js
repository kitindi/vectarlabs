import React from "react";
import Hero from "../sections/Hero";
import Proof from "../sections/Proof";
import Services from "../sections/Services";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Proof />
      <Services />
    </div>
  );
};

export default Home;
