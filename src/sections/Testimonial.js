import React from "react";
import { Quotes } from "@phosphor-icons/react";

const Testimonial = () => {
  return (
    <section className="w-full py-20 px-8 bg-[#1D1D1F]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-4xl font-bold mb-5 text-slate-200">
          The vectarLab effect:
          <br /> client testimonials
        </h1>
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:px-10 sm:gap-5 sm:py-10">
          <div className="  rounded-md px-5 py-8 bg-[#232A30]">
            <span>
              <Quotes size={20} color="#FFFFFF" weight="fill" />
            </span>
            <div>
              <p className="text-slate-200 text-xs">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-xs  text-slate-400 py-2">
                    Director | Golden Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-md px-5 py-8 bg-[#232A30]">
            <span>
              <Quotes size={20} color="#FFFFFF" weight="fill" />
            </span>
            <div>
              <p className="text-slate-200 text-xs">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-xs  text-slate-400 py-2">
                    Director | Golden Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
