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
    <section className="py-10">
      <div className="w-full sm:max-w-7xl mx-auto px-8  sm:px-20 py-6 sm:py-12">
        <h1 className="text-xl font-bold sm:text-4xl max-w-3xl mb-4 text-slate-900">
          We blend our great experties & design engineering to Unleash your
          business’s full potential
        </h1>
        <div className="flex flex-col  gap-2 sm:grid sm:grid-cols-3 sm:gap-4 py-8 ">
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <PaintBucket size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium">Product Design</h3>
              <p className="text-xs py-2">
                We use user-centric design.We prioritize your business and users
                needs and we only design for them .
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <CodeBlock size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium">Development</h3>
              <p className="text-xs py-3">
                We turn your awesome ides into fully functional web or mobile
                app
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <Plugs size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium">Semaless Integrations</h3>
              <p className="text-xs py-2">
                We seamlessly integrate systems and workflows without
                disruptions.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <Buildings size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium">IT Infastructure</h3>
              <p className="text-xs py-2">
                We use cutting-edge technologies to build effective system
                Infastructures for your optimal performance.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <CodesandboxLogo size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium ">IT Help Desk Support</h3>
              <p className="text-xs py-2">
                We are a team of competent certified technical experts, to offer
                you high quaility IT services.
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1">
              {" "}
              <Cloud size={26} color="#4E43CA" />
            </div>
            <div className="flex-2">
              <h3 className="text-sm font-medium ">Cloud Infrastructure</h3>
              <p className="text-xs py-2">
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
