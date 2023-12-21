import React from "react";
import { Link } from "react-router-dom";

import { projects } from "../projects";

const Work = () => {
  return (
    <section className="w-full   " id="work">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-10 sm:pt-16">
        <h1 className="text-4xl sm:text-5xl text-slate-200 font-semibold py-8">
          Our Works
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-3 pX-8 py-16">
        {projects.map((project) => (
          <Link
            to={`/project/${project?.id}`}
            className="relative pb-4"
            key={project?.id}
          >
            <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>

            <figure>
              <img
                src={project?.images.shots[0]}
                alt=""
                className="h-[440px] w-full object-cover"
              />
              <figcaption className="py-4 px-10">
                <p className="text-sm text-white"></p>
              </figcaption>
            </figure>
          </Link>
        ))}
        {/* <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <figure>
            <img src={softfy} alt="" className="h-full" />
            <figcaption className="py-4 px-10">
              <p className="text-lg text-white">
                Progress app - performance tracking system
              </p>
            </figcaption>
          </figure>
        </div> */}

        {/* <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-0 transition-opacity ease-out cursor-pointer"></div>{" "}
          <img src={learnly} alt="" className="h-full" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full z-10 bg-[#101117] opacity-70 h-full hover:opacity-10 transition-opacity transition-duration: 150ms easy-out cursor-pointer"></div>{" "}
          <img src={softfy} alt="" className="h-full" />
        </div> */}
      </div>
    </section>
  );
};

export default Work;
