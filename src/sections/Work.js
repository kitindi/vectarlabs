import React from "react";
import learnly from "../images/learnly.png";
import softfy from "../images/softfy.png";
const Work = () => {
  return (
    <section className="w-full   " id="work">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-10 sm:pt-16">
        <h1 className="text-4xl sm:text-6xl text-slate-200 font-bold py-8">
          Our Impactful Projects
        </h1>
      </div>
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-3 pX-8 py-16">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>
          <img src={learnly} alt="" className="h-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <img src={softfy} alt="" className="h-full" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <img src={learnly} alt="" className="h-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-10 transition-opacity transition-duration: 150ms easy-out cursor-pointer"></div>{" "}
          <img src={softfy} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default Work;
