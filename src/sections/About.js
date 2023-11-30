import React from "react";
import {
  RocketLaunch,
  BatteryChargingVertical,
  IntersectSquare,
} from "@phosphor-icons/react";
import aboutImg from "../images/about_img.svg";

const About = () => {
  return (
    <section className="bg-[#F2F1EA]" id="about">
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto sm:flex sm:flex-col lg:grid lg:grid-cols-12 place-content-center gap-10 px-4 sm:px-10 py-10 sm:py-8">
          <div className="col-span-6 ">
            <h1 className="text-slate-900 font-bold text-6xl"> We are</h1>
            <ul className="py-20 flex flex-col gap-16">
              <li className="grid grid-cols-12">
                <div className="h-14 w-14 rounded-md bg-[#21F06E] flex justify-center items-center col-span-2">
                  <RocketLaunch size={28} color="#1F1F1D" weight="fill" />
                </div>
                <div className="col-span-10">
                  <p className="font-bold text-xl sm:text-2xl text-slate-800">
                    Disruptive
                  </p>
                  <p className="text-lg mt-2 text-slate-800">
                    We make it easier for our clients to embrace new trends and
                    technologies to deliver memorable customer experiences
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-12">
                <div className="h-14 w-14 rounded-md bg-[#21F06E] flex justify-center items-center col-span-2">
                  <BatteryChargingVertical
                    size={28}
                    color="#1F1F1D"
                    weight="fill"
                  />
                </div>
                <div className="col-span-10">
                  <p className="font-bold text-2xl text-slate-800">
                    Empathetic
                  </p>
                  <p className="text-lg mt-4 text-slate-800">
                    Our clients needs come first. We feel and understand the the
                    pain of working with innefficient solutions, we are driven
                    towards solving them.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-12 ">
                <div className="h-14 w-14 rounded-md bg-[#21F06E] flex justify-center items-center col-span-2">
                  <IntersectSquare size={28} color="#1F1F1D" weight="fill" />
                </div>
                <div className="col-span-10">
                  <p className="font-bold text-2xl text-slate-800">Flexible</p>
                  <p className="text-lg mt-4 text-slate-800">
                    We adapt to our customer demands timely. We put forward our
                    clients business goals at the center of our solutions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-6 flex items-center justify-center">
            <img src={aboutImg} alt="" className="w-full object-cover " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
