import React from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import darkmodelogo from "../images/darkmodelogo.svg";

const Hero = () => {
  return (
    <section className="bg-[#1D1D1F] w-full">
      <div class=" mx-auto max-w-7xl px-4 sm:px-16 py-4 sm:py-0">
        <div className=" flex justify-between items-center">
          <div className=" ">
            <img src={darkmodelogo} alt="" className="h-4 sm:h-5" />
          </div>
          <div className="sm:hiddedn"></div>
          <div className="hidden sm:block">
            <ul className="flex gap-8 items-center py-3">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                className="text-xs text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Home
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="services"
                className="text-xs text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Services
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="work"
                className="text-xs text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Our Work
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="about"
                className="text-xs text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                About
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={5}
                duration={700}
                to="contact"
                className="text-xs text-slate-900 bg-[#21F06E] py-2 px-8 rounded-sm font-bold cursor-pointer"
              >
                Let's Talk
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-28 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-20 lg:pt-20 lg:pb-10">
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
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
            className="text-xs text-slate-900 bg-[#21F06E] py-2 px-8 rounded-sm font-bold w-fit mx-auto my-5 cursor-pointer"
          >
            Have an idea ? Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
