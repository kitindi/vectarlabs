import { useState } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { List, X } from "@phosphor-icons/react";
import darkmodelogo from "../images/darkmodelogo.svg";

const Hero = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((show) => !show);
  };
  return (
    <section className="bg-[#1D1D1F] w-full" id="hero">
      <div class=" mx-auto max-w-7xl px-4 sm:px-16 py-4 sm:py-0">
        <div className=" flex justify-between items-center">
          <div className=" ">
            <div className="flex flex-row justify-between sm:block">
              <img src={darkmodelogo} alt="" className="h-7 sm:h-7 block" />
            </div>
          </div>
          <div
            className={`${show ? "hidden" : "block"} sm:hiddedn cursor-pointer`}
            onClick={showHandler}
          >
            <List
              size={32}
              color="#f2f2f2"
              weight="fill"
              className="sm:hidden"
            />
          </div>
          <div
            className={`${show ? "block" : "hidden"} sm:hiddedn cursor-pointer`}
            onClick={showHandler}
          >
            <X size={32} color="#f2f2f2" weight="fill" />
          </div>

          <div className="hidden sm:block">
            <ul className="flex gap-8 items-center py-3">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                className="text-lg text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Home
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="services"
                className="text-lg text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Services
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="work"
                className="text-lg text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                Our Work
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                to="about"
                className="text-lg text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              >
                About
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={5}
                duration={700}
                to="contact"
                className="text-lg text-slate-900 bg-[#21F06E] py-2 px-8 rounded-sm font-bold cursor-pointer"
              >
                Let's Talk
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* MOBILE NAVBAR */}

      {show ? (
        <nav
          className={`w-full sm:hidden h-screen bg-[#1F1F1D] z-10 flex justify-center`}
        >
          <ul className=" flex flex-col  items-center py-32 gap-6">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className="text-xl text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              onClick={showHandler}
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="services"
              className="text-xl text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              onClick={showHandler}
            >
              Services
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="work"
              className="text-xl text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              onClick={showHandler}
            >
              Our Work
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="about"
              className="text-xl text-slate-100 font-semibold cursor-pointer border-b-2 border-[#1f1f1f] hover:border-b-2 hover:border-[#6CF29E] py-1"
              onClick={showHandler}
            >
              About
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="contact"
              className="text-xl text-slate-900 bg-[#21F06E] py-2 px-16 rounded-sm font-bold cursor-pointer"
              onClick={showHandler}
            >
              Let's Talk Solutions
            </Link>
          </ul>
        </nav>
      ) : (
        ""
      )}
      <div class="px-4 pt-44 pb-8 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-20 sm:pt-52 lg:pb-10">
        <div class="flex flex-col w-full mb-4 text-center">
          <div>
            <h1 class="  max-w-8xl text-4xl font-bold tracking-tighter text-slate-200 sm:text-5xl lg:text-7xl lg:max-w-7xl">
              We are Building tech products that empowers{" "}
              {/* <br class="hidden lg:block" /> */}
              your business to thrive.
            </h1>
          </div>

          <p class="max-w-3xl mx-auto mt-8 text-lg sm:text-2xl tracking-tighter text-center text-slate-300">
            We are a full digital service agency, crafting cutting-edge
            innovative solutions for enterprises, startups and organizations.
          </p>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
            className="text-xl text-slate-900 bg-[#21F06E] py-3 px-20 rounded-sm font-bold w-fit mx-auto my-7 cursor-pointer"
          >
            Let's Talk Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
