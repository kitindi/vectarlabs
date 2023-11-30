import React from "react";
import { Quotes } from "@phosphor-icons/react";

const Testimonial = () => {
  return (
    <section className="w-full bg-[#1D1D1F]">
      <div className="max-w-7xl mx-auto py-20 px-8 sm:px-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-5 text-slate-200 py-8">
          Client testimonials
        </h1>
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:px-10 sm:gap-5 sm:py-10">
          <div className="  rounded-md px-5 py-8 bg-[#232A30]">
            <span>
              <Quotes size={20} color="#FFFFFF" weight="fill" />
            </span>
            <div>
              <p className="text-slate-200 text-xl">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-lg  text-slate-400 py-2">
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
              <p className="text-slate-200 text-xl">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-lg  text-slate-400 py-2">
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
