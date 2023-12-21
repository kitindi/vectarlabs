import React from "react";
import darkmodelogo from "../images/darkmodelogo.svg";
import {
  LinkedinLogo,
  FacebookLogo,
  CaretUp,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <section
      className="w-full pt-8 sm:pt-14 pb-2 bg-[#1D1D1F] relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 sm:pt-14 sm:pb-3 ">
        <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2  mb-10  py-10">
          <div className="sm:col-span-8">
            {" "}
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-200 text-left">
              {" "}
              Have you got an idea in mind?
            </h2>
            <p className="text-xl  text-left text-slate-300 mt-8 max-w-xl leading-loose">
              We are more than delighted to serve you, Let's work together
            </p>
          </div>
          <div className="sm:col-span-4 py-10 sm:py-5 sm:pl-20">
            <p className="text-slate-300 text-left flex gap-4 items-center text-lg mb-5">
              <EnvelopeSimple size={28} color="#21F06E" weight="fill" />{" "}
              serviceme@vectarlabs.com
            </p>
            <p className="text-slate-300 text-left flex gap-4 items-center text-lg">
              <Phone size={30} color="#21F06E" weight="fill" /> +255 757639 149
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between  w-full sm:py-12">
          <div className="pt-6 pb-5 sm:py-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className="cursor-pointer"
            >
              {" "}
              <img src={darkmodelogo} alt="" className="h-7 sm:h-7" />
            </Link>
            <p className="text-sm text-slate-400 py-2">
              Building sustainable solutions
            </p>
          </div>
          <div className="py-8 sm:py-0 sm:pl-5">
            <h3 className="text-lg font-semibold text-slate-300">Company</h3>
            <ul>
              <li className="text-slate-400 text-sm my-2">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                  className="cursor-pointer"
                >
                  About us
                </Link>
              </li>
              <li className="text-slate-400 text-sm my-2">
                <a href="http://">Careers</a>
              </li>
            </ul>
          </div>
          <div className="pb-5 sm:pb-0 sm:pl-5">
            <h3 className="text-lg font-semibold text-slate-300">Social</h3>
            <ul>
              <li className="text-slate-400 text-sm my-2">
                <a href="http://" className="flex  items-center gap-2">
                  <LinkedinLogo size={20} color="#dedede" weight="fill" />{" "}
                  LinkedIn
                </a>
              </li>
              <li className="text-slate-400 text-sm my-2">
                <a href="http://" className="flex  items-center gap-2">
                  <FacebookLogo size={20} color="#dedede" weight="fill" />{" "}
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="pb-2">
          <p className="text-[10px] text-slate-400">
            &copy; vectarlabs {year} . All rights reserved
          </p>
        </div>
      </div>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
        className="absolute bottom-10 right-6 h-5 w-5 sm:h-8 sm:w-8 rounded-full bg-[#1f1f1d] border-2 border-[#21F06E] cursor-pointer flex justify-center items-center"
      >
        <CaretUp size={15} color="#dedede" weight="fill" />
      </Link>
    </section>
  );
};

export default Footer;
