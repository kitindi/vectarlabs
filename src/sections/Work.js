import React from "react";
import learnly from "../images/learnly.png";
import softfy from "../images/softfy.png";
const Work = () => {
  return (
    <section className="w-full  bg-[#1F1F1F] ">
      <div className="max-w-7xl mx-auto px-20 pt-10">
        <h1 className="text-xl sm:text-4xl text-slate-200 font-bold">
          Selected projects
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 gap-3 pX-8 py-20">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#0B0E14] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>
          <img src={learnly} alt="" className="h-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#0B0E14] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <img src={softfy} alt="" className="h-full" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#0B0E14] opacity-80 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <img src={learnly} alt="" className="h-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#0B0E14] opacity-80 h-full hover:opacity-10 transition-opacity transition-duration: 150ms easy-out cursor-pointer"></div>{" "}
          <img src={softfy} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default Work;
