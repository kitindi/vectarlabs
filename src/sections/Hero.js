import React from "react";
import { Link } from "react-router-dom";
import darkmodelogo from "../images/darkmodelogo.svg";

const Hero = () => {
  return (
    <section className="bg-[rgb(31,31,31)]">
      <div class=" mx-auto max-w-7xl px-4 sm:px-16 py-4 sm:py-0">
        <div className=" flex justify-between items-center">
          <div className=" ">
            <img src={darkmodelogo} alt="" className="h-4 sm:h-5" />
          </div>
          <div className="sm:hiddedn"></div>
          <div className="hidden sm:block">
            <ul className="flex gap-8 items-center py-3">
              <Link to="/" className="text-xs text-slate-100 font-semibold">
                Home
              </Link>
              <Link
                to="/services"
                className="text-xs text-slate-100 font-semibold"
              >
                Services
              </Link>
              <Link
                to="/works"
                className="text-xs text-slate-100 font-semibold"
              >
                Our Work
              </Link>
              <Link
                to="/works"
                className="text-xs text-slate-100 font-semibold"
              >
                About
              </Link>
              <Link
                to="/#about"
                className="text-xs text-slate-100 bg-[#4E43CA] py-2 px-8 rounded-sm font-semibold"
              >
                Let's Talk
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-20 lg:pt-20">
        <div class="flex flex-col w-full mb-4 text-center">
          <div>
            <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-slate-200 md:text-5xl lg:text-6xl lg:max-w-7xl">
              We are Building tech products that empowers{" "}
              {/* <br class="hidden lg:block" /> */}
              your business to thrive.
            </h1>
          </div>

          <p class="max-w-xl mx-auto mt-8 text-sm sm:text-base tracking-tighter text-center text-slate-100">
            We are a full digital service agency, crafting cutting-edge
            innovative solutions for enterprises, startups and organizations.
          </p>

          <Link
            to="/#about"
            className="text-xs text-white bg-[#4E43CA] py-2 px-8 rounded-sm font-semibold w-fit mx-auto my-5"
          >
            Have an idea ? Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
