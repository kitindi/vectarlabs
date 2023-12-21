import React from "react";
import {
  PaintBucket,
  CodeBlock,
  Plugs,
  Buildings,
  Cloud,
  CodesandboxLogo,
} from "@phosphor-icons/react";

const Services = () => {
  return (
    <section className="py-10" id="services">
      <div className="w-full sm:max-w-7xl mx-auto px-4  sm:px-10 py-6 sm:py-12">
        <h1 className="text-4xl font-semibold sm:text-5xl max-w-5xl mb-4 leading-tighter text-slate-200 sm:py-10">
          We blend our great experties & design engineering to:
        </h1>
        <div className="flex flex-col  gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-4 py-10 ">
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                {" "}
                <PaintBucket size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium leading-tighter text-slate-200">
                Product Design
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                We use user-centric design.We prioritize your business and users
                needs and we only design for them .
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                <CodeBlock size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium leading-tighter text-slate-200">
                Development
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                We turn your awesome ides into fully functional web or mobile
                app
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                {" "}
                <Plugs size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium tracking-tighter text-slate-200">
                Semaless Integrations
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                We seamlessly integrate systems and workflows without
                disruptions.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                {" "}
                <Buildings size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium tracking-tighter text-slate-200">
                IT Infastructure
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                We use cutting-edge technologies to build effective system
                Infastructures for your optimal performance.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                {" "}
                <CodesandboxLogo size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium  tracking-tighter text-slate-200">
                IT Help Desk Support
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                We are a team of competent certified technical experts, to offer
                you high quaility IT services.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              <div className="h-12 w-12 rounded-md bg-[#21F06E] flex justify-center items-center">
                <Cloud size={28} color="#1D1D1F" />
              </div>
            </div>
            <div className="flex-2">
              <h3 className="text-lg sm:text-2xl font-medium  tracking-tighter text-slate-200">
                Cloud Infrastructure
              </h3>
              <p className="text-lg py-4 tracking-tighter text-slate-300">
                Leverage the power of scalability, Accessibility, Security and
                Reliability from our cloud engineering team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
